const quizData = {
    algebra: [
        {
            question: "Solve for x: 2x + 5 = 15",
            type: "numerical",
            answer: 5,
            explanation: "Subtract 5 from both sides: 2x = 10, then divide by 2: x = 5"
        },
        {
            question: "Which of these is a quadratic equation?",
            type: "multiple-choice",
            options: [
                "y = 3x + 2",
                "y = x² + 3x + 2",
                "y = 4/x",
                "y = 2ˣ"
            ],
            correctIndex: 1,
            explanation: "A quadratic equation contains x²"
        },
        {
            question: "Factorize: x² - 9",
            type: "multiple-choice",
            options: [
                "(x-3)(x+3)",
                "(x-9)(x+1)",
                "(x-4.5)(x-4.5)",
                "This expression cannot be factorized"
            ],
            correctIndex: 0,
            explanation: "x² - 9 = x² - 3² = (x-3)(x+3)"
        },
        {
            question: "If 3x - 7 = 20, what is the value of x?",
            type: "numerical",
            answer: 9,
            explanation: "3x - 7 = 20, so 3x = 27, and x = 9"
        },
        {
            question: "Solve the inequality: 2x - 3 > 7",
            type: "numerical",
            answer: 5,
            explanation: "2x - 3 > 7, so 2x > 10, and x > 5. The smallest integer value is 5."
        }
    ],
    geometry: [
        {
            question: "What is the area of a circle with radius 5 units? (Use π = 3.14)",
            type: "numerical",
            answer: 78.5,
            explanation: "Area = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 square units"
        },
        {
            question: "In a right triangle, if one angle is 30°, what is another angle?",
            type: "multiple-choice",
            options: [
                "30°",
                "45°",
                "60°",
                "90°"
            ],
            correctIndex: 3,
            explanation: "In a right triangle, one angle is 90°. The third angle is 60° (since angles sum to 180°)"
        },
        {
            question: "What is the perimeter of a rectangle with length 8 units and width 5 units?",
            type: "numerical",
            answer: 26,
            explanation: "Perimeter = 2(length + width) = 2(8 + 5) = 2(13) = 26 units"
        },
        {
            question: "Which of these shapes has exactly 4 sides of equal length?",
            type: "multiple-choice",
            options: [
                "Rectangle",
                "Rhombus",
                "Trapezoid",
                "Pentagon"
            ],
            correctIndex: 1,
            explanation: "A rhombus has 4 sides of equal length"
        },
        {
            question: "What is the volume of a cube with side length 4 units?",
            type: "numerical",
            answer: 64,
            explanation: "Volume = side³ = 4³ = 64 cubic units"
        }
    ],
    calculus: [
        {
            question: "What is the derivative of f(x) = 3x² + 2x?",
            type: "multiple-choice",
            options: [
                "f'(x) = 3x + 2",
                "f'(x) = 6x + 2",
                "f'(x) = 6x² + 2",
                "f'(x) = 6x²"
            ],
            correctIndex: 1,
            explanation: "The derivative of x² is 2x, so f'(x) = 6x + 2"
        },
        {
            question: "What is the integral of f(x) = 2x?",
            type: "multiple-choice",
            options: [
                "F(x) = x² + C",
                "F(x) = 2x² + C",
                "F(x) = x² + 2 + C",
                "F(x) = 2x³/3 + C"
            ],
            correctIndex: 0,
            explanation: "The integral of 2x is x² + C, where C is a constant"
        },
        {
            question: "If f'(x) = 3x² and f(0) = 5, what is f(2)?",
            type: "numerical",
            answer: 13,
            explanation: "f(x) = x³ + 5, so f(2) = 2³ + 5 = 8 + 5 = 13"
        },
        {
            question: "What is the limit of (x² - 1)/(x - 1) as x approaches 1?",
            type: "numerical",
            answer: 2,
            explanation: "Using L'Hôpital's rule or factoring: lim (x+1)(x-1)/(x-1) = lim(x+1) = 2"
        },
        {
            question: "What is the second derivative of f(x) = x³ - 2x² + 3x?",
            type: "multiple-choice",
            options: [
                "f''(x) = 6x - 4",
                "f''(x) = 6x - 2",
                "f''(x) = 6x - 4x + 3",
                "f''(x) = 6"
            ],
            correctIndex: 0,
            explanation: "f'(x) = 3x² - 4x + 3, and f''(x) = 6x - 4"
        }
    ],
    statistics: [
        {
            question: "What is the mean of the numbers 3, 7, 8, 10, 12?",
            type: "numerical",
            answer: 8,
            explanation: "Mean = (3+7+8+10+12)/5 = 40/5 = 8"
        },
        {
            question: "What is the median of the numbers 5, 8, 2, 9, 11?",
            type: "numerical",
            answer: 8,
            explanation: "Sorted: 2, 5, 8, 9, 11. The middle value is 8."
        },
        {
            question: "What is the probability of rolling a 6 on a standard die?",
            type: "multiple-choice",
            options: [
                "1/12",
                "1/6",
                "1/3",
                "1/2"
            ],
            correctIndex: 1,
            explanation: "There is 1 favorable outcome out of 6 possible outcomes, so probability = 1/6"
        },
        {
            question: "If the standard deviation of a dataset is 0, what does this indicate?",
            type: "multiple-choice",
            options: [
                "The dataset contains only negative numbers",
                "The dataset contains only positive numbers",
                "All values in the dataset are the same",
                "The dataset contains an equal number of positive and negative values"
            ],
            correctIndex: 2,
            explanation: "If standard deviation is 0, all values in the dataset are identical"
        },
        {
            question: "In a normal distribution, what percentage of data falls within one standard deviation of the mean?",
            type: "multiple-choice",
            options: [
                "50%",
                "68%",
                "95%",
                "99.7%"
            ],
            correctIndex: 1,
            explanation: "In a normal distribution, approximately 68% of data falls within one standard deviation"
        }
    ]
};

