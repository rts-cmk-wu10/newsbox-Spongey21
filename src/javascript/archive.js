import { drag } from './handlers/drag'
import { getData } from './handlers/localstorage'

export default (function () {
	if (getData('theme')) document.body.classList.add('darkmode')

    if (!window.location.href.includes('archive')) return

    const CATEGORIES = document.querySelector('.categories')
    const SECTIONS = CATEGORIES.querySelectorAll('.category')

    for (let i = 0; i < localStorage.length; i++) {
        const obj = JSON.parse(localStorage.getItem(localStorage.key(i)))

        const CATEGORY = Array.from(SECTIONS).filter(category => category.dataset.id === obj.section)

        CATEGORY[0].innerHTML += `
            <button class="category__delete">delete</button>
            <div class="category__content">
                <img class="category__image" src="https://picsum.photos/200" alt="headline picture">
                <section class="category__container">
                    <h2 class="category__headline">${obj.title}</h2>
                    <p class="category__description">${obj.text}</p>
                </section>
            </div>
        `
    }

    const DELETES = document.querySelectorAll('.category__delete')

    DELETES.forEach(del => {
        del.addEventListener('click', () => {
            const CONTENT = del.nextSibling.nextSibling

            localStorage.removeItem(CONTENT.querySelector('.category__headline').textContent)

            if (del.parentElement.children.length <= 3) {
                del.parentElement.remove()
            }

            CONTENT.remove()
            del.remove()
        })
    })

    drag(document.querySelectorAll('.category__content'))

    SECTIONS.forEach(section => {
        if (section.children.length === 1) section.remove()
    })
})()