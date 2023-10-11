// calendar register month
const registrationCalendarMonth = () => {
  const dropdawnButton = document.querySelector('.dropdawn__button');
  const dropdawnList = document.querySelector('.dropdawn__list');
  const dropdawnListItem = document.querySelectorAll('.dropdawn__list-item');
  const dropdownIpnutHidden = document.querySelector('.dropdown__ipnut-hidden');

  if (!dropdawnButton || !dropdawnList || !dropdawnListItem || !dropdownIpnutHidden) return
  dropdawnButton.addEventListener('click', () => {
    dropdawnList.classList.toggle('dropdawn__list--visible');
    dropdawnButton.classList.add('dropdown__button--active');
  });
  dropdawnListItem.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      dropdawnButton.innerText = listItem.innerText; // Исправлено здесь
      dropdawnButton.focus();
      dropdownIpnutHidden.value = dropdownIpnutHidden.dataset.value;
      dropdawnList.classList.remove('dropdawn__list--visible')
    })
  });

}


export default registrationCalendarMonth

