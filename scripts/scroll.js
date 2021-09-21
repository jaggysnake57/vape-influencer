const header = document.querySelector('header');

document.addEventListener('scroll', (e) => {
	if (!header.classList.contains('scrolled') && window.scrollY > 100) {
		header.classList.add('scrolled');
	}
	if (header.classList.contains('scrolled') && window.scrollY < 100) {
		header.classList.remove('scrolled');
	}
});
