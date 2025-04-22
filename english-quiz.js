// English Quiz data organized by topics
const quizData = {
    grammar: [
        {
            question: "Which sentence is grammatically correct?",
            type: "multiple-choice",
            options: [
                "Neither of the students have completed their assignments.",
                "Neither of the students has completed their assignment.",
                "Neither of the students has completed his assignment.",
                "Neither of the students have completed his assignment."
            ],
            correctIndex: 2,
            explanation: "When using 'neither of', the verb should be singular. The traditional grammar rule also uses singular possessive pronoun 'his' rather than 'their'."
        },
        {
            question: "Which word is a conjunction?",
            type: "multiple-choice",
            options: [
                "Quickly",
                "Although",
                "Beautiful",
                "Climb"
            ],
            correctIndex: 1,
            explanation: "'Although' is a conjunction that connects clauses or sentences."
        },
        {
            question: "What is the past participle of the verb 'to begin'?",
            type: "multiple-choice",
            options: [
                "Began",
                "Begin",
                "Begun",
                "Beginning"
            ],
            correctIndex: 2,
            explanation: "The past participle of 'begin' is 'begun', as in 'I have begun my homework.'"
        },
        {
            question: "Which sentence uses the correct form of the possessive?",
            type: "multiple-choice",
            options: [
                "The childrens' toys were scattered everywhere.",
                "The children's toys were scattered everywhere.",
                "The childrens toys were scattered everywhere.",
                "The children toys were scattered everywhere."
            ],
            correctIndex: 1,
            explanation: "Children is already plural, so the possessive form is 'children's'."
        },
        {
            question: "Which of these is an example of a preposition?",
            type: "multiple-choice",
            options: [
                "Run",
                "Happily",
                "Under",
                "Beautiful"
            ],
            correctIndex: 2,
            explanation: "'Under' is a preposition that indicates position or relationship to something else."
        }
    ],
    vocabulary: [
        {
            question: "What is the meaning of 'ubiquitous'?",
            type: "multiple-choice",
            options: [
                "Rare or uncommon",
                "Present everywhere",
                "Transparent or clear",
                "Difficult to understand"
            ],
            correctIndex: 1,
            explanation: "'Ubiquitous' means appearing to be everywhere at once; omnipresent."
        },
        {
            question: "Which word means 'a strong desire to travel'?",
            type: "multiple-choice",
            options: [
                "Wanderlust",
                "Acrophobia",
                "Insomnia",
                "Claustrophobia"
            ],
            correctIndex: 0,
            explanation: "'Wanderlust' is a strong desire to travel or explore the world."
        },
        {
            question: "What is an antonym for 'benevolent'?",
            type: "multiple-choice",
            options: [
                "Charitable",
                "Kind",
                "Malevolent",
                "Generous"
            ],
            correctIndex: 2,
            explanation: "'Malevolent' (meaning evil or harmful) is an antonym for 'benevolent' (meaning kind or charitable)."
        },
        {
            question: "Choose the word that means 'to make amends or reparation'.",
            type: "multiple-choice",
            options: [
                "Atone",
                "Attack",
                "Attain",
                "Attract"
            ],
            correctIndex: 0,
            explanation: "'Atone' means to make amends or reparation, as for an offense or sin."
        },
        {
            question: "What does the word 'ephemeral' mean?",
            type: "multiple-choice",
            options: [
                "Lasting forever",
                "Short-lived",
                "Beautiful",
                "Dangerous"
            ],
            correctIndex: 1,
            explanation: "'Ephemeral' means lasting for a very short time; short-lived or transitory."
        }
    ],
    comprehension: [
        {
            question: "Read the passage: 'The Arctic fox has a deep thick fur which helps it to maintain a consistent body temperature. The fox has a rounded body shape with short legs, ears, and muzzle which all help to conserve heat.' What is the main purpose of the passage?",
            type: "multiple-choice",
            options: [
                "To entertain readers with a story about foxes",
                "To persuade readers to protect Arctic foxes",
                "To explain how Arctic foxes adapt to their environment",
                "To compare Arctic foxes with other fox species"
            ],
            correctIndex: 2,
            explanation: "The passage explains physical adaptations that help the Arctic fox survive in cold environments."
        },
        {
            question: "Read the passage: 'Renewable energy comes from sources that can be replenished naturally, like sunlight, wind, and water. Non-renewable energy comes from sources that cannot be readily replenished, such as coal, oil, and natural gas.' Which statement best summarizes this passage?",
            type: "multiple-choice",
            options: [
                "Renewable energy is better than non-renewable energy.",
                "The difference between renewable and non-renewable energy is whether the source can be naturally replenished.",
                "We should stop using non-renewable energy sources.",
                "Sunlight, wind, and water are the only renewable energy sources."
            ],
            correctIndex: 1,
            explanation: "The passage objectively defines and contrasts renewable and non-renewable energy based on whether the sources can be naturally replenished."
        },
        {
            question: "Read the passage: 'Despite its small size, the hummingbird has a remarkable metabolism. It can flap its wings up to 80 times per second, and its heart can beat more than 1,200 times per minute.' According to the passage, what makes the hummingbird remarkable?",
            type: "multiple-choice",
            options: [
                "Its colorful feathers",
                "Its ability to migrate long distances",
                "Its small size in contrast to other birds",
                "Its rapid wing movement and fast heartbeat"
            ],
            correctIndex: 3,
            explanation: "The passage specifically mentions the hummingbird's rapid wing flapping and fast heart rate as remarkable aspects of its metabolism."
        },
        {
            question: "Read the passage: 'Marie Curie was a physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person to win a Nobel Prize twice, and the only person to win Nobel Prizes in two different scientific fields.' Based on this passage, what fields did Marie Curie win Nobel Prizes in?",
            type: "multiple-choice",
            options: [
                "Physics and Literature",
                "Chemistry and Peace",
                "Physics and Chemistry",
                "Medicine and Chemistry"
            ],
            correctIndex: 2,
            explanation: "While the passage doesn't explicitly state the fields, Marie Curie won Nobel Prizes in Physics (1903) and Chemistry (1911)."
        },
        {
            question: "Read the passage: 'The octopus is considered one of the most intelligent invertebrates. It has demonstrated problem-solving abilities, tool use, and even what appears to be play behavior. Octopuses can open jars, escape from tanks, and recognize individual humans.' What is the main idea of this passage?",
            type: "multiple-choice",
            options: [
                "Octopuses can be dangerous to humans",
                "Octopuses demonstrate remarkable intelligence for invertebrates",
                "Octopuses are the most intelligent animals in the ocean",
                "Octopuses should not be kept in captivity"
            ],
            correctIndex: 1,
            explanation: "The passage focuses on providing evidence of octopus intelligence, particularly remarkable for an invertebrate."
        }
    ],
    writing: [
        {
            question: "Which sentence demonstrates parallel structure?",
            type: "multiple-choice",
            options: [
                "She likes swimming, hiking, and to ride bikes.",
                "She likes swimming, hiking, and riding bikes.",
                "She likes swimming, to hike, and bike riding.",
                "She likes to swim, hiking, and bike rides."
            ],
            correctIndex: 1,
            explanation: "Parallel structure requires using the same grammatical form for similar elements. 'Swimming, hiking, and riding bikes' all use the gerund form (-ing)."
        },
        {
            question: "Which is an example of a thesis statement?",
            type: "multiple-choice",
            options: [
                "This essay will discuss the effects of climate change.",
                "Climate change is an important issue that many people care about.",
                "Due to increased greenhouse gas emissions, climate change poses significant threats to global ecosystems and human society.",
                "Climate change is a topic I'm very interested in learning more about."
            ],
            correctIndex: 2,
            explanation: "A strong thesis statement makes a specific claim and indicates the main points to be developed in an essay."
        },
        {
            question: "Which transition word would best connect two contrasting ideas?",
            type: "multiple-choice",
            options: [
                "Furthermore",
                "Similarly",
                "However",
                "Therefore"
            ],
            correctIndex: 2,
            explanation: "'However' signals a contrast or contradiction between ideas."
        },
        {
            question: "Which sentence contains a dangling modifier?",
            type: "multiple-choice",
            options: [
                "Walking to school, I saw my friend.",
                "Walking to school, a dog chased me.",
                "I saw my friend walking to school.",
                "The dog chased me while I was walking to school."
            ],
            correctIndex: 1,
            explanation: "In 'Walking to school, a dog chased me,' the modifier 'walking to school' illogically describes the dog rather than the intended subject 'I'."
        },
        {
            question: "Which sentence uses active voice?",
            type: "multiple-choice",
            options: [
                "The ball was thrown by John.",
                "The cake was eaten by the children.",
                "The book was written last year.",
                "John threw the ball."
            ],
            correctIndex: 3,
            explanation: "In active voice, the subject performs the action. 'John threw the ball' has the subject 'John' performing the action 'threw'."
        }
    ],
    literature: [
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            type: "multiple-choice",
            options: [
                "Charles Dickens",
                "William Shakespeare",
                "Jane Austen",
                "F. Scott Fitzgerald"
            ],
            correctIndex: 1,
            explanation: "'Romeo and Juliet' was written by William Shakespeare around 1594-1596."
        },
        {
            question: "Which literary device involves giving human qualities to non-human things?",
            type: "multiple-choice",
            options: [
                "Metaphor",
                "Simile",
                "Personification",
                "Alliteration"
            ],
            correctIndex: 2,
            explanation: "Personification is the attribution of human characteristics to something non-human."
        },
        {
            question: "In which century did Jane Austen live and write?",
            type: "multiple-choice",
            options: [
                "17th century",
                "18th-19th centuries",
                "19th-20th centuries",
                "20th century"
            ],
            correctIndex: 1,
            explanation: "Jane Austen lived from 1775 to 1817, spanning the late 18th and early 19th centuries."
        },
        {
            question: "What is the term for a story's main problem or struggle?",
            type: "multiple-choice",
            options: [
                "Theme",
                "Setting",
                "Conflict",
                "Resolution"
            ],
            correctIndex: 2,
            explanation: "Conflict is the main problem or struggle in a story, often driving the plot."
        },
        {
            question: "Which of these works is a dystopian novel?",
            type: "multiple-choice",
            options: [
                "Pride and Prejudice",
                "1984",
                "The Great Gatsby",
                "Moby Dick"
            ],
            correctIndex: 1,
            explanation: "George Orwell's '1984' is a classic dystopian novel depicting a totalitarian future society."
        }
    ]
};

