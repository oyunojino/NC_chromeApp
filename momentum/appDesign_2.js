const h1 = document.querySelector("div.hello:first-child h1");
// const h1 = document.querySelector(".hello h1");
// console.log(h1);
// console.dir(h1);

// ////////////////////////////////////////////////
//  className : 기존 데이터 무시, 무조건 덮어쓰기함
//  classList : 기존 데이터 유지, 내용을 추가함
// ////////////////////////////////////////////////
function handleTitleClick() {
  // h1.className = "active";

  const clickedClass = "clicked";
  // 방법 1 => if ~ else문 사용
  // if (h1.className ===clickedClass) {
  if (h1.classList.contains(clickedClass)) {
    // h1.className = "";
    h1.classList.remove(clickedClass);
  } else {
    // h1.className = clickedClass;
    h1.classList.add(clickedClass);
  }
}
h1.addEventListener("click", handleTitleClick);
