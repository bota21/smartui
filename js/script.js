$(document).ready(function () {
  // 1.Бургер меню
  const burger = document.getElementById("burgerBtn");
  const menu = document.getElementById("mobileMenu");
  const content = document.getElementById("main_content");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    content.classList.toggle("main_content_hide");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
      burger.classList.remove("active");
      menu.classList.remove("active");
      content.classList.toggle("main_content_hide");
    }
  });

  // 2.Меню связаться
  document.querySelector(".floating-btn").addEventListener("click", function () {
    const menu = document.querySelector(".floating-menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });

  //   3.Проверка поля номер телефона в заявке
  const phoneInput = document.querySelector('input[name="phone"]');

  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    // если пользователь всё стёр — оставляем поле пустым
    if (value.length === 0) {
      e.target.value = "";
      return;
    }

    // если начали ввод без 7 — считаем, что это номер KZ
    if (value[0] === "8") value = "7" + value.slice(1);
    if (value[0] !== "7") value = "7" + value;

    const x = value.match(/(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    e.target.value =
      "+7" + (x[2] ? " " + x[2] : "") + (x[3] ? " " + x[3] : "") + (x[4] ? " " + x[4] : "") + (x[5] ? " " + x[5] : "");
  });
});
