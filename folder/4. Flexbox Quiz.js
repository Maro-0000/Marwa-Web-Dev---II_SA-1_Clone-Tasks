// Array of quiz questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Paris", "Madrid", "Rome"],
        correct: 1 // Index of the correct answer (Paris)
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1 // Index of the correct answer (4)
    },
    {
        question: "What is the capital of Japan?",
        answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correct: 2 // Index of the correct answer (Tokyo)
    }
];

let currentQuestionIndex = 0; // Tracks the current question

// Function to check the answer
function checkAnswer(button, isCorrect) {
    const resultElement = document.getElementById("result");
    const buttons = document.querySelectorAll(".answer-button");

    // Remove any previous results
    resultElement.textContent = "";
    buttons.forEach(btn => {
        btn.classList.remove("correct", "wrong");
    });

    // Mark the selected answer as correct or wrong
    if (isCorrect) {
        button.classList.add("correct");
        resultElement.textContent = "Correct Answer!";
    } else {
        button.classList.add("wrong");
        resultElement.textContent = "Wrong Answer!";
    }

    // Disable buttons after answering
    buttons.forEach(btn => btn.disabled = true);
}

// Function to load the next question
function nextQuestion() {
    currentQuestionIndex++; // Move to the next question

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("result").textContent = ""; // Clear previous result
    } else {
        document.getElementById("question-text").textContent = "Quiz Completed!";
        document.querySelector(".answers").style.display = "none"; // Hide answer buttons
        document.getElementById("next-button").style.display = "none"; // Hide next button
    }
}

// Function to load the current question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = currentQuestion.question;
    const buttons = document.querySelectorAll(".answer-button");

    // Update answer button text
    buttons.forEach((btn, index) => {
        btn.textContent = currentQuestion.answers[index];
        btn.disabled = false; // Enable buttons for the next question
        btn.classList.remove("correct", "wrong"); // Remove previous styles
    });
}

// Load the first question when the page loads
window.onload = loadQuestion;
