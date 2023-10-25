function initializeTabs() {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
    if(!tabs.length) return
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
  
        tabContents.forEach((content) => content.classList.remove("active"));
        const tabId = tab.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
      });
    });
  
    // По умолчанию активируем первый таб
    tabs[0].click();
  }
  
  // Вызов функции для инициализации табов
  initializeTabs();


export default initializeTabs