// State management
let currentTopic = 'grammar';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Track user answers for report

// DOM elements
const topicSelector = document.getElementById('topic');
const progressBar = document.querySelector('.progress');
const scoreDisplay = document.getElementById('score');
const totalDisplay = document.getElementById('total');
const card = document.getElementById('current-card');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('question-options');
const textInput = document.getElementById('text-input');
const textAnswer = document.getElementById('text-answer');
const submitText = document.getElementById('submit-text');
const resultIcon = document.getElementById('result-icon');
const resultText = document.getElementById('result-text');
const correctAnswer = document.getElementById('correct-answer');
const nextButton = document.getElementById('next-question');
const quizComplete = document.getElementById('quiz-complete');
const finalScore = document.getElementById('final-score');
const finalTotal = document.getElementById('final-total');
const scoreMessage = document.getElementById('score-message');

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

function changeEnglishTopic() {
    currentTopic = document.getElementById('topic').value;
    initQuiz();
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
        textInput.style.display = 'none';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option');
            button.textContent = option;
            button.addEventListener('click', () => checkMultipleChoiceAnswer(index));
            optionsContainer.appendChild(button);
        });
    } else {
        optionsContainer.style.display = 'none';
        textInput.style.display = 'flex';
        textAnswer.value = '';
        textAnswer.focus();
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

submitText.addEventListener('click', () => {
    const question = currentQuestions[currentQuestionIndex];
    const userAnswer = textAnswer.value.trim();
    
    if (!userAnswer) {
        alert("Please enter your answer");
        return;
    }
    
    const isCorrect = userAnswer.toLowerCase() === question.correctAnswer?.toLowerCase();
    
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        question: question.question,
        userAnswer: userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect,
        type: 'text',
        explanation: question.explanation
    });
    
    if (isCorrect) {
        score++;
        updateScoreDisplay();
    }
    
    showResult(isCorrect, question.explanation);
});

textAnswer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        submitText.click();
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
        } else if (question.correctAnswer) {
            correctAnswer.textContent = `The correct answer is: ${question.correctAnswer}`;
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
        scoreMessage.textContent = "Outstanding work! You're an English language expert!";
    } else if (percentage >= 70) {
        scoreMessage.textContent = "Great job! You have a solid understanding of English!";
    } else if (percentage >= 50) {
        scoreMessage.textContent = "Good effort! Keep practicing your English skills!";
    } else {
        scoreMessage.textContent = "Keep studying! You'll improve your English understanding with practice.";
    }
    
    generateQuizReport();
    quizComplete.classList.add('show');
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

function updateScoreDisplay() {
    scoreDisplay.textContent = score;
    totalDisplay.textContent = currentQuestions.length;
}

document.addEventListener('DOMContentLoaded', () => {
    topicSelector.value = currentTopic;
    initQuiz();
});
