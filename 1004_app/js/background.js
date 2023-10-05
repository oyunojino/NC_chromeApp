const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 1. img태그 생성
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
// 2. img태그 body 안으로 삽입
document.body.appendChild(bgImage);

console.log(bgImage);
