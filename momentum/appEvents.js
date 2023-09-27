// 참고 사이트
// https://developer.mozilla.org/en-US/docs/Web/API/Element

const title1 = document.getElementById("title");
title1.style.color = "blue";

const title2 = document.querySelector("div.hello:first-child h1");
// const title2 = document.querySelector(".hello h1");
console.log(title2);
console.dir(title2);

function handleTitleClick() {
  // console.log("제목이 클릭됨");
  title2.innerHTML = "제목이 클릭됨요ㅋㅋㅋ";
}
title2.addEventListener("click", handleTitleClick);

function handleMouseEnter() {
  title2.style.color = "pink";
}
title2.addEventListener("mouseenter", handleMouseEnter);

function handleMouseLeave() {
  title2.style.color = "blue";
}
title2.addEventListener("mouseleave", handleMouseLeave);
