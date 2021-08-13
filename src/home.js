// -- DOM Elements --
const modal = document.querySelector('.modal');
const ruleBtn = document.querySelector('#open')
const closeBtn = document.querySelector("#close");

// -- Functions --
const open = () => {
    modal.classList.add('show')
};
const close = () => {
    modal.classList.remove('show')
};
// -- Event Listeners
ruleBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);
