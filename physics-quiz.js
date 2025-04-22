const quizData = {
    mechanics: [
        {
            question: "What is the acceleration due to gravity at Earth's surface? (in m/s²)",
            type: "numerical",
            answer: 9.8,
            explanation: "The acceleration due to gravity at Earth's surface is approximately 9.8 m/s²."
        },
        {
            question: "Which of Newton's laws states that for every action, there is an equal and opposite reaction?",
            type: "multiple-choice",
            options: [
                "First law",
                "Second law",
                "Third law",
                "Law of conservation of momentum"
            ],
            correctIndex: 2,
            explanation: "Newton's Third Law states that for every action, there is an equal and opposite reaction."
        },
        {
            question: "A 2kg object experiences a force of 10N. What is its acceleration? (in m/s²)",
            type: "numerical",
            answer: 5,
            explanation: "Using F = ma, a = F/m = 10N / 2kg = 5 m/s²"
        },
        {
            question: "What is the SI unit of work?",
            type: "multiple-choice",
            options: [
                "Newton",
                "Joule",
                "Watt",
                "Pascal"
            ],
            correctIndex: 1,
            explanation: "The SI unit of work is the Joule, which equals one newton-meter."
        },
        {
            question: "If a car accelerates from 0 to 25 m/s in 5 seconds, what is its average acceleration? (in m/s²)",
            type: "numerical",
            answer: 5,
            explanation: "Average acceleration = change in velocity / time = 25 m/s / 5 s = 5 m/s²"
        }
    ],
    electricity: [
        {
            question: "What is Ohm's Law?",
            type: "multiple-choice",
            options: [
                "V = IR",
                "P = IV",
                "I = PV",
                "R = P/I²"
            ],
            correctIndex: 0,
            explanation: "Ohm's Law states that voltage equals current multiplied by resistance (V = IR)."
        },
        {
            question: "What is the resistance of a circuit with a current of 2A and a voltage of 12V? (in ohms)",
            type: "numerical",
            answer: 6,
            explanation: "Using Ohm's Law (V = IR), R = V/I = 12V / 2A = 6 ohms"
        },
        {
            question: "Which particle carries a negative charge?",
            type: "multiple-choice",
            options: [
                "Proton",
                "Neutron",
                "Electron",
                "Positron"
            ],
            correctIndex: 2,
            explanation: "Electrons carry a negative charge (-1.602 × 10^-19 coulombs)."
        },
        {
            question: "What is the power in a circuit with a voltage of 120V and a current of 5A? (in watts)",
            type: "numerical",
            answer: 600,
            explanation: "Power = Voltage × Current = 120V × 5A = 600 watts"
        },
        {
            question: "Which of these materials is the best electrical conductor?",
            type: "multiple-choice",
            options: [
                "Wood",
                "Rubber",
                "Silver",
                "Glass"
            ],
            correctIndex: 2,
            explanation: "Silver has the highest electrical conductivity of all metals."
        }
    ],
    optics: [
        {
            question: "What is the speed of light in a vacuum? (in m/s)",
            type: "numerical",
            answer: 299792458,
            explanation: "The speed of light in a vacuum is approximately 3 × 10^8 m/s or precisely 299,792,458 m/s."
        },
        {
            question: "Which phenomenon explains how light bends when passing from one medium to another?",
            type: "multiple-choice",
            options: [
                "Diffraction",
                "Refraction",
                "Reflection",
                "Dispersion"
            ],
            correctIndex: 1,
            explanation: "Refraction is the bending of light when it passes from one medium to another."
        },
        {
            question: "Which color of visible light has the longest wavelength?",
            type: "multiple-choice",
            options: [
                "Violet",
                "Green",
                "Yellow",
                "Red"
            ],
            correctIndex: 3,
            explanation: "Red light has the longest wavelength in the visible spectrum."
        },
        {
            question: "If an object is placed 10 cm from a converging lens with a focal length of 5 cm, how far from the lens is the image formed? (in cm)",
            type: "numerical",
            answer: 10,
            explanation: "Using the lens equation (1/f = 1/do + 1/di), where f = 5 cm, do = 10 cm: 1/5 = 1/10 + 1/di, which gives di = 10 cm."
        },
        {
            question: "Which of these is NOT a type of lens?",
            type: "multiple-choice",
            options: [
                "Convex",
                "Concave",
                "Rectangular",
                "Plano-convex"
            ],
            correctIndex: 2,
            explanation: "Rectangular is not a type of lens. Lenses are typically described by their curvature, not their shape."
        }
    ],
    modern: [
        {
            question: "What is the rest mass energy of an electron? (in MeV)",
            type: "numerical",
            answer: 0.511,
            explanation: "The rest mass energy of an electron is approximately 0.511 MeV."
        },
        {
            question: "Which equation represents Einstein's mass-energy equivalence?",
            type: "multiple-choice",
            options: [
                "E = mc",
                "E = mc²",
                "E = m/c²",
                "E = m²c"
            ],
            correctIndex: 1,
            explanation: "Einstein's mass-energy equivalence is represented by E = mc², where c is the speed of light."
        },
        {
            question: "What is the de Broglie wavelength of a 1 kg object moving at 1 m/s? (in meters, use h=6.63×10^-34 J·s)",
            type: "multiple-choice",
            options: [
                "6.63 × 10^-34 m",
                "6.63 × 10^-35 m",
                "6.63 × 10^-36 m",
                "6.63 × 10^-33 m"
            ],
            correctIndex: 0,
            explanation: "Using λ = h/mv = (6.63×10^-34)/(1×1) = 6.63×10^-34 m"
        },
        {
            question: "Which particle was predicted by Paul Dirac and is the antiparticle of the electron?",
            type: "multiple-choice",
            options: [
                "Proton",
                "Positron",
                "Neutron",
                "Neutrino"
            ],
            correctIndex: 1,
            explanation: "The positron is the antiparticle of the electron, with identical mass but opposite charge."
        },
        {
            question: "What is the energy of a photon with a wavelength of 500 nm? (in eV, use h=4.14×10^-15 eV·s, c=3×10^8 m/s)",
            type: "numerical",
            answer: 2.48,
            explanation: "E = hc/λ = (4.14×10^-15 × 3×10^8)/(500×10^-9) = 2.48 eV"
        }
    ],
    thermodynamics: [
        {
            question: "What is absolute zero temperature in degrees Celsius?",
            type: "numerical",
            answer: -273.15,
            explanation: "Absolute zero is -273.15°C (or 0 Kelvin)."
        },
        {
            question: "Which law of thermodynamics states that energy cannot be created or destroyed?",
            type: "multiple-choice",
            options: [
                "Zeroth law",
                "First law",
                "Second law",
                "Third law"
            ],
            correctIndex: 1,
            explanation: "The First Law of Thermodynamics states that energy cannot be created or destroyed, only transformed."
        },
        {
            question: "If a gas performs 500 J of work and loses 200 J of heat, what is the change in its internal energy? (in J)",
            type: "numerical",
            answer: -700,
            explanation: "Using ΔU = Q - W, where Q = -200 J and W = 500 J: ΔU = -200 - 500 = -700 J"
        },
        {
            question: "Which equation represents the ideal gas law?",
            type: "multiple-choice",
            options: [
                "PV = nR",
                "PV = nRT",
                "P = nRT",
                "PV = RT"
            ],
            correctIndex: 1,
            explanation: "The ideal gas law is PV = nRT, where P is pressure, V is volume, n is the number of moles, R is the gas constant, and T is temperature."
        },
        {
            question: "What is the specific heat capacity of water? (in J/g·°C)",
            type: "numerical",
            answer: 4.18,
            explanation: "The specific heat capacity of water is approximately 4.18 J/g·°C."
        }
    ]
};

let currentTopic = 'mechanics';
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

function changePhysicsTopic() {
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
        scoreMessage.textContent = "Outstanding work! You're a physics genius!";
    } else if (percentage >= 70) {
        scoreMessage.textContent = "Great job! You have a solid understanding of physics!";
    } else if (percentage >= 50) {
        scoreMessage.textContent = "Good effort! Keep practicing your physics knowledge!";
    } else {
        scoreMessage.textContent = "Keep studying! You'll improve your physics understanding with practice.";
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

// Show answers review
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
