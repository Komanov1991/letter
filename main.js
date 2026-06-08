let container = document.querySelector(".heart-container");

function createHeart() {
  let heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 50);

let img = document.querySelector(".container_sum_img");

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = (e.clientX / window.innerWidth - 0.5) * 10;
  targetY = (e.clientY / window.innerHeight - 0.5) * 10;
});

function animate() {
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  img.style.transform = `
    perspective(800px)
    rotateY(${currentX}deg)
    rotateX(${-currentY}deg)
  `;

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("click", (e) => {
  let ripple = document.createElement("div");
  ripple.classList.add("ripple");

  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";

  document.body.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
});

let btn = document.querySelector(".welcom");
let leftHand = document.querySelector(".img_left");
let rightHand = document.querySelector(".img_right");
let letter = document.querySelector(".letter");

btn.addEventListener("click", () => {
  btn.disabled = true;

  // lấy đà
  leftHand.classList.add("left-away");
  rightHand.classList.add("right-away");

  // lao vào
  setTimeout(() => {
    leftHand.classList.remove("left-away");
    rightHand.classList.remove("right-away");

    leftHand.classList.add("left-touch");
    rightHand.classList.add("right-touch");
  }, 1000);

  // chạm nhau -> flash
  setTimeout(() => {
    let flash = document.createElement("div");

    flash.classList.add("flash");

    document.body.appendChild(flash);

    setTimeout(() => {
      flash.remove();
    }, 1000);

    letter.classList.add("show");
  }, 1800);

  // trở về vị trí cũ
  setTimeout(() => {
    leftHand.classList.remove("left-touch");
    rightHand.classList.remove("right-touch");
  }, 3000);

  setTimeout(() => {
    btn.disabled = false;
  }, 4000);
});

// letter

const wishes = [
  ["Thi thật tốt nhé cô 2 🎓", "Chúc chị đạt được nguyện vọng mong muốn ✨"],

  ["Gửi cô 2 kính mến của em...", "🧑‍💻"],

  [
    "Chúc chị thật bình tĩnh trong phòng thi ❤️",
    "Những gì chị đã cố gắng sẽ được đền đáp ✨",
  ],

  ["Đừng áp lực quá nhé 🍀", "Hãy tin vào bản thân mình 🌷"],

  ["Dù kết quả thế nào", "Em vẫn luôn tự hào về chị ❤️"],

  // ["Thi thật tốt nhé cô 2 🎓", "Chúc chị đạt được nguyện vọng mong muốn ✨"],
];

const message = document.querySelector(".message");

let index = 0;

function showWish() {
  message.style.opacity = 0;

  setTimeout(() => {
    message.innerHTML = `
      <p>${wishes[index][0]}</p>
      <p>${wishes[index][1]}</p>
    `;

    message.style.opacity = 1;

    index++;

    if (index >= wishes.length) {
      index = 0;
    }
  }, 500);
}

showWish();

setInterval(showWish, 4000);

const coverTop = document.querySelector(".cover-top");
const paper = document.querySelector(".paper");

letter.addEventListener("click", () => {
  coverTop.classList.add("open");

  setTimeout(() => {
    paper.classList.add("show");
  }, 500);
});
