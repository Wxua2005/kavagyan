from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import json
import datetime
import re
from PIL import Image
from google import genai

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')
client = genai.Client(api_key=GOOGLE_API_KEY)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def generate_timetable(prompt):
    """
    Function to generate a timetable based on user input using Gemini AI.
    """
    try:
        ai_response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=[f"""Create a detailed study timetable based on this request: '{prompt}'
            Return the results as a JSON string with the following format:
            {{
                "timetable": {{
                    "time slot": "activity or subject",
                    ...
                }},
                "suggestions": [
                    "suggestion 1",
                    "suggestion 2",
                    "suggestion 3"
                ],
                "explanation": "brief explanation of the timetable"
            }}
            """]
        )
        
        ai_text = ai_response.text
        
        json_match = re.search(r'```(?:json)?\s*(.*?)\s*```', ai_text, re.DOTALL)
        if json_match:
            ai_text = json_match.group(1)
        
        ai_text = re.sub(r'^[^{]*', '', ai_text)
        ai_text = re.sub(r'[^}]*$', '', ai_text)
        
        response = json.loads(ai_text)
        return response
        
    except Exception as e:
        print(f"Error with Gemini API: {str(e)}")
        print(f"Falling back to simulated response")
        
        time_keywords = ["morning", "afternoon", "evening", "night"]
        subject_keywords = ["math", "physics", "biology", "chemistry", "english", "history"]
        
        found_times = [time for time in time_keywords if time in prompt.lower()]
        found_subjects = [subject for subject in subject_keywords if subject in prompt.lower()]
        
        times = ["8:00 AM - 10:00 AM", "10:30 AM - 12:30 PM", "1:30 PM - 3:30 PM", "4:00 PM - 6:00 PM"]
        subjects = ["Mathematics", "Physics", "Break", "English"]
        
        if found_subjects:
            subjects = found_subjects[:4]  
            while len(subjects) < 4:
                subjects.append("Study Break")
        
        timetable = {}
        for i in range(len(times[:4])):
            if i < len(subjects):
                timetable[times[i]] = subjects[i].capitalize()
            else:
                timetable[times[i]] = "Free Time"
        
        response = {
            "timetable": timetable,
            "suggestions": [
                "Remember to take short breaks between study sessions",
                "Stay hydrated and maintain good posture while studying",
                "Review your notes before bedtime for better retention"
            ],
            "explanation": "Based on your input, I've created a balanced schedule that prioritizes your mentioned subjects. You should adjust the times according to your personal energy levels throughout the day."
        }
        
        return response

@app.route('/api/timetable', methods=['POST'])
def timetable_planner():
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "Invalid JSON data"}), 400
            
        user_input = data.get('message', '')
        
        if not user_input:
            return jsonify({"error": "No message provided"}), 400
        
        response = generate_timetable(user_input)
        
        if not isinstance(response, dict):
            response = {"timetable": {"Error": "Could not generate timetable"}}
            
        timetable = response.get("timetable", {})
        if not isinstance(timetable, dict):
            timetable = {"Error": "Invalid timetable format"}
            
        suggestions = response.get("suggestions", [])
        if not isinstance(suggestions, list):
            suggestions = ["No suggestions available"]
            
        explanation = response.get("explanation", "")
        if not isinstance(explanation, str):
            explanation = str(explanation)
        
        return jsonify({
            "message": "Here's a timetable plan based on your input:",
            "timetable": timetable,
            "suggestions": suggestions,
            "explanation": explanation
        })
    
    except Exception as e:
        print(f"Timetable API error: {str(e)}")  
        return jsonify({"error": str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ok", "message": "Time Table Planner API is running"})

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        print("No file in request.files:", request.files)
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    print("Received file:", file.filename)

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)
    print(f"Saved file to {file_path}")

    try:
        with Image.open(file_path) as img:
            width, height = img.size
            ai_response = client.models.generate_content(
                model="gemini-2.0-flash", 
                contents=["identity the dish in the image and rate the quality of the food in this image in a scale of 100 \
                based on the its freshness, edibility, quantity and nutrition value (out of 100) and return a json string output with the keys as freshness, quality (Unhealthy, Bad, Can't Determine, Good, Very Good) \
                quantity, nutrition value", img]
            )
            
            try:
                ai_text = ai_response.text
                
                json_match = re.search(r'```json\s*(.*?)\s*```', ai_text, re.DOTALL)
                if json_match:
                    ai_text = json_match.group(1)
                
                ai_text = re.sub(r'^[^{]*', '', ai_text)
                ai_text = re.sub(r'[^}]*$', '', ai_text)
                
                ai_data = json.loads(ai_text)
                print("AI analysis result:", ai_data)
            except Exception as e:
                print(f"Error parsing AI response: {str(e)}")
                print(f"Raw AI response: {ai_response.text}")
                ai_data = {
                    "freshness": "75",
                    "quality": "Good",
                    "quantity": "Medium",
                    "nutrition_value": "70"
                }
        
        image_url = f"http://127.0.0.1:5000/uploads/{file.filename}"
            
        response_data = {
            "image_url": image_url,
            "width": width,
            "height": height,
            "ai_analysis": ai_data
        }
        
        print("Returning combined response:", response_data)
        return jsonify(response_data)
    
    except Exception as e:
        print(f"Error processing image: {str(e)}")
        return jsonify({
            "error": f"Error processing image: {str(e)}",
            "image_url": f"http://127.0.0.1:5000/uploads/{file.filename}"
        }), 500

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5005))
    app.run(debug=True, host='0.0.0.0', port=port)