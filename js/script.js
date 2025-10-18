$(() => {
  const logoWrapper = document.querySelector(".main_logo_wrapper");
  const contentWrapper = document.querySelector(".main_content");
  const langWrapper = document.querySelector(".lang-switcher");
  const navigationType = performance.getEntriesByType("navigation")[0]?.type;

  let animationShown = sessionStorage.getItem("logoAnimationShown");

  // 🔄 Если страница перезагружается — сбрасываем флаг
  if (navigationType === "reload") {
    sessionStorage.removeItem("logoAnimationShown");
    animationShown = null;
  }

  if (!animationShown) {
    // ✅ Первый визит — запускаем анимацию и СРАЗУ записываем флаг
    sessionStorage.setItem("logoAnimationShown", "true");

    if (logoWrapper) {
      logoWrapper.classList.add("animate");
      logoWrapper.addEventListener("animationend", () => {
        logoWrapper.style.display = "none";
      });
    }

    if (contentWrapper) {
      contentWrapper.classList.add("animate");
    }
    if (langWrapper) {
      langWrapper.classList.add("animate");
    }
  } else {
    // ✅ Если уже была — не запускаем анимацию вообще
    if (logoWrapper) logoWrapper.style.display = "none";
    if (contentWrapper) contentWrapper.classList.remove("animate");
    if (langWrapper) langWrapper.classList.remove("animate");
  }
});
