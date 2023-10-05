const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();

  //   # .padStart(총개수, 채울 문자) / .padEnd(총개수, 채울 문자)
  //   String인 경우에만 사용 가능

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// # 몇 초에 한 번 실행
// setInterval(sayHello, 5000);

// # 타임아웃 후 실행
// setTimeout(sayHello, 5000);

// 시작부터 현재 시간을 보여주기 위해서 작성
getClock();
setInterval(getClock, 1000);
