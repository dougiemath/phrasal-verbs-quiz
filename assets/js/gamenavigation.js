/**
 * Places the fcous on the user-input box
 */

window.addEventListener('DOMContentLoaded', (event) => {
    let submitButton = document.getElementById("username-submit")
    if(submitButton.style.display = "none");
        submitButton.style.display = "block"
});

/**
 * Places the fcous on the user-input box
 **/

 document.getElementById("username-input").focus()

/**
 * Hides the username-input div
 *  */

function hideUsername(){
    let usernameContainer = document.getElementById("username-container")

    if (usernameContainer.style.display = "block"){
        usernameContainer.style.display = "none"
    }
}

/**
 * Displays the language point div
*/

function displayLangaugePoint(){
    let languagePointContainer = document.getElementById("language-point-container")
    if(languagePointContainer.style.display = "none"){
    languagePointContainer.style.display = "block"
    }
}

/**
 * Hides the language point div
 *  */

 function hideLanguageContainer(){
    let languageContainer = document.getElementById("language-point-container")

    if (languageContainer.style.display = "block"){
    languageContainer.style.display = "none"
    }
}

/**
 * displays the feedback div
 */

function displayFeedbackContainer(){
    let feedbackContainer = document.getElementById("feedback-container");
    if (feedbackContainer.style.display = "none"){
        feedbackContainer.style.display = "block"
    }
}

/**
 * hides the question container and the reading container div
 */

function hideQuestionContainer(){
    let questionContainer = document.getElementById("question-container")
    let readingContainer = document.getElementById("reading-container");

        if (questionContainer.style.display = "block"){
        questionContainer.style.display = "none";
        readingContainer.style.display = "none";
        }
}

/**
 * Displays the question and reading containers
 */

function displayExercise(){
let readingContainer = document.getElementById("reading-container");
let questionContainer = document.getElementById("question-container");

if (readingContainer.style.display = "none"){
    readingContainer.style.display = "block";
    questionContainer.style.display = "block"
}
}

/**
 * Shows the answers container
 */

function showAnswers(){
    let feedbackContainer = document.getElementById("feedback-container");
    let answersContainer = document.getElementById("answers-container");

    if (answersContainer.style.display = "none"){
        answersContainer.style.display = "block";
        feedbackContainer.style.display = "none"
    }
}


//button A mouse over and touch effect

document.getElementById("button-a").onmouseover = function greenBackground() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "white";
}

document.getElementById("button-a").onmouseleave = function originaBackground() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
}

document.getElementById("button-a").onmouseup = function originaBackground() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
}

document.getElementById("button-a").ontouchstart = function greenBackgroundOnTouch() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "white";
};

document.getElementById("button-a").ontouchend = function originalBackgroundOnTouch() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
};

//button B mouse over and touch effect

document.getElementById("button-b").onmouseover = function greenBackground() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "white";
}

document.getElementById("button-b").onmouseleave = function originaBackground() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
}

document.getElementById("button-b").onmouseup = function originaBackground() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
}

document.getElementById("button-b").ontouchstart = function greenBackgroundOnTouch() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "white";
};

document.getElementById("button-b").ontouchend = function originalBackgroundOnTouch() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
};

//button C mouse over and touch effect

document.getElementById("button-c").onmouseover = function greenBackground() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "white";
}

document.getElementById("button-c").onmouseleave = function originaBackground() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
}

document.getElementById("button-c").onmouseup = function originaBackground() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
}

document.getElementById("button-c").ontouchstart = function greenBackgroundOnTouch() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "white";
};

document.getElementById("button-c").ontouchend = function originalBackgroundOnTouch() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
};

//button D mouse over and touch effect

document.getElementById("button-d").onmouseover = function greenBackground() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "white";
}

document.getElementById("button-d").onmouseleave = function originaBackground() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
}

document.getElementById("button-d").onmouseup = function originaBackground() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
}

document.getElementById("button-d").ontouchstart = function greenBackgroundOnTouch() {
    this.style.border = "solid 0.5px  rgb(12,173,149)";
    this.style.backgroundColor = "rgb(12,173,149)";
    this.style.color = "white";
};

document.getElementById("button-d").ontouchend = function originalBackgroundOnTouch() {
    this.style.border = "solid 0.5px rgb(184,119,169)";
    this.style.backgroundColor = "white";
    this.style.color = "rgb(184,119,169)";
};