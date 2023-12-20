

const quizData = [
    {
        question: "Your favourite web browser ?",
        a: "Edge",
        b: "Google Chrome", 
        c: "Firefox",
        d: "Opera",
        correct: "d"
    }, 
    {
        question: "What language do you prefer ?",
        a: "English",
        b: "German",
        c: "Chinese",
        d: "French",
        correct: "a",
    },
    {
       question: "What is your favourite season ?",
       a: "Winter",
       b: "Spring",
       c: "Summer",
       d: "Fall" ,
       correct: "d"
    }
]

const quiz = document.querySelector('#quiz');
const answerElements = document.querySelectorAll('.answer')
const questionElement = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit');

// Index for every new question
let currentQuizQuestion = 0;
// Quiz score
let score = 0;

loadQuiz();

// Create Quiz 
function loadQuiz(){

    // Deselect Answers
    deselectAnswers();

    const currentQuizData = quizData[currentQuizQuestion];

    // Question
    questionElement.innerText = currentQuizData.question;

    // Variants of answers
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;


}

// Deselect Answers
function deselectAnswers(){
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    })
}

// Gei id of selected answer
function getSelected(){
    let answer;

    // If element is selected => get it id
    answerElements.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })

    return answer;
}

// Submit Answer
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const answer = getSelected();
    
    // Check the answer
    if(answer){
        if(answer === quizData[currentQuizQuestion].correct){
            // Increase scores
            score++;
        }
        // Next Quetion
        currentQuizQuestion++

        if(currentQuizQuestion < quizData.length){
            loadQuiz();
        } else {
            // Show total scores
            quiz.innerHTML = `<h2>Your total scores is ${score}</h2>
            <button onClick="location.reload()">Reload</button>
            `;
        }
    }

});