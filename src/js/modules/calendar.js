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
export default calendar
