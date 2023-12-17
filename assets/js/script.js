/* Get all the required elements */
const infoContainer = document.querySelector(".quiz-info-container ");
const startButton = document.querySelector(".start-btn button");
const continueBtn = document.querySelector(".buttons .continuebtn")
const quizContainer = document.querySelector(".quiz-game-container");
const playAgainbutton = document.querySelector(".btn .play-again-btn");
const scoreSection = document.querySelector("score-section");




/* Show Level section if startbutton is pressed */
startButton.onclick = () => {
    infoContainer.classList.add("activeInfo"); /* Show level section if pressed */
}


continueBtn.onclick = () => {
    infoContainer.classList.remove("activeInfo"); /* hide the info section */
    quizContainer.classList.add("activeQuiz"); /* Show the quiz section */
    getQuestions(0);
    questioncounter(1);
}

let questionCount = 0;
let questionNumb = 1;


const nextButton = quizContainer.querySelector(".next-button");

/* If next button is pressed */
nextButton.onclick = () => {
    if (questionCount < questions.length - 1 ) {
        questionCount++;
        questionNumb++;
        getQuestions(questionCount);
        questioncounter(questionNumb);
    }
    else {
        console.log("Questions Completed!");
    }
}

/* Getting questions and options*/
function getQuestions (index){
    const questionText = document.querySelector(".question-text");
    const OptionsList = document.querySelector(".anwers-options-list");
    let questionName = "<span>" + questions[index].numb + ". " + questions[index].question +"</span>";
    let OptionsText = '<div class="answers">'+ questions[index].options[0]+'<span></span></div>'
        +  '<div class="answers">'+ questions[index].options[1]+'<span></span></div>'
        +  '<div class="answers">'+ questions[index].options[2]+'<span></span></div>'
        +  '<div class="answers">'+ questions[index].options[3]+'<span></span></div>';
    questionText.innerHTML = questionName;
    OptionsList.innerHTML = OptionsText;
    const answers = OptionsList.querySelectorAll(".answers");
    for (let i = 0; i < answers.length; i++) {
        answers[i].setAttribute("onclick", "answersSelected(this)");
        
    }
}

function questioncounter(index){
    const bottomCounter = quizContainer.querySelector(".total-questions");
    let totalQuestionText = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottomCounter.innerHTML = totalQuestionText;
}

