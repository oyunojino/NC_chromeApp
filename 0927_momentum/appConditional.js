const age = prompt("How old are you?");

// prompt로 받은 값의 데이터타입 => string
console.log(typeof age);
// 만약 age에 문자가 들어온다면 변환x => NaN(Not a Number)
console.log(typeof parseInt(age));

// 한번에 적용가능
const age2 = parseInt(prompt("How old are you?"));
console.log(typeof age2);

if (isNaN(age)) {
  console.log("rewrite");
} else {
  console.log("good");
}
