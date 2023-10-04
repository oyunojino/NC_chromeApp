const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
  //   console.dir(loginInput);
  //   console.log("hello " + loginInput.value);

  const username = loginInput.value;
  if (username === "") {
    console.log("Please write your name");
  } else if (username.length <= 15) {
    console.log("Your name is too long.");
  } else {
    console.log("hello", loginInput.value);
  }
}

loginButton.addEventListener("click", onLoginBtnClick);
