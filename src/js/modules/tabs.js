import breakpoints from '../utils/breakpoints'
const tabs = () => {
  const bindTabs = (buttons, content, activeClass) => {
    const tabsElements = document.querySelectorAll(buttons)
    const contentElements = document.querySelectorAll(content)

    if (!tabsElements.length && !contentElements.length) return null

    const clearContent = () => {
      contentElements.forEach(cont => {
        cont.style.display = 'none'
      })
    }

    const setActiveContent = value => {
      contentElements.forEach(item => {
        if (item.dataset.tabContent === value) {
          item.style.display = 'block'
        }
      })
    }

    const setActiveTab = tab => {
      tabsElements.forEach(item => item.classList.remove(activeClass))

      tab.classList.add(activeClass)
    }

    tabsElements.forEach(tab => {
      if (tab.classList.contains(activeClass)) {
        clearContent()
        setActiveContent(tab.dataset.tab)
        setActiveTab(tab)
      }
      tab.addEventListener('click', () => {
        clearContent()
        setActiveContent(tab.dataset.tab)
        setActiveTab(tab)
      })
    })
  }

  const resetContent = items => {
    const itemEls = document.querySelectorAll(items)
    if (!itemEls.length) return null

    itemEls.forEach(item => (item.style.display = 'unset'))
  }

  const lg = () => {
    if (window.matchMedia(breakpoints.lg).matches) {
      bindTabs('#main-tab .content-tabs__btn', '#main-content [data-tab-content]', 'content-tabs__btn--active')
    } else {
      resetContent('#main-content [data-tab-content]')
    }
  }

  lg()
  window.addEventListener('resize', lg)

  bindTabs(
    '.lesson-section__content-tabs .content-tabs__btn',
    '.lesson-section__blocks [data-tab-content]',
    'content-tabs__btn--active'
  )
}

export default tabs
