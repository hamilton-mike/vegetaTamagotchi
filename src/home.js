// -- DOM Elements --
const carouselBtns = document.querySelectorAll('.carousel-btn');
console.log(carouselBtns);
const enemy = document.querySelector('.current-enemy');
console.log(enemy);

const enemies = ['img/saibamen.jpg', 'img/android19.jpg', '/img/goku.jpg']

carouselBtns.forEach((image, id) => {
    image.addEventListener('click', () => {
        enemy.src = enemies[id]
    })
})
