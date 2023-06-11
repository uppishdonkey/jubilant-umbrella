var timerEl = document.querySelector("#timer");
var secondsLeft = 75;

var startButtonEl = document.querySelector("#start-button");

var initialFormEl = document.querySelector("#submit-initials")
initialFormEl.hidden = true;

var questionTitleEl = document.querySelector("#question-title");
var choice1El = document.querySelector("#choice-1");
var choice2El = document.querySelector("#choice-2");
var choice3El = document.querySelector("#choice-3");
var choice4El = document.querySelector("#choice-4");
var outcomeEl = document.querySelector("#answer-outcome");

// object containing every question
var questions = {
    0: ["Question 1: Commonly used data types do NOT include:", "1: strings", "2: booleans", "3: alerts", "4: numbers"],
    1: ["Question 2: A very useful tool used during development and debugging for printing content to the debugger is: ", "1: JavaScript", "2: terminal/bash", "3: for loops", "4: console.log"],
    2: ["Question 3: String values must be enclosed within _________ when being assigned to variables.", "1: commas", "2: curly brackets", "3: quotes", "4: parentheses"],
    3: ["Question 4: Arrays in JavaScript can be used to store _________. ", "1: numbers and strings", "2: other arrays", "3: booleans", "4: all of the above"],
    4: ["Question 5: The condition in an if/else statement is enclosed with ________.", "1: quotes", "2: curly brackets", "3: parentheses", "4: square brackets"]
}

// object containing correct answers
var correctAnswers = {
    question1: questions[0[4]],
    question2: questions[1[4]],
    question3: questions[2[3]],
    question4: questions[3[4]],
    question5: questions[4[2]]
}
// function that starts the quiz when the start button is clicked
function startQuiz () {
    setTime();
}

// function to display timer
function setTime() {
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Seconds Remaining: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            secondsLeft = 0;
            endGame();
        }
    }, 1000);
}

startButtonEl.addEventListener('click', startQuiz);