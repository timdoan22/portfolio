console.log("working")

const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector('.nav__wrapper__ul');
document.querySelector('button').addEventListener('click', formRedirect);


// add click event on toggle
toggle.addEventListener('click', () => {
    ul.classList.toggle('nav__active');
});

function formRedirect() {
    window.location.href ="#";
}