function menuAdaptive(btn, block, conent ) {
  if(!btn || !conent || !block) return
    if (window.innerWidth === 997) {
      btn.addEventListener('click', () => {
        block.classList.toggle('hide')
      })
    }
}
const btn = document.querySelector('.header__element--btn');
const block = document.querySelector('.modal__wrapper');

 menuAdaptive(btn, block)

 export default menuAdaptive
