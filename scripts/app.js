const $ = document

// + dynamic header slider 
const sliderWrapper = $.querySelector('.sliderWrapper')
const menuItemList = $.querySelectorAll('.menuItem')

const menuItemActiveLine = $.querySelector('.line-active')

menuItemList.forEach((item,index) => {
    
    item.addEventListener('click' , (e) => {
        menuItemList.forEach(itemMenu => itemMenu.classList.remove('active'))
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`
        menuItemActiveLine.style.left = `${e.target.offsetLeft}px`
        menuItemActiveLine.style.width = `${e.target.offsetWidth}px`

        e.target.classList.add('active')
    })
})
// - dynamic header slider 