const  btnClose = document.querySelector('.accordion-down');// button close form 1 user
const formUser1 = document.querySelector('.auth-content__user1'); // form register user 1
const userNewButton = document.querySelector('.auth-content__button-user'); // button form user 2
const formUser2 = document.querySelector('.auth-content__new-user--includes'); // from register user 2
const accordionOpen = document.querySelector('.accordion-open'); // title from user 1

btnClose.addEventListener('click', () => {
    formUser1.classList.add('active-1');
    userNewButton.classList.add('active-2');

});

userNewButton.addEventListener('click', () => {
    userNewButton.classList.add('active-1');
    formUser2.classList.add('active-3');
});

accordionOpen.addEventListener('click', () => {
    formUser1.classList.toggle('active-3')
});