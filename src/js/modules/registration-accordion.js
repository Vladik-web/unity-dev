const  btnClose = document.querySelector('.accordion-down');// button close form 1 user
const formUser1 = document.querySelector('.auth-content__user1'); // form register user 1
const userNewButton = document.querySelector('.auth-content__button-user'); // button form user 2
const formUser2 = document.querySelector('.auth-content__new-user--includes'); // from register user 2
const accordionOpen = document.querySelector('.accordion-open'); // title from user 1
const authBtnDone = document.querySelector('.auth__btn-done'); // button is finish register one user


btnClose.addEventListener('click', () => {
    formUser1.classList.add('active-1');
    userNewButton.classList.add('active-2');
    accordionOpen.style.cursor = 'pointer';
    authBtnDone.classList.add('active-3');
});

userNewButton.addEventListener('click', () => {
    userNewButton.style.display = 'none';
    userNewButton.classList.add('active-1');
    formUser2.classList.add('active-3');
});

accordionOpen.addEventListener('click', () => {
    formUser1.classList.toggle('active-3')
});

