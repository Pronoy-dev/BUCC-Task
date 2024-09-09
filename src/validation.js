const form = document.getElementById("form");
const fullName_input = document.getElementById("fullName-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitButton = document.getElementById("submitButton");
const loginBtn = document.getElementById("loginBtn");

form.addEventListener("submit", (e) => {
  // e.preventDefault();

  let errors = [];

  if (fullName_input) {
    errors = getSignupFormErrors(
      fullName_input.value,
      email_input.value,
      password_input.value
    );
  } else {
    errors = getLoginFormErrors(email_input.value, password_input.value);
  }

  if (errors.length > 0) {
    e.preventDefault();
    fullNameError.innerText = errors[0];
    emailError.innerText = errors[1];
    passwordError.innerText = errors[2];
  }
});

function getSignupFormErrors(fullName, email, password) {
  let errors = [];
  if (fullName === "" || fullName == null) {
    errors.push("Full name is required");
  }
  if (email === "" || email == null) {
    errors.push("Email is required");
  }
  if (password === "" || password == null) {
    errors.push("Password is required");
  }

  return errors;
}

const dataInputs = [fullName_input, email_input, password_input];

dataInputs.forEach((input, index) => {
  if (input) {
    input.addEventListener("input", () => {
      switch (index) {
        case 0:
          fullNameError.innerText = "";
          break;
        case 1:
          emailError.innerText = "";
          break;
        case 2:
          passwordError.innerText = "";
          break;
      }
    });
  }
});

loginBtn.onclick = function () {
  window.location.href = "portfolio.html";
};
