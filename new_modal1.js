const refs = {
    openModalBtn : document.querySelector('[data-action="open-modal"]'),
    closeModalBtn : document.querySelector('[data-action="close-modal"]'),
    sendDataBtn : document.querySelector('[data-action="send-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
    login: document.querySelector('[type="text"]'),
    mail: document.querySelector('[type="mail"]'),
    password: document.querySelector('[type="password"]'),
    checkbox: document.querySelector('[type="checkbox"]'),
    form: document.querySelector('.formBox'),
}
refs.openModalBtn.addEventListener('click', onOpenModal)
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.backdrop.addEventListener('click', onBackDropClick)
window.addEventListener('keydown', onEscapeKeypress)


function onOpenModal(event) {
    document.body.classList.add('show-modal')
}
function onCloseModal(event) {
    document.body.classList.remove('show-modal')
}
function onBackDropClick(event){
    if(event.currentTarget === event.target) {
        console.log('Клікнули по бекдропу');
        onCloseModal()
    }
}
function onEscapeKeypress(event) {
    const ESC_KEY_CODE = 'Escape'
    const isEscKey = event.code === ESC_KEY_CODE
    if(isEscKey){
        onCloseModal()
    }
}
refs.checkbox.addEventListener('change', onLicenseChange)
function onLicenseChange(event) {
    console.log(event.currentTarget.checked);
    if(event.currentTarget.checked){
       return refs.sendDataBtn.disabled = false
    }
    // refs.sendDataBtn.disabled = !event.currentTarget.checked
}
refs.sendDataBtn.addEventListener('click', onFormSubmit)
function onFormSubmit(event) {
    console.log(event);
    event.preventDefault();
    const formData = new FormData(refs.form)
    formData.forEach((value,name)=>{
        console.log('name:', name);
        console.log('value:', value);
    })
    clearInput()
}
function clearInput(event) {
    refs.login.value = '';
    refs.mail.value = '';
    refs.password.value = '';
    refs.checkbox.checked = false;
}