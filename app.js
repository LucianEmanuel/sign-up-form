"use strict";

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector(".form-content");

let regexEmail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
let regexName = /^[a-zA-Z ]+$/;

function checkFirstName() {
  return !fname.value === "" || regexName.test(fname.value);
}
function checkLastName() {
  return !lname.value === "" || regexName.test(lname.value);
}
function checkEmail() {
  return !email.value === "" || regexEmail.test(email.value);
}
function checkPassword() {
  return password.value === "" ? false : true;
}

function checkForm() {
  if (!checkFirstName()) {
    fname.parentElement.classList.add("display_error");
  } else {
    fname.parentElement.classList.remove("display_error");
  }
  if (!checkLastName()) {
    lname.parentElement.classList.add("display_error");
  } else {
    lname.parentElement.classList.remove("display_error");
  }
  if (!checkEmail()) {
    email.parentElement.classList.add("display_error");
  } else {
    email.parentElement.classList.remove("display_error");
  }
  if (!checkPassword()) {
    password.parentElement.classList.add("display_error");
  } else {
    password.parentElement.classList.remove("display_error");
  }
  if (checkFirstName() && checkLastName() && checkEmail() && checkPassword()) {
    fname.parentElement.classList.remove("display_error");
    lname.parentElement.classList.remove("display_error");
    email.parentElement.classList.remove("display_error");
    password.parentElement.classList.remove("display_error");
    fname.value = "";
    lname.value = "";
    email.value = "";
    password.value = "";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkForm();
});
