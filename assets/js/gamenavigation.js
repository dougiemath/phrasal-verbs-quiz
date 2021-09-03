/**
 * Places the fcous on the user-input box
 */

 window.addEventListener('DOMContentLoaded', (event) => {
    let submitButton = document.getElementById("username-submit")
    if (submitButton.style.display = "none");
    submitButton.style.display = "block"
});

/**
 * Places the fcous on the user-input box
 **/

document.getElementById("username-input").focus()

function showHide(target){
let container = document.getElementById(target)

if (container.style.display = "none"){
    coontainer.style.dispaly = "block"
} else {
    container.style.dispaly = "none"
}
}
/**
 * Hides the username-input div
 *  */
/** 
function hideUsername() {
    let usernameContainer = document.getElementById("username-container")

    if (usernameContainer.style.display = "block") {
        usernameContainer.style.display = "none"
    }
}
*/
/**
 * Displays the language point div
*/
/**
function displayLangaugePoint() {
    let languagePointContainer = document.getElementById("language-point-container")
    if (languagePointContainer.style.display = "none") {
        languagePointContainer.style.display = "block"
    }
}
*/
/**
 * Hides the language point div
 *  */
/*
function hideLanguageContainer() {
    let languageContainer = document.getElementById("language-point-container")

    if (languageContainer.style.display = "block") {
        languageContainer.style.display = "none"
    }
}
*/
/**
 * displays the feedback div
 */
/*
function displayFeedbackContainer() {
    let feedbackContainer = document.getElementById("feedback-container");
    if (feedbackContainer.style.display = "none") {
        feedbackContainer.style.display = "block"
    }
}
*/
/**
 * hides the question container and the reading container div
 */

function hideQuestionContainer() {
    let questionContainer = document.getElementById("question-container")
    let readingContainer = document.getElementById("reading-container");

    if (questionContainer.style.display = "block") {
        questionContainer.style.display = "none";
        readingContainer.style.display = "none";
    }
}

/**
 * Displays the question and reading containers
 */

function displayExercise() {
    let readingContainer = document.getElementById("reading-container");
    let questionContainer = document.getElementById("question-container");

    if (readingContainer.style.display = "none") {
        readingContainer.style.display = "block";
        questionContainer.style.display = "block"
    }
}

/**
 * Shows the answers container
 */

function showAnswers() {
    let feedbackContainer = document.getElementById("feedback-container");
    let answersContainer = document.getElementById("answers-container");

    if (answersContainer.style.display = "none") {
        answersContainer.style.display = "block";
        feedbackContainer.style.display = "none"
    }
}

/**
 * Function to apply hover feature on buttons
 */

function hoverEffect() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "white";
}

/**
 * Function to remove hover feature on buttons
 */

function hoverOffEffect() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
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
 * Function to move page to just under header on 
 * navigtion button presses
 */

function visitPage() {
    window.location.href = "#anchor"
}