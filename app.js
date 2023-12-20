

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
const submitBtn = document.querySelector('#sibmit');

// Index for every new question
let currentQuizQuestion = 0;
// Quiz score
let score = 0;

loadQuiz();

// Create Quiz 
function loadQuiz(){
    const currentQuizData = quizData[currentQuizQuestion];

    // Question
    questionElement.innerText = currentQuizData.question;

    // Variants of answers
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    
}
