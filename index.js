// // adding submit events for the form validation
document.querySelector(".card").addEventListener("submit", function () {
  const NameClass = ["invalid-icon", "placeholder--notext"];
  const firstName = document.getElementById("first-name");
  if (firstName.value === "") {
    document.querySelector(".invalid-firstname").style.display = "inline-block";
    firstName.classList.add(...NameClass);
  } else {
    document.querySelector(".invalid-firstname").style.display = "none";
    firstName.classList.remove(...NameClass);
  }

  //   Last Name

  const lastName = document.getElementById("last-name");
  if (lastName.value === "") {
    document.querySelector(".invalid-lastname").style.display = "inline-block";
    lastName.classList.add(...NameClass);
  } else {
    document.querySelector(".invalid-lastname").style.display = "none";
    lastName.classList.remove(...NameClass);
  }

  //Email
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const classes = ["invalid-icon", "placeholder--red", ".placeholder--notext"];

  if (!re.test(email.value)) {
    document.querySelector(".invalid-email").style.display = "inline-block";
    email.classList.add(...classes);
    email.placeholder = "email@example/com";
  } else {
    document.querySelector(".invalid-email").style.display = "none";
    email.classList.remove(...classes);
  }

  //   password
  const password = document.getElementById("password");
  if (password.value === "") {
    document.querySelector(".invalid-password").style.display = "inline-block";
    password.classList.add(...NameClass);
  } else {
    document.querySelector(".invalid-password").style.display = "none";
    password.classList.remove(...NameClass);
  }
});

// document
//   .querySelector("#first-name")
//   .addEventListener("blur", validateFirstName);

// document.querySelector("#last-name").addEventListener("blur", validateLastName);
// document.querySelector("#email").addEventListener("blur", validateEmail);

// document.querySelector("#password").addEventListener("blur", validatePassword);

// // validate lasteName
// function validateLastName() {
//
// }

// // validateEmail
// function validateEmail() {
//
// }

// // validate Password
// function validatePassword() {
//
// }
