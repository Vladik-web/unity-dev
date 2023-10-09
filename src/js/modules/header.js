import { disablePageScroll, enablePageScroll, addScrollableSelector } from 'scroll-lock'
import breakpoints from '../utils/breakpoints'

const header = () => {
  const headerEl = document.querySelector('.header')

  const headerAvatar = headerEl?.querySelector('#header-avatar')
  const headerClose = headerEl?.querySelector('#header-close')
  const headerNotificationsBlock = headerEl?.querySelector('.header__notifications + .header__wrapper')
  const headerNotificationsBtn = headerEl?.querySelector('.header__notifications')
  const headerNotificationsBtnClose = headerEl?.querySelector('.notifications__close')

  if (headerNotificationsBlock && headerNotificationsBtn) {
    headerNotificationsBtn.addEventListener('click', () => {
      headerNotificationsBlock.classList.toggle('header__wrapper--active')
    })

    headerNotificationsBtnClose.addEventListener('click', () => {
      headerNotificationsBlock.classList.remove('header__wrapper--active')
    })

    document.addEventListener('click', event => {
      const isClickInside =
        headerNotificationsBlock.contains(event.target) || headerNotificationsBtn.contains(event.target)

      if (!isClickInside) {
        headerNotificationsBlock.classList.remove('header__wrapper--active')
      }
    })
  }

  if (!headerEl) return null

  if (headerAvatar && headerClose) {
    const headerUserInfo = headerAvatar.nextElementSibling

    headerAvatar.addEventListener('click', () => {
      if (!headerUserInfo.classList.contains('header__wrapper--active')) {
        headerUserInfo.classList.add('header__wrapper--active')
        if (window.matchMedia(breakpoints.lg).matches) {
          disablePageScroll()
          addScrollableSelector('.header__info')
        }
      }
    })

    headerClose.addEventListener('click', () => {
      headerUserInfo.classList.remove('header__wrapper--active')

      if (window.matchMedia(breakpoints.lg).matches) {
        enablePageScroll()
      }
    })

    document.addEventListener('click', event => {
      const isClickInside = headerUserInfo.contains(event.target) || headerAvatar.contains(event.target)

      if (!isClickInside) {
        headerUserInfo.classList.remove('header__wrapper--active')
      }
    })
  }
  
  
}
const inputs = document.querySelectorAll('input[type="radio"]');
const textElements = document.querySelectorAll('.header__children-span');

// Обработчик клика на инпут
inputs.forEach((input, index) => {
    input.addEventListener('click', () => {
        // Сбрасываем цвет для всех текстовых элементов
        textElements.forEach((textElement) => {
            textElement.style.color = '#828282'; // Восстанавливаем исходный цвет текста
        });

        // Устанавливаем цвет для выбранного текстового элемента
        textElements[index].style.color = '#7D98F6'; // Задаем новый цвет текста
    });
});

export default header
