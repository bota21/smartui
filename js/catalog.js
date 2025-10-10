// $(() => {
//   // Переключение основных табов
//   $(".wrapper_for_smart_home_content").hide();
//   $('.wrapper_for_smart_home_content[data-tab="0"]').show();
//   $('.smart_home_tabs[data-tab="0"]').addClass("tab_active");
//   $(".smart_home_tabs").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".smart_home_tabs").removeClass("tab_active");
//     $(this).addClass("tab_active");
//     $(".wrapper_for_smart_home_content").hide();
//     $('.wrapper_for_smart_home_content[data-tab="' + tabIndex + '"]').fadeIn();
//   });
//   // Переключение табов для управление
//   $(".wrapper_for_smart_home_item_1").hide();
//   $('.wrapper_for_smart_home_item_1[data-tab="00"]').show();
//   $('.tabs_for_smart_home_item_1[data-tab="00"]').addClass("tab_item_active");
//   $(".tabs_for_smart_home_item_1").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".tabs_for_smart_home_item_1").removeClass("tab_item_active");
//     $(this).addClass("tab_item_active");
//     $(".wrapper_for_smart_home_item_1").hide();
//     $('.wrapper_for_smart_home_item_1[data-tab="' + tabIndex + '"]').fadeIn();
//   });
//   // Переключение табов для датчиков
//   $(".wrapper_for_smart_home_item_2").hide();
//   $('.wrapper_for_smart_home_item_2[data-tab="10"]').show();
//   $('.tabs_for_smart_home_item_2[data-tab="10"]').addClass("tab_item_active");
//   $(".tabs_for_smart_home_item_2").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".tabs_for_smart_home_item_2").removeClass("tab_item_active");
//     $(this).addClass("tab_item_active");
//     $(".wrapper_for_smart_home_item_2").hide();
//     $('.wrapper_for_smart_home_item_2[data-tab="' + tabIndex + '"]').fadeIn();
//   });
//   // Переключение табов для выключателей, розеток
//   $(".wrapper_for_smart_home_item_3").hide();
//   $('.wrapper_for_smart_home_item_3[data-tab="20"]').show();
//   $('.tabs_for_smart_home_item_3[data-tab="20"]').addClass("tab_item_active");
//   $(".tabs_for_smart_home_item_3").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".tabs_for_smart_home_item_3").removeClass("tab_item_active");
//     $(this).addClass("tab_item_active");
//     $(".wrapper_for_smart_home_item_3").hide();
//     $('.wrapper_for_smart_home_item_3[data-tab="' + tabIndex + '"]').fadeIn();
//   });
//   // Переключение табов для освещения
//   $(".wrapper_for_smart_home_item_4").hide();
//   $('.wrapper_for_smart_home_item_4[data-tab="30"]').show();
//   $('.tabs_for_smart_home_item_4[data-tab="30"]').addClass("tab_item_active");
//   $(".tabs_for_smart_home_item_4").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".tabs_for_smart_home_item_4").removeClass("tab_item_active");
//     $(this).addClass("tab_item_active");
//     $(".wrapper_for_smart_home_item_4").hide();
//     $('.wrapper_for_smart_home_item_4[data-tab="' + tabIndex + '"]').fadeIn();
//   });
//   // Переключение табов для карниз
//   $(".wrapper_for_smart_home_item_5").hide();
//   $('.wrapper_for_smart_home_item_5[data-tab="40"]').show();
//   $('.tabs_for_smart_home_item_5[data-tab="40"]').addClass("tab_item_active");
//   $(".tabs_for_smart_home_item_5").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".tabs_for_smart_home_item_5").removeClass("tab_item_active");
//     $(this).addClass("tab_item_active");
//     $(".wrapper_for_smart_home_item_5").hide();
//     $('.wrapper_for_smart_home_item_5[data-tab="' + tabIndex + '"]').fadeIn();
//   });
//   // Переключение табов для сантехника
//   $(".wrapper_for_smart_home_item_6").hide();
//   $('.wrapper_for_smart_home_item_6[data-tab="50"]').show();
//   $('.tabs_for_smart_home_item_6[data-tab="50"]').addClass("tab_item_active");
//   $(".tabs_for_smart_home_item_6").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".tabs_for_smart_home_item_6").removeClass("tab_item_active");
//     $(this).addClass("tab_item_active");
//     $(".wrapper_for_smart_home_item_6").hide();
//     $('.wrapper_for_smart_home_item_6[data-tab="' + tabIndex + '"]').fadeIn();
//   });
//   // Переключение табов для техника
//   $(".wrapper_for_smart_home_item_7").hide();
//   $('.wrapper_for_smart_home_item_7[data-tab="60"]').show();
//   $('.tabs_for_smart_home_item_7[data-tab="60"]').addClass("tab_item_active");
//   $(".tabs_for_smart_home_item_7").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".tabs_for_smart_home_item_7").removeClass("tab_item_active");
//     $(this).addClass("tab_item_active");
//     $(".wrapper_for_smart_home_item_7").hide();
//     $('.wrapper_for_smart_home_item_7[data-tab="' + tabIndex + '"]').fadeIn();
//   });
//   // Переключение табов для камера
//   $(".wrapper_for_smart_home_item_8").hide();
//   $('.wrapper_for_smart_home_item_8[data-tab="70"]').show();
//   $('.tabs_for_smart_home_item_8[data-tab="70"]').addClass("tab_item_active");
//   $(".tabs_for_smart_home_item_8").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".tabs_for_smart_home_item_8").removeClass("tab_item_active");
//     $(this).addClass("tab_item_active");
//     $(".wrapper_for_smart_home_item_8").hide();
//     $('.wrapper_for_smart_home_item_8[data-tab="' + tabIndex + '"]').fadeIn();
//   });
//   // Переключение табов для для дверей и окон
//   $(".wrapper_for_smart_home_item_9").hide();
//   $('.wrapper_for_smart_home_item_9[data-tab="80"]').show();
//   $('.tabs_for_smart_home_item_9[data-tab="80"]').addClass("tab_item_active");
//   $(".tabs_for_smart_home_item_9").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".tabs_for_smart_home_item_9").removeClass("tab_item_active");
//     $(this).addClass("tab_item_active");
//     $(".wrapper_for_smart_home_item_9").hide();
//     $('.wrapper_for_smart_home_item_9[data-tab="' + tabIndex + '"]').fadeIn();
//   });
//   // Переключение табов для ворота
//   $(".wrapper_for_smart_home_item_10").hide();
//   $('.wrapper_for_smart_home_item_10[data-tab="90"]').show();
//   $('.tabs_for_smart_home_item_10[data-tab="90"]').addClass("tab_item_active");
//   $(".tabs_for_smart_home_item_10").click(function () {
//     const tabIndex = $(this).data("tab");
//     $(".tabs_for_smart_home_item_10").removeClass("tab_item_active");
//     $(this).addClass("tab_item_active");
//     $(".wrapper_for_smart_home_item_10").hide();
//     $('.wrapper_for_smart_home_item_10[data-tab="' + tabIndex + '"]').fadeIn();
//   });

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
