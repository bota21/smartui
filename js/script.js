$(document).ready(function () {
  //Бургер меню
  const burger = document.getElementById("burgerBtn");
  const menu = document.getElementById("mobileMenu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
      burger.classList.remove("active");
      menu.classList.remove("active");
    }
  });

  // Меню связаться
  document.querySelector(".floating-btn").addEventListener("click", function () {
    const menu = document.querySelector(".floating-menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });

  //   Проверка поля номер телефона в заявке
  const phoneInput = document.querySelector('input[name="phone"]');
  phoneInput.addEventListener("input", function (e) {
    let x = e.target.value.replace(/\D/g, "").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value =
      "+7 " + (x[2] ? x[2] : "") + " " + (x[3] ? x[3] : "") + " " + (x[4] ? x[4] : "") + " " + (x[5] ? x[5] : "");
  });
});
