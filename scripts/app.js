let btn = document.querySelector('button');
let menu = document.querySelector('ul');

const images = []

btn.addEventListener('click', e => {
    menu.classList.toggle('open');
    btn.classList.toggle('is-active');
})

function slideShow() {
    images.forEach(image => {
        setInterval(() => {image}, 100)
    });
}