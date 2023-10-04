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
  // MouseEvent(x) PointerEvent(o)
  //   console.log(event);
  // 브라우저의 form 태그 기본 동작(클릭 시 url 주소로 이동) 차단
  //   alert("click");
  // alert 창에 [ok] 클릭 시 기본 동작이 실행됨
}
link.addEventListener("click", handleLinkClick);
