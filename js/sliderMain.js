import { restartSlider } from './slider-in.js'
document.addEventListener('DOMContentLoaded', () => {
	const track = document.getElementById('track')
	const buttons = document.querySelectorAll('#buttons button')
	const total = buttons.length
	let current = 0,
		auto

	const goTo = i => {
		current = i % total
		track.style.transform = `translateX(-${current * 100}%)`
		buttons.forEach(b => b.classList.remove('active'))
		buttons[current].classList.add('active')
		if (current === 2) {
			restartSlider()
		}
	}

	buttons.forEach(
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
		(auto = setInterval(() => goTo((current + 1) % total), 5000))
	const restart = () => {
		clearInterval(auto)
		start()
	}

	goTo(0)
	start()
})
