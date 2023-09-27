// /////////////////////////////////
//          id로 찾는 방법
// /////////////////////////////////
const title = document.getElementById("title");
const title1 = document.querySelector("#title");
console.log(title == title1); // true

// console.dir(document)로 title의 속성 확인 가능
title.innerHTML = "제목";
console.log(title.className);

// /////////////////////////////////
//         class로 찾는 방법
// /////////////////////////////////
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

// /////////////////////////////////
//     특정 태그 전체를 찾는 방법
// /////////////////////////////////
const h1Tag = document.getElementsByTagName("h1");

// /////////////////////////////////
//    특정 태그의 내용를 찾는 방법
// /////////////////////////////////
// => 사용 빈도 수가 높음
// [ .querySelector ]은 여러개가 있더라도 첫번째 1개만 출력됨(:first-child랑 유사)
const h1Content1 = document.querySelector(".hello h1");
console.log(h1Content1); // <h1>hello 안에 있담!</h1>
const h1Content2 = document.querySelector(".hello:first-child h1");
console.log(h1Content2); // null

// [ .querySelectorAll ]은 모든 내용이 출력됨
const h1Content3 = document.querySelectorAll(".hello h1");
console.log(h1Content3); // > NodeList(5) [h1, h1, h1, h1, h1]
