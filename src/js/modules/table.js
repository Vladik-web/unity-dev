import { debounce } from '../utils/debounce.js'
import breakpoints from '../utils/breakpoints.js'
import { enablePageScroll, disablePageScroll } from 'scroll-lock'
const table = () => {
  const tableEl = document.querySelectorAll('.marks-table__table')
  const modal = document.querySelector('.marks-table__lesson')
  const overlay = document.querySelector('.marks-table__overlay')

  const marks = document.querySelectorAll('.table__marks')

  const init = () => {
    if (window.matchMedia(breakpoints.lg).matches) {
      modal.classList.remove('marks-table__lesson--hide')

      marks.forEach(item => {
        const marksLi = item.querySelectorAll('.table__mark')

        marksLi.forEach(li => {
          li.addEventListener('click', () => {
            if (item.classList.contains('marks-table__lesson--show')) {
              modal.classList.remove('marks-table__lesson--show')
              overlay.classList.remove('marks-table__overlay--active')
              enablePageScroll()
            } else {
              modal.classList.add('marks-table__lesson--show')
              overlay.classList.add('marks-table__overlay--active')
              disablePageScroll()
            }
          })
        })
      })

      overlay.addEventListener('click', e => {
        if (!e.target.closest('.marks-table__lesson')) {
          modal.classList.remove('marks-table__lesson--show')
          overlay.classList.remove('marks-table__overlay--active')
          enablePageScroll()
        }
      })
    } else {
      marks.forEach(item => {
        const marksLi = item.querySelectorAll('.table__mark')
        let scroll = 0

        item.addEventListener('scroll', () => (scroll = item.scrollLeft))

        marksLi.forEach(li => {
          li.addEventListener('mouseenter', () => {
            let x = li.getBoundingClientRect().width / 1.5 + li.offsetLeft - scroll
            let y = li.getBoundingClientRect().height / 1.5 + li.offsetTop

            modal.style.top = `${y}px`
            modal.style.left = `${x}px`

            modal.classList.remove('marks-table__lesson--hide')
            modal.classList.add('marks-table__lesson--show')
          })
        })
      })

      tableEl.forEach(item => {
        item.addEventListener('mousemove', e => {
          if (e.target.closest('.marks-table__lesson') || e.target.closest('.table__mark')) {
            // Если мы навели на modal

            modal.classList.add('marks-table__lesson--show')
          } else {
            // Если мы навели не в наши триггеры

            modal.classList.remove('marks-table__lesson--show')
            modal.classList.add('marks-table__lesson--hide')
          }
        })
      })
    }
  }

  init()
  window.addEventListener('resize', debounce(init))
}
export default table
