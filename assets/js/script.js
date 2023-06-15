var timerEl = document.querySelector("#timer");
var secondsLeft = 75;

var startButtonEl = document.querySelector("#start-button");

var initialFormEl = document.querySelector("#submit-initials");

var mainTextEl = document.querySelector("#main-text");

var questionTitleEl = document.querySelector("#question-title");
var choice1El = document.querySelector("#choice-1");
var choice2El = document.querySelector("#choice-2");
var choice3El = document.querySelector("#choice-3");
var choice4El = document.querySelector("#choice-4");
var outcomeEl = document.querySelector("#answer-outcome");

var scoreEl = document.querySelector("#score-display")
var resultsMenuEl = document.querySelector(".results-menu")

// object containing every question
var questions = {
    0: ["Question 1: Commonly used data types do NOT include:", "1: strings", "2: booleans", "3: alerts", "4: numbers"],
    1: ["Question 2: A very useful tool used during development and debugging for printing content to the debugger is: ", "1: JavaScript", "2: terminal/bash", "3: for loops", "4: console.log"],
    2: ["Question 3: String values must be enclosed within _________ when being assigned to variables.", "1: commas", "2: curly brackets", "3: quotes", "4: parentheses"],
    3: ["Question 4: Arrays in JavaScript can be used to store _________. ", "1: numbers and strings", "2: other arrays", "3: booleans", "4: all of the above"],
    4: ["Question 5: The condition in an if/else statement is enclosed with ________.", "1: quotes", "2: curly brackets", "3: parentheses", "4: square brackets"]
}

// object containing correct answers
var correctAnswers = ["4: numbers", "4: console.log", "3: quotes", "4: all of the above", "3: parentheses"];
    
var currentQuestion = 0;
var score = 0;


// function that starts the quiz when the start button is clicked
function startQuiz (event) {
    setTime();
    mainTextEl.textContent = " ";
    resultsMenuEl.textContent = " ";
    startButtonEl.setAttribute("style", "display: none");
    alignQuestions();
}

function alignQuestions (event) {
    questionTitleEl.textContent = questions[currentQuestion][0];
    choice1El.textContent = questions[currentQuestion][1];
    choice2El.textContent = questions[currentQuestion][2];
    choice3El.textContent = questions[currentQuestion][3];
    choice4El.textContent = questions[currentQuestion][4];
}

choice1El.addEventListener('click', function() {
    var option1Text = questions[currentQuestion][1];
    checkAnswer(option1Text);
    currentQuestion++;
    alignQuestions();
})

choice2El.addEventListener("click", function() {
    var option2Text = questions[currentQuestion][2];
    checkAnswer(option2Text);
    currentQuestion++;
    alignQuestions();
})

choice3El.addEventListener("click", function() {
    var option3Text = questions[currentQuestion][3];
    checkAnswer(option3Text);
    currentQuestion++;
    alignQuestions();
})

choice4El.addEventListener("click", function() {
    var option4Text = questions[currentQuestion][4];
    checkAnswer(option4Text);
    currentQuestion++;
    alignQuestions();   
})

// function to display timer
function setTime() {
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Seconds Remaining: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            secondsLeft = 0;
            console.log(secondsLeft);
            endGame();
        }
    }, 1000);
}

// function to check for the correct answer
function checkAnswer (answerSelection) {
    if (correctAnswers[currentQuestion] === answerSelection) {
        score + 2;
        outcomeEl.textContent = "Correct!";
    } else {
        secondsLeft -= 10;
        outcomeEl.textContent = "Wrong!";
    }
    console.log(correctAnswers[currentQuestion]);
    console.log(answerSelection);
}

// function to end the game
function endGame (event) {
    questionTitleEl.style.display = "none";
    choice1El.style.display = "none";
    choice2El.style.display = "none";
    choice3El.style.display = "none";
    choice4El.style.display = "none";
    outcomeEl.style.display = "none";
    scoreEl.textContent = " ";
}
startButtonEl.addEventListener('click', startQuiz);