const $ = document

// + dynamic header slider 
const sliderWrapper = $.querySelector('.sliderWrapper')
const menuItemList = $.querySelectorAll('.menuItem')

menuItemList.forEach((item,index) => {
    item.addEventListener('click' , () => {
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`
    })
})
// - dynamic header slider 