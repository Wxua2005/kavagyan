// Biology Quiz Data organized by topics
const quizData = {
    cellbiology: [
        {
            question: "Which organelle is known as the powerhouse of the cell?",
            type: "multiple-choice",
            options: [
                "Nucleus",
                "Mitochondria",
                "Golgi apparatus",
                "Endoplasmic reticulum"
            ],
            correctIndex: 1,
            explanation: "Mitochondria are called the powerhouse of the cell because they produce most of the cell's supply of ATP."
        },
        {
            question: "Which of these is NOT a component of the cell membrane?",
            type: "multiple-choice",
            options: [
                "Phospholipids",
                "Cholesterol",
                "Proteins",
                "DNA"
            ],
            correctIndex: 3,
            explanation: "DNA is found primarily in the nucleus, not in the cell membrane."
        },
        {
            question: "What is the primary function of lysosomes?",
            type: "multiple-choice",
            options: [
                "Protein synthesis",
                "Cellular digestion",
                "Energy production",
                "Cell division"
            ],
            correctIndex: 1,
            explanation: "Lysosomes contain digestive enzymes that break down waste materials and cellular debris."
        },
        {
            question: "How many chromosomes are in a normal human somatic cell?",
            type: "numerical",
            answer: 46,
            explanation: "Human somatic cells contain 46 chromosomes (23 pairs)."
        },
        {
            question: "Which cell organelle is responsible for protein synthesis?",
            type: "multiple-choice",
            options: [
                "Ribosomes",
                "Golgi apparatus",
                "Lysosomes",
                "Peroxisomes"
            ],
            correctIndex: 0,
            explanation: "Ribosomes are the cell structures where proteins are synthesized."
        }
    ],
    genetics: [
        {
            question: "What is the process by which DNA makes a copy of itself called?",
            type: "multiple-choice",
            options: [
                "Translation",
                "Transcription",
                "Replication",
                "Mutation"
            ],
            correctIndex: 2,
            explanation: "DNA replication is the process by which DNA makes a copy of itself during cell division."
        },
        {
            question: "In humans, which of these is a sex-linked trait?",
            type: "multiple-choice",
            options: [
                "Eye color",
                "Height",
                "Red-green color blindness",
                "Blood type"
            ],
            correctIndex: 2,
            explanation: "Red-green color blindness is typically carried on the X chromosome, making it sex-linked."
        },
        {
            question: "How many different types of nitrogenous bases are found in DNA?",
            type: "numerical",
            answer: 4,
            explanation: "DNA contains four types of nitrogenous bases: Adenine, Guanine, Cytosine, and Thymine."
        },
        {
            question: "Which of these is NOT a nucleotide base found in DNA?",
            type: "multiple-choice",
            options: [
                "Adenine",
                "Uracil",
                "Thymine",
                "Guanine"
            ],
            correctIndex: 1,
            explanation: "Uracil is found in RNA, not DNA. DNA contains Adenine, Guanine, Cytosine, and Thymine."
        },
        {
            question: "What is the term for different forms of a gene?",
            type: "multiple-choice",
            options: [
                "Phenotypes",
                "Genotypes",
                "Alleles",
                "Chromosomes"
            ],
            correctIndex: 2,
            explanation: "Alleles are variant forms of the same gene that are found at the same place on a chromosome."
        }
    ],
    human: [
        {
            question: "Which organ is responsible for filtering blood and removing waste products?",
            type: "multiple-choice",
            options: [
                "Liver",
                "Heart",
                "Kidney",
                "Lungs"
            ],
            correctIndex: 2,
            explanation: "The kidneys filter blood to remove waste and excess substances, which are then excreted as urine."
        },
        {
            question: "How many chambers does a human heart have?",
            type: "numerical",
            answer: 4,
            explanation: "The human heart has four chambers: two atria (upper chambers) and two ventricles (lower chambers)."
        },
        {
            question: "Which of the following is NOT a function of the liver?",
            type: "multiple-choice",
            options: [
                "Detoxification of blood",
                "Production of bile",
                "Storage of glycogen",
                "Production of insulin"
            ],
            correctIndex: 3,
            explanation: "Insulin is produced by the pancreas, not the liver."
        },
        {
            question: "What is the approximate pH of human blood?",
            type: "numerical",
            answer: 7.4,
            explanation: "Normal human blood pH is tightly regulated and is slightly alkaline at about 7.35-7.45, with 7.4 being the average."
        },
        {
            question: "Which system in the human body includes the thymus and spleen?",
            type: "multiple-choice",
            options: [
                "Digestive system",
                "Immune system",
                "Endocrine system",
                "Reproductive system"
            ],
            correctIndex: 1,
            explanation: "The thymus and spleen are organs of the immune system."
        }
    ],
    ecology: [
        {
            question: "What is the term for all the organisms of the same species in a specific area?",
            type: "multiple-choice",
            options: [
                "Community",
                "Ecosystem",
                "Population",
                "Biome"
            ],
            correctIndex: 2,
            explanation: "A population consists of all the organisms of a single species living in a particular area."
        },
        {
            question: "In a food chain, what organisms are primary consumers?",
            type: "multiple-choice",
            options: [
                "Herbivores",
                "Carnivores",
                "Decomposers",
                "Producers"
            ],
            correctIndex: 0,
            explanation: "Primary consumers are herbivores that eat producers (plants)."
        },
        {
            question: "What percentage of energy is typically transferred from one trophic level to the next?",
            type: "numerical",
            answer: 10,
            explanation: "According to the 10% rule, only about 10% of energy is transferred from one trophic level to the next."
        },
        {
            question: "Which of these is an example of a density-dependent limiting factor?",
            type: "multiple-choice",
            options: [
                "Temperature",
                "Floods",
                "Disease",
                "Drought"
            ],
            correctIndex: 2,
            explanation: "Disease is a density-dependent factor because its spread often increases with population density."
        },
        {
            question: "What is the term for the physical area where an organism lives?",
            type: "multiple-choice",
            options: [
                "Niche",
                "Habitat",
                "Ecosystem",
                "Biosphere"
            ],
            correctIndex: 1,
            explanation: "Habitat refers to the physical environment where an organism lives."
        }
    ],
    botany: [
        {
            question: "Which plant structure is responsible for water absorption?",
            type: "multiple-choice",
            options: [
                "Leaves",
                "Stems",
                "Roots",
                "Flowers"
            ],
            correctIndex: 2,
            explanation: "Roots are the primary structures for water absorption in plants."
        },
        {
            question: "What is the process by which plants make their own food called?",
            type: "multiple-choice",
            options: [
                "Respiration",
                "Photosynthesis",
                "Transpiration",
                "Fermentation"
            ],
            correctIndex: 1,
            explanation: "Photosynthesis is the process by which plants use sunlight to synthesize food from carbon dioxide and water."
        },
        {
            question: "How many cotyledons (seed leaves) do monocots have?",
            type: "numerical",
            answer: 1,
            explanation: "Monocotyledonous plants have one cotyledon or seed leaf."
        },
        {
            question: "Which of these is NOT a part of a flower's reproductive system?",
            type: "multiple-choice",
            options: [
                "Stamen",
                "Pistil",
                "Petiole",
                "Pollen"
            ],
            correctIndex: 2,
            explanation: "Petiole is the stalk that connects a leaf to the stem; it is not part of the flower's reproductive system."
        },
        {
            question: "What is the primary function of stomata in plants?",
            type: "multiple-choice",
            options: [
                "Nutrient absorption",
                "Gas exchange",
                "Water storage",
                "Food storage"
            ],
            correctIndex: 1,
            explanation: "Stomata are tiny pores on plant leaves that allow for gas exchange, particularly the intake of carbon dioxide and release of oxygen."
        }
    ]
};

let currentTopic = 'cellbiology';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; 

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

function changeBiologyTopic() {
    currentTopic = document.getElementById('topic').value;
    initQuiz();
}

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
        scoreMessage.textContent = "Outstanding work! You're a biology expert!";
    } else if (percentage >= 70) {
        scoreMessage.textContent = "Great job! You have a solid understanding of biology!";
    } else if (percentage >= 50) {
        scoreMessage.textContent = "Good effort! Keep practicing your biology knowledge!";
    } else {
        scoreMessage.textContent = "Keep studying! You'll improve your biology understanding with practice.";
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
