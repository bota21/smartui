// CONTROL PAGE TABS + HASH SUPPORT (FIXED)

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs_for_smart_home_item");
  const items = document.querySelectorAll(".wrapper_for_smart_home_item");

  if (!tabs.length || !items.length) return;

  function activateTab(tabId) {
    tabs.forEach((t) => t.classList.remove("active"));
    items.forEach((i) => i.classList.remove("active"));

    const tab = document.querySelector(`.tabs_for_smart_home_item[data-tab="${tabId}"]`);

    const item = document.querySelector(`.wrapper_for_smart_home_item[data-tab="${tabId}"]`);

    if (tab && item) {
      tab.classList.add("active");
      item.classList.add("active");
    }
  }

  function activateByHash() {
    if (!location.hash) return false;

    const id = location.hash.replace("#", "");
    const target = document.getElementById(id);

    if (!target) return false;

    const tabId = target.dataset.tab;

    if (!tabId) return false;

    activateTab(tabId);

    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 200);

    return true;
  }

  // =====================
  // Инициализация
  // =====================

  const activated = activateByHash();

  if (!activated) {
    activateTab(tabs[0].dataset.tab);
  }

  // =====================
  // Клики по табам
  // =====================

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.dataset.tab;

      activateTab(tabId);

      // Меняем hash при клике
      const firstItem = document.querySelector(`.wrapper_for_smart_home_item[data-tab="${tabId}"] [id]`);

      if (firstItem) {
        history.replaceState(null, "", `#${firstItem.id}`);
      } else {
        history.replaceState(null, "", location.pathname);
      }
    });
  });

  // =====================
  // Если hash поменялся вручную
  // =====================

  window.addEventListener("hashchange", () => {
    activateByHash();
  });
});
