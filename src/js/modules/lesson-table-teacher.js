function lessonTabs() {
  const tabs = document.querySelectorAll(".lesson__section__nav-link");
  const tabContents = document.querySelectorAll(".tab-content-item");
  if (!tabs.length || !tabContents.length) return
  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const tabId = tab.getAttribute("data-tab");
      tabContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === tabId) {
          content.classList.add("active");
        }
      });
    });
  });

  tabs[0].click();
}

// Вызов функции для инициализации табов
document.addEventListener("DOMContentLoaded", function() {
  lessonTabs();
});

export default lessonTabs;
