const button = document.querySelector('.menu-button');
const menu = document.querySelector('.main-navigation');

button.addEventListener('click', (e) => {
	button.classList.toggle('button-close');
	menu.classList.toggle('open');
});
