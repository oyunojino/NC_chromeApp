const player = {
  name: "aaa",
  points: 10,
  fat: true,
  sayHello(otherName) {
    console.log("hello! " + otherName);
  },
  add: function (a, b) {
    console.log(a + b);
  },
};

// object 타입 사용법
console.log(player["name"]);
console.log(player.name);

// object가 const일 때,
// 안에 내용은 수정이 가능하지만 한번에 수정하는 건 불가능
console.log(player);
// player = false;  // error
player.fat = false;
console.log(player);

// object에 새로운 내용 추가하는 방법
console.log(player);
player.lastName = "bbb";
console.log(player);

// object에서 함수 사용하는 방법
player.sayHello("yun");

player.add(10, 5);

// Q : 계산기(+, -, *, /, **)
const calc = {
  plus: (a, b) => {
    console.log(a + b);
  },
  minus: (a, b) => {
    console.log(a - b);
  },
  multi: (a, b) => {
    console.log(a * b);
  },
  divide: (a, b) => {
    console.log(a / b);
  },
  powerOf: (a, b) => {
    console.log(a ** b);
  },
};

calc.plus(2, 5);
calc.minus(2, 5);
calc.multi(2, 5);
calc.divide(2, 5);
calc.powerOf(2, 5);
