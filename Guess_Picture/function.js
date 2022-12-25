"use strict";

const imgUrl = [
  "https://i.pinimg.com/564x/dd/a1/32/dda13285834959b64d8d86653553050a.jpg",
  "https://i.pinimg.com/564x/fa/f1/f7/faf1f7f6e2e88bafc5b85fd3e9ecae76.jpg",
  "https://i.pinimg.com/564x/91/ed/08/91ed08b32631db96697f696f59af2fc8.jpg",
];
//NOTE
const correctAnswer = ["Cats", "Astronaut", "Tiger"];

let ranIndex = Math.floor(Math.random() * imgUrl.length);
let ranimgUrl = imgUrl[ranIndex];

let imgElement = document.querySelector("img");
imgElement.src = ranimgUrl;

let score = 0;
let noOfGuess = correctAnswer.length;
document.querySelector(".guess").textContent = noOfGuess;

const test = document
  .querySelector(".btn")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      return e.key;
    }
  });
console.log(test);

document.querySelector(".btn").addEventListener("click" || test, function () {
  const userAnswer = document.querySelector(".input").value;
  const correctIndex = correctAnswer.indexOf(userAnswer);

  if (!userAnswer) {
    console.log("No Answer");
  } else if (userAnswer === correctAnswer[correctIndex]) {
    console.log("Correct!");

    ranIndex = Math.floor(Math.random() * imgUrl.length);
    ranimgUrl = imgUrl[ranIndex];
    imgElement.src = ranimgUrl;
    document.querySelector(".input").value = "";
    document.querySelector("span").textContent = "Correct Answer!";

    score++;
    document.querySelector(".score").textContent = score;
  } else if (userAnswer !== correctAnswer[correctIndex]) {
    console.log("Wrong");

    document.querySelector(".input").value = "";
    document.querySelector("span").textContent = "Wrong Answer!";

    noOfGuess--;
    document.querySelector(".guess").textContent = noOfGuess;
  }
});

document.querySelector(".input").addEventListener("click", function () {
  document.querySelector("span").textContent = "Check";
});
