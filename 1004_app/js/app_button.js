const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
  //   console.dir(loginInput);
  //   console.log("hello " + loginInput.value);

  const username = loginInput.value;
  //   방법 1 ) 직접 지정
  //   if (username === "") {
  //     console.log("Please write your name");
  //   } else if (username.length <= 15) {
  //     console.log("Your name is too long.");
  //   } else {
  //     console.log("hello", loginInput.value);
  //   }

  //   방법 2 ) 브라우저에서 유효성 검사 지원
  //   -> form 태그 내 해당 input 태그가 존재할 때
  //   -> form 태그 내 button 태그, input:submit 태그, [enter]를 탭하면 자동 제출됨
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
