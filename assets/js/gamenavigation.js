
/**
 * Places the fcous on the user-input box
 *  */

 document.getElementById("username-input").focus()

/**
 * Hides the username-input div
 *  */

function hideUsername(){
    let usernameContainer = document.getElementById("username-container")

    if (usernameContainer.style.display = "block")
        usernameContainer.style.display = "none"
}

/**
 * Displays the language point div
*/

function displayLangaugePoint(){
    let languagePointContainer = document.getElementById("language-point-container")
    if(languagePointContainer.style.display = "none");
    languagePointContainer.style.display = "block"
}

/**
 * Hides the language point div
 *  */

 function hideLanguageContainer(){
    let languageContainer = document.getElementById("language-point-container")

    if (languageContainer.style.display = "block")
    languageContainer.style.display = "none"
}

/**
 * displays the feedback div
 */

function displayFeedbackContainer(){
    let feedbackContainer = document.getElementById("feedback-container");
    if (feedbackContainer.style.display = "none");
        feedbackContainer.style.display = "block"
}

/**
 * hides the question container div
 */

function hideQuestionContainer(){
    let questionContainer = document.getElementById("question-container")
        if (questionContainer.style.display = "block");
        questionContainer.style.display = "none";
}
