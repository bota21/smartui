// CONTROL PAGE TABS

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs_for_smart_home_item_1");
  const items = document.querySelectorAll(".wrapper_for_smart_home_item_1");

  if (!tabs.length || !items.length) return;

  // Activate first by default
  tabs[0].classList.add("active");
  items[0].classList.add("active");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.tab;

      // Remove active
      tabs.forEach((t) => t.classList.remove("active"));
      items.forEach((i) => i.classList.remove("active"));

      // Add active
      tab.classList.add("active");
      document.querySelector(`.wrapper_for_smart_home_item_1[data-tab="${id}"]`).classList.add("active");
    });
  });
});