let currentTopic = 'algebra';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; 

const topicSelector = document.getElementById('topic');
const progressBar = document.querySelector('.progress');
const scoreDisplay = document.getElementById('score');
const totalDisplay = document.getElementById('total');
const card = document.getElementById('current-card');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('question-options');
const numericalInput = document.getElementById('numerical-input');
const numericalAnswer = document.getElementById('numerical-answer');
const submitNumerical = document.getElementById('submit-numerical');
const resultIcon = document.getElementById('result-icon');
const resultText = document.getElementById('result-text');
const correctAnswer = document.getElementById('correct-answer');
const nextButton = document.getElementById('next-question');
const quizComplete = document.getElementById('quiz-complete');
const finalScore = document.getElementById('final-score');
const finalTotal = document.getElementById('final-total');
const scoreMessage = document.getElementById('score-message');
const retryButton = document.getElementById('retry-quiz');
const changeTopicButton = document.getElementById('change-topic');

function initQuiz() {
    userAnswers = [];
    
    currentQuestions = [...quizData[currentTopic]];
    
    shuffleArray(currentQuestions);

    currentQuestionIndex = 0;
    score = 0;
    
    updateScoreDisplay();
    
    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    card.classList.remove('flip');
    
    if (currentQuestionIndex > 0) {
        card.classList.add('slide-out-deck');
        
        setTimeout(() => {
            updateQuestionContent(question);
            
            card.classList.remove('slide-out-deck');
            card.classList.add('slide-in-deck');
            card.classList.add('show');
            
            setTimeout(() => {
                card.classList.remove('slide-in-deck');
            }, 600);
        }, 600);
    } else {
        updateQuestionContent(question);
        card.classList.add('show', 'deck-entrance');
        
        setTimeout(() => {
            card.classList.remove('deck-entrance');
        }, 600);
    }
}

function updateQuestionContent(question) {
    questionText.textContent = question.question;
    
    if (question.type === 'multiple-choice') {
        optionsContainer.innerHTML = '';
        optionsContainer.style.display = 'flex';
        numericalInput.style.display = 'none';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option');
            button.textContent = option;
            button.addEventListener('click', () => checkMultipleChoiceAnswer(index));
            optionsContainer.appendChild(button);
        });
    } else {
        optionsContainer.style.display = 'none';
        numericalInput.style.display = 'flex';
        numericalAnswer.value = '';
        numericalAnswer.focus();
    }
}

