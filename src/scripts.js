const nav = document.querySelector('.nav');
const ham = document.querySelector('.hamburger')

ham.addEventListener("click", () => {
    nav.classList.toggle('nav__open');
    ham.classList.toggle('hamburger__open');
});

nav.addEventListener("click", () => {
    nav.classList.remove('nav__open');
    ham.classList.remove('hamburger__open');
});

