export function drag(element, startPosX = 0) {
    element.addEventListener('touchstart', (e) => {
        startPosX = e.changedTouches[0].clientX
    })

    element.addEventListener('touchmove', (e) => {
        if (e.changedTouches[0].clientX >= startPosX || e.changedTouches[0].clientX < (startPosX - 125)) return

        element.style.transform = `translateX(${e.changedTouches[0].clientX - startPosX}px)`
    })
}