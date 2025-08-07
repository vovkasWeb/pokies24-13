document.addEventListener('DOMContentLoaded', () => {
	const listItem = document.querySelector('.game__list')
	const listItemMini = document.querySelector('.game__list-mobile')
	const modalOverlay = document.querySelector('.modal-overlay')
	const closeModalBtn = document.querySelector('.close-modal-btn')

	const modalTreatment = target => {
		document.body.style.overflow = 'hidden'
		modalOverlay.classList.add('open')
		const imgModal = document.querySelector('.modal__img')
		imgModal.src = `./img/game/${target.alt}.webp`
		imgModal.alt = target.alt
	}

	const openModal = event => {
		const target = event.target
		if (target.matches('.game__img-list')) {
			modalTreatment(target)
		} else if (target.matches('.game__block-img')) {
			modalTreatment(target.querySelector('.game__img-list'))
		}
	}
	
	

	listItem.addEventListener('click', openModal)
	listItemMini.addEventListener('click', openModal)
	
	const closedModal = () => {
		modalOverlay.classList.remove('open')
		document.body.style.overflow = ''
	}

	closeModalBtn.addEventListener('click', function () {
		closedModal()
	})
	modalOverlay.addEventListener('click', function (e) {
		if (e.target === modalOverlay) {
			closedModal()
		}
	})
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			closedModal()
		}
	})
})
