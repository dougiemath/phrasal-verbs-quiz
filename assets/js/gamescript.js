let answers = Array.from(document.getElementsByClassName("answer"))
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
]
/**
 * Function to start game on pressing Enter at usersubmit screen
 */

 document.getElementById("username-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        displayStartMessage();
        hideUsername(); 
        displayLangaugePoint();
    }
});

//function to display start message

function displayStartMessage() {
    let username = document.getElementById("username-input").value;
    document.getElementById("instructions-message").textContent = "Hi " + username + ", before you start the exercise, please read the langauge point below."
    document.getElementById("ready-message").textContent = "If you are ready, " + username + ", you can click the button to start the exercise!"
}

// function to startGame

function startGame() {
    score = 0;
    currentQuestion = -1;
    callQuestions();
    remainingQuestions = questionList.length;
}

// function to check answers

checkAnswer()

function checkAnswer() {

    answers.forEach(answer => {
        answer.addEventListener("click", event => {
            console.log(event.target.innerText)
            let selection = event.target.innerText;

            if (selection === questionList[currentQuestion].correctAnswer) {
                score++
            } else {
                score + 0
            }
            //calculate running score
            document.getElementById("running-score").innerHTML = "Current Score <br>=   " + score + "/5";

            //calls the next question
            callQuestions()

            //calculate remaining questions
            remainingQuestions--
            document.getElementById("remaining-questions").innerHTML = "Qestions remaining <br>=  " + remainingQuestions + "/5";

            //displays final score on ';'final score' container
            let username = document.getElementById("username-input").value;
            document.getElementById("final-score").innerHTML = username + ", you scored " + score + " out of " + questionList.length

        })

    })
}

// function to call questions

function callQuestions() {
    currentQuestion = currentQuestion + 1;
    if (currentQuestion >= questionList.length) {
        displayFeedbackContainer();
        hideQuestionContainer();
        dispalyFinalImage();
        return;
    }

    function dispalyFinalImage() {
        let imageZero = document.getElementById("feedback-image-zero-marks");
        let fullMarksImage = document.getElementById("feedback-image-full-marks")
        let notBadImage = document.getElementById("feedback-image-not-bad")

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



