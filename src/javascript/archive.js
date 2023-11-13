export default (function () {
    if (!window.location.href.includes('archive')) return

    const CATEGORIES = document.querySelector('.categories')
    const SECTIONS = CATEGORIES.querySelectorAll('.category')

    for (let i = 0; i < localStorage.length; i++) {
        const obj = JSON.parse(localStorage.getItem(localStorage.key(i)))

        const CATEGORY = Array.from(SECTIONS).filter(category => category.dataset.id === obj.section)
        
        CATEGORY[0].innerHTML += `
            <div class="category__content">
                <img class="category__image" src="https://picsum.photos/200" alt="headline picture">
                <section class="category__container">
                    <h2 class="category__headline">${obj.title}</h2>
                    <p class="category__description">${obj.text}</p>
                </section>
            </div>
        `
    }

    SECTIONS.forEach(section => {
        if (section.children.length === 1) section.remove()
    })
})()