const form = document.querySelector(".login-form");

function submitHandler(event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Введіть будь ласка всі дані!");
  }

  console.log({ email: email.value, password: password.value });

  event.currentTarget.reset();
}

form.addEventListener("submit", submitHandler);
