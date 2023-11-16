export function drag(elements, startPosX = 0) {
    elements.forEach(element => {
        element.addEventListener('touchstart', (e) => {
            startPosX = e.changedTouches[0].clientX
        })

        element.addEventListener('touchend', (e) => {
            if (e.changedTouches[0].clientX > startPosX && e.changedTouches[0].clientX < startPosX - 50) return

            element.style.transform = `translateX(-125px)`
        })
    
        element.addEventListener('touchmove', (e) => {
        })
    })
}