const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  //   const username = loginInput.value;
  //   console.log(username);

  event.preventDefault(); // 브라우저의 기본 동작 차단
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
