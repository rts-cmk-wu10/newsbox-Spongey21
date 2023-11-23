import { categories } from './handlers/categoryList'

export default (function() {
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
})()