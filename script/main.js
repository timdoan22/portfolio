console.log("working")

const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector('.nav__wrapper__ul');


// add click event on toggle
toggle.addEventListener('click', () => {
    ul.classList.toggle('nav__active');
});