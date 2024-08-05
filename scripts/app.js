const $ = document

// + dynamic header slider 
const sliderWrapper = $.querySelector('.sliderWrapper')
const menuItemList = $.querySelectorAll('.menuItem')

const menuItemActiveLine = $.querySelector('.line-active')
const dyanmicMenuItemActive = item => {
    if(item.classList.contains('active')){
        menuItemActiveLine.style.left = `${item.offsetLeft}px`
        menuItemActiveLine.style.width = `${item.offsetWidth}px`
    }
}

menuItemList.forEach((item,index) => {
    dyanmicMenuItemActive(item)
    item.addEventListener('click' , (e) => {
        menuItemList.forEach(itemMenu => itemMenu.classList.remove('active'))
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`
        e.target.classList.add('active')
        dyanmicMenuItemActive(e.target)
    })
})

window.addEventListener('resize' , e => {
    menuItemList.forEach(dyanmicMenuItemActive)
})
// - dynamic header slider 