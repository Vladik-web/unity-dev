// function initializeTabs(tabClass, contentClass) {
//   const tabs = document.querySelectorAll(`.${tabClass}`)
//   const tabContents = document.querySelectorAll(`.${contentClass}`)
//   if (!tabs.length || !tabContents.length) return

//   tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//       tabs.forEach(t => t.classList.remove('active'))
//       tab.classList.add('active')

//       tabContents.forEach(content => content.classList.remove('active'))
//       const tabId = tab.getAttribute('data-tab')
//       document.getElementById(tabId).classList.add('active')
//     })
//   })
//   tabs[0].click()
// }


// initializeTabs('tab', 'tab-content')

function initializeTabs() {
  const bindTabs = (tabClass, contentClass) => {
    const tabs = document.querySelectorAll(`.${tabClass}`)
    const tabContents = document.querySelectorAll(`.${contentClass}`)

    if (!tabs.length || !tabContents.length) return

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'))
        tab.classList.add('active')

        tabContents.forEach(c => c.classList.remove('active'))
        tabContents[index].classList.add('active')
      })
    })
    tabs[0].click()
  }
  bindTabs('tab', 'tab-content')
}

export default initializeTabs
