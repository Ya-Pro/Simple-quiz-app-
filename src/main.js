//the questions that you want 
quizData= [
    {
        question:"What is JavaScript?",
        a:"JavaScript is a scripting language used to make the website interactive",
        b:" JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the mentioned",
        correct:"a",
    },    {
        question:" Which of the following is correct about JavaScript?",
        a:"JavaScript is an Object-Based language",
        b:" JavaScript is Assembly-language",
        c: "JavaScript is an Object-Oriented language",
        d: "JavaScript is a High-level language",
        correct:"a",
    },    {
        question:"What is JavaScript",
        a:"JavaScript is a scripting language used to make the website interactive",
        b:" JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the mentioned",
        correct:"a",
    },    {
        question:"Among the given statements, which statement defines closures in JavaScript?",
        a:"JavaScript is a function that is enclosed with references to its inner function scope",
        b:" JavaScript is a function that is enclosed with references to its lexical environment",
        c: " JavaScript is a function that is enclosed with the object to its inner function scope",
        d: "None of the mentioned",
        correct:"b",
    },    {
        question:"Arrays in JavaScript are defined by which of the following statements?",
        a:"It is an ordered list of values",
        b:" It is an ordered list of objects",
        c: "It is an ordered list of string",
        d: "It is an ordered list of functions",
        correct:"a",
    }, {
        question:"Where is Client-side JavaScript code is embedded within HTML documents?",
        a:"A URL that uses the special javascript:code",
        b:"A URL that uses the special javascript:protocol",
        c: "A URL that uses the special javascript:encoding",
        d: "A URL that uses the special javascript:stack",
        correct:"b",
    },
]
// lets get the quiz container
let quiz = document.getElementById("quiz")
// lets get the question
let question = document.getElementById("question")
// lets get the answers 
let answers = document.querySelectorAll(".answer")
// let answer = document.getElementsByName("answer")
// let answer = document.getElementsByClassName("answer")
// let answers = document.getElementsByTagName("input")
// lets get the answer of all
let a_answer = document.getElementById("a_answer")
let b_answer = document.getElementById("b_answer")
let c_answer = document.getElementById("c_answer")
let d_answer = document.getElementById("d_answer")
// lets get the submit button
let submitAnswer = document.querySelector("[type=submit]")
// let get into the hard part
let currentQuiz = 0 , score = 0;
loadQuiz();
function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    // currentQuizData=quizData[0];
    question.innerText = currentQuizData.question
    a_answer.innerText = currentQuizData.a;
    b_answer.innerText = currentQuizData.b;
    c_answer.innerText = currentQuizData.c;
    d_answer.innerText = currentQuizData.d;
}
function deselectAnswers() {
    answers.forEach(answer => answer.checked = false)
}
function getSelected() {
    answers.forEach(answerEl => {
        if ( answerEl.checked) {
             answer = answerEl.id
        }
    })
    return answer
}
// after clicking on submit button
submitAnswer.addEventListener('click', ()=> {
    const answerNow = getSelected();
    if ( answerNow ) {
        if (answerNow === quizData[currentQuiz].correct){
            score ++;
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score} / ${quizData.length} questions correctly</h2>
            <button onClick = "location.reload()">Reload</button>
            `
        } 

    }
})

