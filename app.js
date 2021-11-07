const captcha = document.querySelector('.form-wrap__box-header__code');
const reloadBtn = document.querySelector('.form-wrap__box-area__reload');
const inputfield = document.querySelector('.form-wrap__box-area__input');
const checkBtn = document.querySelector('.form-wrap__button');
const errorText = document.querySelector('.form-wrap__box-text')

let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


const getCaptcha = () => {
    for (let i = 0; i <= 5; i++) {
        const randomChar = letters[Math.floor(Math.random() * letters.length)]
        captcha.innerText += `${randomChar}`
    }
}

getCaptcha();
reloadBtn.addEventListener('click', () => {
    captcha.innerText = '';
    getCaptcha();
})

checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    errorText.style.display = 'block'
    let inputVal = inputfield.value.split('').join('');
    (inputVal === captcha.innerText) ? alert('Okkkkkkkkk') : alert('Noooooooooo')
        
})