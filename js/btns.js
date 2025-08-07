document.addEventListener('DOMContentLoaded', () => {
	const scrollToTopBtn = document.querySelector('.scroll-to-top-btn')

	window.addEventListener('scroll', () => {
		if (window.scrollY > 300) {
			// Если прокрутили больше 300px
			scrollToTopBtn.style.display = 'block'
		} else {
			scrollToTopBtn.style.display = 'none'
		}
	})

	scrollToTopBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
})
