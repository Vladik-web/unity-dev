
const registerAccordion = () => {
    const createUser = document.querySelector('.form__new-user'); // button click is open form new user
    const formNewUser = document.querySelector('.auth-content__new-user');  //form regist new user
    const contentBtn = document.querySelector('.auth-content__buttons'); // button click open form new user 
    const form = document.querySelector('.auth__content-form'); // from regist user 
    const title = document.querySelector('.auth-content__title'); // title user form 1 
   

    if (!createUser || !formNewUser || !contentBtn || !form || !title) return

    contentBtn.addEventListener('click', () => { 
        form.classList.add('close');
        createUser.classList.add('open-element')
        
    })

    createUser.addEventListener('click', () => {
        createUser.classList.remove('open-element');
        formNewUser.classList.remove('close');
        contentBtn.classList.add('close')
    })

    title.addEventListener('click', () => {
        form.classList.toggle('close')
    })


}

export default registerAccordion