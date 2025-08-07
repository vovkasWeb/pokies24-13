document.addEventListener('DOMContentLoaded', () => {
	const track = document.getElementById('trackMobile')
	const buttons = document.querySelectorAll('.slide__line-mobile img')
	const buttonsBottom = document.querySelectorAll('.slider-bottom__btn-mobil')

	const total = buttons.length
	let current = 0,
		auto

	const goTo = i => {
		current = i % total
		track.style.transform = `translateX(-${current * 100}%)`
		buttons.forEach(b => b.classList.remove('active'))
		buttons[current].classList.add('active')
		buttonsBottom.forEach(b => b.classList.remove('active'))
		buttonsBottom[current].classList.add('active')
	}

	buttons.forEach(
		btn =>
			(btn.onclick = () => {
				goTo(+btn.dataset.index)
				restart()
			})
	)
	buttonsBottom.forEach(
		btn =>
			(btn.onclick = () => {
				goTo(+btn.dataset.index)
				restart()
			})
	)

	let startX = 0
	track.addEventListener('touchstart', e => (startX = e.touches[0].clientX))
	track.addEventListener('touchend', e => {
		let dx = startX - e.changedTouches[0].clientX
		if (dx > 50) goTo((current + 1) % total)
		else if (dx < -50) goTo((current - 1 + total) % total)
		restart()
	})

	track.addEventListener('mousedown', e => (startX = e.clientX))
	track.addEventListener('mouseup', e => {
		let dx = startX - e.clientX
		if (dx > 50) goTo((current + 1) % total)
		else if (dx < -50) goTo((current - 1 + total) % total)
		restart()
	})

	const start = () =>
		(auto = setInterval(() => goTo((current + 1) % total), 50000))
	const restart = () => {
		clearInterval(auto)
		start()
	}

	goTo(0)
	start()
})
