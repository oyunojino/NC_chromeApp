const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  // 브라우저의 form 태그 기본 동작(submit 후 새로고침) 차단
  console.log(event);
}
loginForm.addEventListener("submit", onLoginSubmit);

function handleLinkClick(event) {
  event.preventDefault();
}
link.addEventListener("click", handleLinkClick);
