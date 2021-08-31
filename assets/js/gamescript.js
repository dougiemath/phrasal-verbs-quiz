// variables

// question list (array)

// function to get username

function addUsername(){
    let usernameInput = document.getElementById("username-input").value
    console.log(usernameInput);
}

// function to startGame

function startGame(){
    console.log("start game function")
}

//function to display start message

function displayStartMessage() {
    let username = document.getElementById("username-input").value;
    document.getElementById("instructions-message").textContent = "Hi " + username + ", before you start the exercise, please read the langauge point below."
    document.getElementById("ready-message").textContent = "If you are ready, " + username + ", you can click the button to start the exercise!"
}

// function to call questions

// function to check answers

// function to display feedback


