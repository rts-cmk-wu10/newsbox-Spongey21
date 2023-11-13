export function drag(elements, startPosX) {
    elements.forEach(element => {
        element.addEventListener('touchstart', (e) => {
            startPosX = e.changedTouches[0].clientX
        })

        element.addEventListener('touchmove', (e) => {
            if (e.changedTouches[0].clientX >= startPosX || e.changedTouches[0].clientX < (startPosX / 2)) return

            element.style.transform = `translateX(${e.changedTouches[0].clientX - startPosX}px)`
        })
    })
}