function checkMultipleChoiceAnswer(selectedIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correctIndex;
    
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        question: question.question,
        userAnswer: question.options[selectedIndex],
        correctAnswer: question.options[question.correctIndex],
        isCorrect: isCorrect,
        type: 'multiple-choice',
        explanation: question.explanation
    });
    
    const options = optionsContainer.querySelectorAll('.option');
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
        score++;
        updateScoreDisplay();
    }
    
    options.forEach((option, index) => {
        if (index === question.correctIndex) {
            option.classList.add('correct');
        }
        option.disabled = true;
    });
    
    setTimeout(() => showResult(isCorrect, question.explanation), 1000);
}

submitNumerical.addEventListener('click', () => {
    const question = currentQuestions[currentQuestionIndex];
    const userAnswer = parseFloat(numericalAnswer.value);
    
    if (isNaN(userAnswer)) {
        alert("Please enter a valid number");
        return;
    }
    
    const isCorrect = Math.abs(userAnswer - question.answer) < 0.01; 
    
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        question: question.question,
        userAnswer: userAnswer,
        correctAnswer: question.answer,
        isCorrect: isCorrect,
        type: 'numerical',
        explanation: question.explanation
    });
    
    if (isCorrect) {
        score++;
        updateScoreDisplay();
    }
    
    showResult(isCorrect, question.explanation);
});

numericalAnswer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        submitNumerical.click();
    }
});

function showResult(isCorrect, explanation) {
    resultIcon.textContent = isCorrect ? '✓' : '✗';
    resultIcon.style.color = isCorrect ? '#4caf50' : '#f44336';
    resultText.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
    
    const question = currentQuestions[currentQuestionIndex];
    if (!isCorrect) {
        if (question.type === 'multiple-choice') {
            correctAnswer.textContent = `The correct answer is: ${question.options[question.correctIndex]}`;
        } else {
            correctAnswer.textContent = `The correct answer is: ${question.answer}`;
        }
    } else {
        correctAnswer.textContent = '';
    }
    
    if (explanation) {
        correctAnswer.textContent += explanation ? `\n${explanation}` : '';
    }
    
    card.classList.add('flip');
    
    setTimeout(() => {
        nextButton.click();
    }, 2000);
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showQuizCompleteScreen();
    }
});

function showQuizCompleteScreen() {
    finalScore.textContent = score;
    finalTotal.textContent = currentQuestions.length;
    
    const percentage = (score / currentQuestions.length) * 100;
    if (percentage >= 90) {
        scoreMessage.textContent = "Outstanding work! You're a math genius!";
    } else if (percentage >= 70) {
        scoreMessage.textContent = "Great job! You have a solid understanding!";
    } else if (percentage >= 50) {
        scoreMessage.textContent = "Good effort! Keep practicing!";
    } else {
        scoreMessage.textContent = "Keep studying! You'll get better with practice.";
    }
    
    saveQuizStatistics(score, currentQuestions.length, currentTopic);
    
    generateQuizReport();
    
    quizComplete.classList.add('show');
}

function saveQuizStatistics(score, total, topic) {
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) return; 
    
    const userStats = JSON.parse(localStorage.getItem('userStats_' + currentUser) || '{}');
    
    userStats.quizAttempts = (userStats.quizAttempts || 0) + 1;
    
    const oldScores = userStats.totalScore || 0;
    const oldAttempts = userStats.quizAttempts - 1;
    const newTotalScore = oldScores + (score / total * 100);
    userStats.totalScore = newTotalScore;
    userStats.avgScore = Math.round(newTotalScore / userStats.quizAttempts);
    
    if (!userStats.subjectCounts) {
        userStats.subjectCounts = {};
    }
    userStats.subjectCounts[topic] = (userStats.subjectCounts[topic] || 0) + 1;
    
    let maxCount = 0;
    let favoriteSubject = '';
    for (const subject in userStats.subjectCounts) {
        if (userStats.subjectCounts[subject] > maxCount) {
            maxCount = userStats.subjectCounts[subject];
            favoriteSubject = subject;
        }
    }
    
    const subjectMap = {
        'algebra': 'Mathematics',
        'geometry': 'Mathematics',
        'calculus': 'Mathematics',
        'statistics': 'Mathematics'
    };
    
    userStats.favoriteSubject = subjectMap[favoriteSubject] || 'Mathematics';
    
    localStorage.setItem('userStats_' + currentUser, JSON.stringify(userStats));
    console.log('Quiz statistics saved for user:', currentUser);
}

