const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  //   const username = loginInput.value;
  //   console.log(username);

  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
