$(document).ready(function () {
  // --- 1. Определяем язык при первом входе ---
  let savedLang = localStorage.getItem("lang");

  if (!savedLang) {
    const browserLang = navigator.language.slice(0, 2);
    if (["ru", "en", "kz"].includes(browserLang)) {
      savedLang = browserLang;
    } else {
      savedLang = "ru"; // язык по умолчанию
    }
    localStorage.setItem("lang", savedLang);
  }

  // --- 2. Устанавливаем язык при загрузке страницы ---
  setLanguage(savedLang);
  highlightActiveButton(savedLang);

  // --- 3. Обработка клика по кнопке языка ---
  $(".lang-switcher-button").on("click", function () {
    const selectedLang = $(this).data("lang");
    setLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);
    highlightActiveButton(selectedLang);
  });

  // --- 4. Функция переключения языка ---
  function setLanguage(lang) {
    $("[data-i18n]").each(function () {
      const key = $(this).data("i18n");
      if (translations[lang] && translations[lang][key]) {
        $(this).text(translations[lang][key]);
      }
    });

    // Меняем lang в <html>
    $("html").attr("lang", lang);
  }

  // --- 5. Подсветка активной кнопки ---
  function highlightActiveButton(lang) {
    $(".lang-switcher-button").removeClass("active");
    $(`.lang-switcher-button[data-lang='${lang}']`).addClass("active");
  }
});
