const bodyColor = document.querySelector("body");
const btnColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
}

btnColor.addEventListener("click", changeColor);
