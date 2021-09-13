let answers = Array.from(document.getElementsByClassName("answer"));
let currentQuestion;
let score;
let remainingQuestions;

/**
 * question list (array)
 */

let questionList = [{
    question: "1.	Who was shouted down? ",
    choices: ["Lucas", "Heidi", "Harry", "Mia"],
    correctAnswer: "Heidi",
},
{
    question: "2.	Who was gunned down? ",
    choices: ["Lucas", "Mia", "Oliver", "Harry"],
    correctAnswer: "Lucas"
},
{
    question: "3.	Who felt tied down? ",
    choices: ["Oliver", "Harry", "Mia", "Lucas"],
    correctAnswer: "Harry"
},
{
    question: "4.	Who was pinned down? ",
    choices: ["Mia", "Harry", "Lucas", "Oliver"],
    correctAnswer: "Oliver"
},
{
    question: "5.	Who managed to knock someone down?",
    choices: ["Harry", "Lucas", "Mia", "Oliver"],
    correctAnswer: "Mia"
},
];

/**
 * Places the fcous on the user-input box
 */

window.addEventListener('DOMContentLoaded', (event) => {
    let submitButton = document.getElementById("username-submit");
    if (submitButton.style.display = "none");
    submitButton.style.display = "block";
});

/**
 * Places the fcous on the user-input box
 **/

document.getElementById("username-input").focus();

/**
 * Function to start game on pressing Enter at usersubmit screen
 */
document.getElementById("username-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        displayStartMessage();
    }
});

/**
 * Reusable function to show and hide divs 
 */

function showHide(target) {
    let targetContainer = document.getElementById(target);
    if (targetContainer.style.display === "none") {
        targetContainer.style.display = "block";
    } else {
        targetContainer.style.display = "none";
    }
}
/**
 * function to display start message
 */

function displayStartMessage() {
    let username = document.getElementById("username-input").value;
    if(username){
        console.log(username)
    } else {
        console.log("error")
    }
    //showHide('language-point-container'); 
    //showHide('username-container');
    
    //document.getElementById("instructions-message").textContent = "Hi " + username + ", before you start the exercise, please read the language point below.";
    //document.getElementById("ready-message").textContent = "If you are ready, " + username + ", you can click the button to start the exercise!";
}

/**
 * function to startGame
 */

function startGame() {
    showHide('language-point-container'); 
    showHide('reading-container'); 
    showHide('question-container'); 
    visitPage()
    score = 0;
    currentQuestion = -1;
    callQuestions();
    checkAnswer();
    remainingQuestions = questionList.length;
}

/**
 * Function to check answers against the array
 */

function checkAnswer() {
    answers.forEach(answer => {
        answer.addEventListener("click", event => {
            let selection = event.target.innerText;
            if (selection === questionList[currentQuestion].correctAnswer) {
                score++;
            }
            document.getElementById("running-score").innerHTML = "Current Score <br>" + score + "/5";
            callQuestions();
            remainingQuestions--;
            document.getElementById("remaining-questions").innerHTML = "Qestions remaining <br>" + remainingQuestions + "/5";
            let username = document.getElementById("username-input").value;
            document.getElementById("final-score").innerHTML = username + ", you scored " + score + " out of " + questionList.length;

        });
    });
}

/** 
 * function to call the first/next questions
*/
function callQuestions() {
    currentQuestion = currentQuestion + 1;
    if (currentQuestion >= questionList.length) {
        showHide('feedback-container');
        showHide('question-container');
        showHide('reading-container');
        dispalyFinalImage();
        return;
    }
    function dispalyFinalImage() {
        let imageZero = document.getElementById("feedback-image-zero-marks");
        let fullMarksImage = document.getElementById("feedback-image-full-marks");
        let notBadImage = document.getElementById("feedback-image-not-bad");

        if (score <= 2) {
            imageZero.style.display = "block";
        } else if (score <= 4) {
            notBadImage.style.display = "block";
        } else {
            fullMarksImage.style.display = "block";
        }
    }
    document.getElementById("quiz-questions").innerHTML = questionList[currentQuestion].question;
    document.getElementById("button-a").innerHTML = questionList[currentQuestion].choices[0];
    document.getElementById("button-b").innerHTML = questionList[currentQuestion].choices[1];
    document.getElementById("button-c").innerHTML = questionList[currentQuestion].choices[2];
    document.getElementById("button-d").innerHTML = questionList[currentQuestion].choices[3];
}

/**
 * Function to reset the game (reloads page from the cache)
 */

function resetGame() {
    document.location.reload();
}

/**
 * Functions to apply hover feature on buttons
 */

function hoverEffect() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "rgb(255,255,255)";
}

function hoverOffEffect() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "rgb(255,255,255)";
    this.style.color = "rgb(184,119,169)";
}

let buttons = document.getElementsByClassName('all-buttons');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', hoverEffect);
    buttons[i].addEventListener('mouseleave', hoverOffEffect);
    buttons[i].addEventListener('mouseup', hoverOffEffect);
    buttons[i].addEventListener('touchstart', hoverEffect);
    buttons[i].addEventListener('touchend', hoverOffEffect);
}

/**
 * Navigation function, buttons link to the header
 */

function visitPage() {
    window.location.href = "#header";
}

function showAnswers(){
    visitPage(); 
    showHide('answers-container'); 
    showHide('feedback-container')
}