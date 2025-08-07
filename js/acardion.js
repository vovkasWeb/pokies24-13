document.addEventListener('DOMContentLoaded', () => {
	const menuBtns = document.querySelectorAll('.footer__menu-button')
	menuBtns.forEach(menuBtn => {
		menuBtn.addEventListener('click', function () {
			const activeAccordion = document.querySelector(
				'.footer__menu-button.open'
			)
			if (activeAccordion && activeAccordion !== menuBtn) {
				activeAccordion.nextElementSibling.style.height = 0
				activeAccordion.nextElementSibling.style.padding = '0px'
				activeAccordion.classList.remove('open')
				activeAccordion.querySelector('.icon-img-btn').style.transform =
					'rotate(0)'
			}
			menuBtn.classList.toggle('open')
			const icon = menuBtn.querySelector('.icon')
			const content = menuBtn.nextElementSibling
			if (menuBtn.classList.contains('open')) {
				content.style.height = content.scrollHeight + 10 + 'px'
				content.style.padding = '0px 0px 0px 20px'
				icon.querySelector('.icon-img-btn').style.transform = 'rotate(-180deg)'
			} else {
				content.style.height = 0
				content.style.padding = '0px'
				icon.querySelector('.icon-img-btn').style.transform = 'rotate(0deg)'
			}
		})
	})
})
