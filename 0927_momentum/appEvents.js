// 참고 사이트
// https://developer.mozilla.org/en-US/docs/Web/API/Element

const title1 = document.getElementById("title");
title1.style.color = "blue";

const title2 = document.querySelector("div.hello:first-child h1");
// const title2 = document.querySelector(".hello h1");
console.log(title2);
console.dir(title2);

// ////////////////////////////////////////////
//   addEventListener <-> removeEventListener
// ////////////////////////////////////////////

function handleTitleClick() {
  // console.log("제목이 클릭됨");
  title2.innerHTML = "제목이 클릭됨요ㅋㅋㅋ";
}
// title2.addEventListener("click", handleTitleClick);
title2.onclick = handleTitleClick;

function handleMouseEnter() {
  title2.style.color = "pink";
}
// title2.addEventListener("mouseenter", handleMouseEnter);
title2.onmouseenter = handleMouseEnter;

function handleMouseLeave() {
  title2.style.color = "blue";
}
// title2.addEventListener("mouseleave", handleMouseLeave);
title2.onmouseleave = handleMouseLeave;

// ////////////////////////////////////////////
//   window
// ////////////////////////////////////////////
// 참고 사이트(Event 부분)
// https://developer.mozilla.org/en-US/docs/Web/API/Element

// 윈도우 창의 크기가 변화할 때 동작
function handleWindowResize() {
  document.body.style.backgroundColor = "beige";
}
window.addEventListener("resize", handleWindowResize);

// [ctrl] + [c] 사용 할 때 동작
function handleWindowCopy() {
  alert("copy");
}
window.addEventListener("copy", handleWindowCopy);

// wifi 연결 X
function handleWindowOffline() {
  alert("SOS no WIFI");
}
window.addEventListener("offline", handleWindowOffline);

// wifi 연결 O
function handleWindowOnline() {
  alert("All Good");
}
window.addEventListener("online", handleWindowOnline);
