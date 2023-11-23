import { categories } from './handlers/categoryList'
import { getData } from './handlers/localstorage'

export default (function () {
	if (!window.location.href.includes('settings')) return

	const LIST = document.querySelector('.options__list')

	categories.forEach(async (category, index) => {
		const LI = document.createElement('li')
		LI.className = 'options__item'

		LI.innerHTML = `
			<span class="options__category">${category}</span>
			<input type="checkbox" class="options__checkbox" id="slider${index}">
			<label for="slider${index}" class="options__slider"></label>
		`

		LIST.append(LI)
	})

	const SLIDERS = document.querySelectorAll('.options__checkbox')

	let jsonObj = {} 

	SLIDERS.forEach(slider => {
		slider.addEventListener('click', () => {
			categories.forEach((category, index) => {
				SLIDERS[index].checked 
					? jsonObj[category] = 'checked'
					: delete jsonObj[category]
			})

			localStorage.setItem('checked', JSON.stringify(jsonObj))
		})
	})
})()