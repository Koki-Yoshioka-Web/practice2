const header = document.getElementById("header-site-menu");

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  header.classList.toggle("is-show");
});

document.addEventListener("DOMContentLoaded", function () {
  let hiddenElements = document.querySelectorAll(".hidden");

  function showOnScroll() {
    hiddenElements.forEach(function (element) {
      let elementPosition = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (elementPosition < windowHeight * 10) {
        element.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", showOnScroll);
  showOnScroll(); // 初期状態での要素の表示を確認するために呼び出し
});
