const header = document.getElementById("header-site-menu");

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  header.classList.toggle("is-show");
});

let textElement = document.getElementById("fadeInText");
textElement.style.opacity = 0;

function fadeIn(element) {
  let opacity = 0;
  let timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 100);
}

fadeIn(textElement);

document.addEventListener("DOMContentLoaded", function () {
  let hiddenElements = document.querySelectorAll(".hidden");

  function showOnScroll() {
    hiddenElements.forEach(function (element) {
      let elementPosition = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (elementPosition < windowHeight * 0.7) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  showOnScroll(); // 初期状態での要素の表示を確認するために呼び出し
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "mmm41435970.jpeg",
    "qpTQOs9pGR56h4k1713722195_1713722203.jpeg",
    "RtppVaqSBgjwzwx1713722106_1713722118.jpeg",
  ];
  let currentIndex = 0;

  function changeBackground() {
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  // 初回の背景画像の設定
  changeBackground();

  // 3秒ごとに背景画像を変更
  setInterval(changeBackground, 3000);
});
