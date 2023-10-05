const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// # 몇 초에 한 번 실행
// setInterval(sayHello, 5000);

// # 타임아웃 후 실행
// setTimeout(sayHello, 5000);

// 시작부터 현재 시간을 보여주기 위해서 작성
getClock();
setInterval(getClock, 1000);
