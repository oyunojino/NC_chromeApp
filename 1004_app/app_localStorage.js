const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  // 브라우저의 form 태그 기본 동작(submit 후 새로고침) 차단
  console.log(event);

  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);

  greeting.innerHTML = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  localStorage.setItem("username", username);
}
loginForm.addEventListener("submit", onLoginSubmit);

// # Console 창에서 DB 내용 추가
// localStorage.setItem("username", "yun")
// # Console 창에서 DB 내용 검색
// localStorage.getItem("username")
