"use strict";

const qa =  [
        {
            question: "What is the largest land animal?",
            answer: "Elephant"
        },
        {
            question: "Which animal is known as the king of the jungle?",
            answer: "Lion"
        },
        {
            question: "What mammal can fly?",
            answer: "Bat"
        },
        {
            question: "Which animal is famous for its black and white stripes?",
            answer: "Zebra"
        },
        {
            question: "What is the fastest land animal?",
            answer: "Cheetah"
        }
    ];//array of objects

let currentQuestion = 0;
let score = 0;
console.log(qa[currentQuestion].question);
document.getElementById("question").innerHTML = qa[currentQuestion].question;

// when I press submit, I want to check the answer and display if it is correct or not, and then go to the next question

let submitButton = document.getElementById("submit");
let result = document.getElementById("result");

submitButton.addEventListener('click', function() {
    // const selected = document.querySelector('input[name="option"]:checked');
    // console.log(selected.value);
    // if (selected.value === qa[currentQuestion].answer) {
    //     console.log("correct");
    //     result.innerHTML = "correct";
    //     increaseScore();
    //     nextQuestion();
    //     updateQuestion();
    // } else {
    //     console.log("incorrect");
    //     result.innerHTML = "incorrect";
    //     decreaseScore();
    //     nextQuestion();
    //     updateQuestion();
    // }

    if (checkAnswer()) {
        increaseScore();
        nextQuestion();
        updateQuestion();
    } else {
        decreaseScore();
        nextQuestion();
        updateQuestion();
    }
});

function checkAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    console.log(selected.value);
    return selected.value === qa[currentQuestion].answer;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion == qa.length) {
        currentQuestion = 0;
    }
}

function updateQuestion() {
    document.getElementById("question").innerHTML = qa[currentQuestion].question;
}

function increaseScore() {
    score++;
    result.innerHTML = "Score: " + score;
    setTimeout(clearResult, 3000);
}

function decreaseScore() {
    score--;
    result.innerHTML = "Score: " + score;
    setTimeout(clearResult, 3000);
}

function clearResult() {
    result.innerHTML = "";
}

