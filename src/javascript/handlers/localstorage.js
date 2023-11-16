export function storeData(title, text, section) {
	if (localStorage.getItem(title)) return

	localStorage.setItem(title, JSON.stringify({
		title: title,
		text: text,
		section: section
	}))
}

export function getData(keyword) {
	return localStorage.getItem(keyword)
}