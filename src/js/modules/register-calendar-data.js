

const registrationCalendarData = () => {
    const fromDataBtn = document.querySelector('.from__data-btn');
    const fromList = document.querySelector('.from__list');
    const fromListItems = document.querySelectorAll('.from__list-item'); // Изменим на querySelectorAll
    const fromInputHidden = document.querySelector('.from__input-hidden');

    if (!fromDataBtn || !fromList || !fromListItems || !fromInputHidden) return;

    fromDataBtn.addEventListener('click', () => {
        fromList.classList.toggle('from__list--visible');
    });

    fromListItems.forEach(function (listData) {
        listData.addEventListener('click', () => {
            fromDataBtn.innerText = listData.innerText;
            fromInputHidden.value = listData.dataset.value; // Изменим на listData.dataset.value
            fromList.classList.remove('from__list--visible');
        });
    });
};

export default registrationCalendarData;





