
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
 * Hides the language point div
 *  */

 function hideLanguageContainer(){
    let languageContainer = document.getElementById("language-point-container")

    if (languageContainer.style.display = "block")
    languageContainer.style.display = "none"
}


