const btnSubject = (btn, list) => {
  if (!btn || !list) return
  btn.addEventListener('click', () => {
    list.classList.toggle('plan__item--close')
  })

}

const buttonElement = document.querySelector('.plan__item-btn');
const listElement = document.querySelector('.plan__item-list');

btnSubject(buttonElement, listElement);

export default btnSubject
