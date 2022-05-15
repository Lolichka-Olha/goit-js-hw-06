const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function handleInput(e) {
  if (e.target.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = e.target.value;
  }
}

input.addEventListener("input", handleInput);
