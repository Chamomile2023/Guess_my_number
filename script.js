"use strict"
const scoreValue = document.querySelector(".header_score")
const score = document.querySelector(".question")
const highScore = document.querySelector(".span_score")
const inputValue = document.querySelector(".header_input")
const btnCheck = document.querySelector(".header_input_btn")
const header = document.querySelector(".header")
const again = document.querySelector(".header_button")
const square = document.querySelector(".header_square")
const highScoreTotal = document.querySelector(".span_high")

let secretNumber = Math.trunc(Math.random() * 20) + 1
let valueScore = 20
let high_score = 0;

btnCheck.addEventListener("click", function (event) {
    event.preventDefault()
    const valueInput = Number(inputValue.value)

    if (!valueInput) {
        document.querySelector(".header_score").textContent = "No number!"
    } else if (valueInput === secretNumber) {
        scoreValue.textContent = "Correct number!"
        header.style.backgroundColor = "violet"
        inputValue.style.backgroundColor = "violet"
        score.style.color = "violet"
        btnCheck.style.color = "violet"
        again.style.color = "violet"
        square.style.width = "200px"
        score.textContent = secretNumber

        if (valueScore > high_score) {
            high_score = valueScore
            highScoreTotal.textContent = high_score
        }

    } else if (valueInput > secretNumber) {
        if (valueScore > 1) {
            scoreValue.textContent = "Too high!"
            valueScore--;
            highScore.textContent = valueScore;
        } else {
            scoreValue.textContent = "You lose the game!"
            highScore.textContent = 0
        }
    } else if (valueInput < secretNumber) {
        if (valueScore > 1) {
            scoreValue.textContent = "Too low!"
            valueScore--;
            highScore.textContent = valueScore;
        } else {
            scoreValue.textContent = "You lose the game!"
            highScore.textContent = 0
        }
    }
})

again.addEventListener("click", function (event) {
    // event.preventDefault()
    valueScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    scoreValue.textContent = "Start guessing..."
    highScore.textContent = valueScore
    score.textContent = "?"
    inputValue.value = ""
    header.style.backgroundColor = "#008b8b"
    inputValue.style.backgroundColor = "#008b8b"
    score.style.color = "#008b8b"
    btnCheck.style.color = "#008b8b"
    again.style.color = "#008b8b"
    square.style.width = "100px"
})