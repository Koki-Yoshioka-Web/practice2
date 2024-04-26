const header = document.getElementById("header-site-menu");

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  header.classList.toggle("is-show");
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const datetime = document.getElementById("datetime").value;

    // ここでサーバーにデータを送信するなどの処理を実装します
    console.log("名前:", name);
    console.log("メールアドレス:", email);
    console.log("予約日時:", datetime);
    console.log("電話番号:", number);

    // 送信後の処理（例：ユーザーへの確認メッセージなど）
    alert("予約が完了しました！");
    form.reset();
  });
});
