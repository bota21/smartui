$(function () {
  // Карта групп внутренних табов к главному табу
  const groupToMainTab = {
    1: 0, // Управление — группа 1
    2: 1, // Например, датчики — группа 2
    3: 2, // и т.д.
    4: 3,
    5: 4,
    6: 5,
    7: 6,
    8: 7, // Камера — группа 8 (главный таб с data-tab="7")
    9: 8,
    10: 9,
  };

  // Функция инициализации главных табов
  function initMainTabs(tabIndex) {
    $(".smart_home_tabs").removeClass("tab_active");
    $('.smart_home_tabs[data-tab="' + tabIndex + '"]').addClass("tab_active");
    $(".wrapper_for_smart_home_content").hide();
    $('.wrapper_for_smart_home_content[data-tab="' + tabIndex + '"]').fadeIn();
  }

  // Функция инициализации внутренних табов группы
  function initTabGroup(groupNumber, tabIndex) {
    $(".tabs_for_smart_home_item_" + groupNumber).removeClass("tab_item_active");
    $(".tabs_for_smart_home_item_" + groupNumber + '[data-tab="' + tabIndex + '"]').addClass("tab_item_active");

    $(".wrapper_for_smart_home_item_" + groupNumber).hide();
    $(".wrapper_for_smart_home_item_" + groupNumber + '[data-tab="' + tabIndex + '"]').fadeIn();
  }

  // Инициализация — показываем первый главный таб и первый внутренний таб каждой группы
  const firstMainTab = $(".smart_home_tabs").first().data("tab");
  initMainTabs(firstMainTab);

  for (let i = 1; i <= 10; i++) {
    const $firstTab = $(".tabs_for_smart_home_item_" + i).first();
    if ($firstTab.length) {
      const firstTabIndex = $firstTab.data("tab");
      initTabGroup(i, firstTabIndex);
    }
  }

  // Обработчик клика по главным табам
  $(".smart_home_tabs").click(function () {
    const tabIndex = $(this).data("tab");
    initMainTabs(tabIndex);
  });

  // Универсальный обработчик клика по внутренним табам
  $(document).on("click", '[class^="tabs_for_smart_home_item_"]', function () {
    const $clickedTab = $(this);
    const classes = $clickedTab.attr("class").split(/\s+/);
    let groupNumber = null;

    for (let cls of classes) {
      const match = cls.match(/^tabs_for_smart_home_item_(\d+)$/);
      if (match) {
        groupNumber = match[1];
        break;
      }
    }
    if (!groupNumber) return;

    const tabIndex = $clickedTab.data("tab");

    // Активируем главный таб, к которому относится группа внутренних табов
    const mainTabIndex = groupToMainTab[groupNumber] ?? firstMainTab;
    initMainTabs(mainTabIndex);

    initTabGroup(groupNumber, tabIndex);
  });

  // Обработка хеша в URL
  const hash = window.location.hash.substring(1);
  if (hash) {
    const $targetTab = $("#" + hash);
    if ($targetTab.length) {
      const classes = $targetTab.attr("class").split(/\s+/);
      let groupNumber = null;
      for (let cls of classes) {
        const match = cls.match(/^tabs_for_smart_home_item_(\d+)$/);
        if (match) {
          groupNumber = match[1];
          break;
        }
      }
      if (groupNumber) {
        const tabIndex = $targetTab.data("tab");
        const mainTabIndex = groupToMainTab[groupNumber] ?? firstMainTab;

        initMainTabs(mainTabIndex);
        initTabGroup(groupNumber, tabIndex);

        setTimeout(() => {
          $([document.documentElement, document.body]).animate(
            {
              scrollTop: $targetTab.offset().top - 100,
            },
            20
          );
        }, 20);
      }
    }
  }
});
