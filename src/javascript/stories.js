export default (async function () {
    const categories = [
        "arts",
        "automobiles",
        "books",
        "business",
        "fashion",
        "food",
        "health",
        "home",
        "insider",
        "magazine",
        "movies",
        "nyregion",
        "obituaries",
        "opinion",
        "politics",
        "realestate",
        "science",
        "sundayreview",
        "technology",
        "theater",
        "t-magazine",
        "travel",
        "upshot",
        "us",
        "world"
    ]

    const CATEGORIES = document.querySelector('.categories')

    categories.forEach(category => {
        const CATEGORY = document.createElement('details')
        CATEGORY.className = 'category'
        
        CATEGORY.innerHTML = `
            <summary class="category__summary">
				<i class="category__icon fa-solid fa-diamond"></i>
				<span class="category__title">${category}</span>
				<i class="category__dropdown fa-solid fa-chevron-down"></i>
			</summary>
        `

        const DROPDOWN = CATEGORY.querySelector('.category__dropdown')

        DROPDOWN.addEventListener('click', async () => {
            if (CATEGORY.querySelector('.category__content')) return;

            const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=umxg29NUQQJ2vRHjGMT0GuX18ysR1HAe`)
            const data = await response.json()

            data.results.forEach(element => {
                if (element.item_type === 'Promo') return

                CATEGORY.innerHTML += `
                    <div class="category__content">
                        <img class="category__image" src="https://picsum.photos/200" alt="headline picture">
                        <section class="category__container">
                            <h2 class="category__headline">${element.title}</h2>
                            <p class="category__description">${element.abstract}</p>
                        </section>
                    </div>
                `
            })
        })

        CATEGORIES.append(CATEGORY)
    })
})()