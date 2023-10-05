const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  // console.log(event);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
// console.log(saveUsername);

if (saveUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello ${saveUsername}!`;
}