function generateQuizReport() {
    const reportContainer = document.getElementById('quiz-report');
    if (!reportContainer) return;
    
    reportContainer.innerHTML = '';
    
    const reportHTML = `
        <div class="report-title">Quiz Results</div>
        
        <div class="report-summary">
            <div class="summary-item">
                <div class="summary-count">${score}</div>
                <div class="summary-label">Correct</div>
            </div>
            
            <div class="summary-item">
                <div class="summary-count">${userAnswers.length - score}</div>
                <div class="summary-label">Incorrect</div>
            </div>
            
            <div class="summary-item">
                <div class="summary-count">${Math.round((score / userAnswers.length) * 100)}%</div>
                <div class="summary-label">Accuracy</div>
            </div>
        </div>
        
        <div class="review-buttons">
            <button id="review-answers" class="review-btn">Review Answers</button>
            <button id="retry-topic" class="review-btn">Try Again</button>
        </div>
        
        <div id="answers-review" style="display: none;">
            <h3 style="margin: 1.5rem 0 1rem; font-family: 'Habibi', serif;">Question Review</h3>
            <ul class="question-list" id="question-list"></ul>
        </div>
    `;
    
    reportContainer.innerHTML = reportHTML;
    
    document.getElementById('review-answers').addEventListener('click', showAnswersReview);
    document.getElementById('retry-topic').addEventListener('click', () => {
        quizComplete.classList.remove('show');
        initQuiz();
    });
}

function showAnswersReview() {
    const answersReview = document.getElementById('answers-review');
    const questionList = document.getElementById('question-list');
    const reviewButton = document.getElementById('review-answers');
    
    if (answersReview.style.display === 'none') {
        answersReview.style.display = 'block';
        reviewButton.textContent = 'Hide Answers';
        
        questionList.innerHTML = '';
        userAnswers.forEach((answer, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('question-item', answer.isCorrect ? 'correct' : 'incorrect');
            
            const headerHTML = `
                <div class="question-header">
                    <span class="question-number">Question ${index + 1}</span>
                    <span class="question-status ${answer.isCorrect ? 'status-correct' : 'status-incorrect'}">
                        ${answer.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                </div>
            `;
            
            let answerHTML = '';
            if (answer.type === 'multiple-choice') {
                answerHTML = `
                    <div class="question-text">${answer.question}</div>
                    <div class="question-detail">Your answer: ${answer.userAnswer}</div>
                    ${!answer.isCorrect ? `<div class="question-detail">Correct answer: ${answer.correctAnswer}</div>` : ''}
                    <div class="question-detail"><strong>Explanation:</strong> ${answer.explanation}</div>
                `;
            } else {
                answerHTML = `
                    <div class="question-text">${answer.question}</div>
                    <div class="question-detail">Your answer: ${answer.userAnswer}</div>
                    ${!answer.isCorrect ? `<div class="question-detail">Correct answer: ${answer.correctAnswer}</div>` : ''}
                    <div class="question-detail"><strong>Explanation:</strong> ${answer.explanation}</div>
                `;
            }
            
            listItem.innerHTML = headerHTML + answerHTML;
            questionList.appendChild(listItem);
        });
    } else {
        answersReview.style.display = 'none';
        reviewButton.textContent = 'Review Answers';
    }
}

changeTopicButton.addEventListener('click', () => {
    quizComplete.classList.remove('show');
    topicSelector.focus();
});

function changeTopic() {
    currentTopic = topicSelector.value;
    initQuiz();
}

function updateScoreDisplay() {
    scoreDisplay.textContent = score;
    totalDisplay.textContent = currentQuestions.length;
}

document.addEventListener('DOMContentLoaded', () => {
    topicSelector.value = currentTopic;
    initQuiz();
});
