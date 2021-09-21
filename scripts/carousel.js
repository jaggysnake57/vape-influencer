const carouselItems = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.carousel__dot');

let counter = 1;

const changeSlide = () => {
	let backLeft = document.querySelector('.back-left');
	let backRight = document.querySelector('.back-right');
	let front = document.querySelector('.front');

	backLeft.classList.remove('back-left');
	backLeft.classList.add('back-right');

	backRight.classList.remove('back-right');
	backRight.classList.add('front');

	front.classList.remove('front');
	front.classList.add('back-left');

	dots.forEach((dot, i) => {
		if (dot.classList.contains('selected')) {
			dot.classList.remove('selected');
		}
		if (i == counter) {
			dot.classList.add('selected');
		}
	});
};

setInterval(() => {
	changeSlide();
	if (counter < 3) {
		counter++;
	} else {
		counter = 1;
		dots[0].classList.add('selected');
	}
}, 5000);
