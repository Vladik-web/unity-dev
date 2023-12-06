import Calendar from 'color-calendar'

const calendar = () => {
  const scheduleCalendar = document.querySelector('#schedule-calendar')

  if (scheduleCalendar) {
    new Calendar({
      id: '#schedule-calendar',

      theme: 'glass',
      layoutModifiers: ['month-left-align'],
      fontFamilyHeader: 'Roboto, sans-serif',
      fontFamilyWeekdays: 'Roboto, sans-serif',
      fontFamilyBody: 'Roboto, sans-serif',
      startWeekday: 5,
      disableMonthYearPickers: true,
      customMonthValues: [
        'Cічень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Cерпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень'
      ],
      customWeekdayValues: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    })
  }
}

// calendar  form regist 
document.querySelector('.dropdawn__button').addEventListener('click', function () {
  document.querySelector('.dropdawn__list').classList.toggle('dropdawn__list--visible');
  this.classList.add('dropdown__button--active')
});

document.querySelectorAll('.dropdawn__list-item').forEach(function (listItem) {
  listItem.addEventListener('click', function () {
    document.querySelector('.dropdawn__button').innerText = this.innerText;
    document.querySelector('.dropdawn__button').focus();
    document.querySelector('.dropdown__ipnut-hidden').value = this.dataset.value;
    document.querySelector('.dropdawn__list').classList.remove('dropdawn__list--visible')
  })
});

// calendar from register //

//calendar data from register 
document.querySelector('.from__data-btn').addEventListener('click', function () {
  document.querySelector('.from__list').classList.toggle('from__list--visible');
});


document.querySelectorAll('.from__list-item').forEach(function (listData) {
  listData.addEventListener('click', function () {
    document.querySelector('.from__data-btn').innerText = this.innerText;
    document.querySelector('.from__input-hidden').value = this.dataset.value;
    document.querySelector('.from__list').classList.remove('from__list--visible')
  });
});

//calendar data from register //




export default calendar



