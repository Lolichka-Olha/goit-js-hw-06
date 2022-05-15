const input = document.querySelector("#validation-input");

function onInputBlur(e) {
  if (e.currentTarget.value.length === Number(e.currentTarget.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

input.addEventListener("blur", onInputBlur);
