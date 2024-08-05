const $ = document

const productsList = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

const productContainer = $.querySelector('.product-section')  
const productDetailsElemMeker = (productIndex) => {
    productContainer.innerHTML = ''
    productContainer.insertAdjacentHTML('beforeend', 
        `
        <img src="${productsList[productIndex].colors[0].img}" alt="" class="productImg">
        <div class="productDetails">
            <h1 class="productTitle">${productsList[productIndex].title}</h1>
            <h2 class="productPrice">$${productsList[productIndex].price}</h2>
            <p class="productDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo autem cupiditate iure, laborum nulla unde id! Debitis inventore consectetur, at ducimus temporibus dolore, labore deleniti totam expedita, sint quam.</p>
        
            <div class="colorsBox">
                <div class="color" style="background-color: ${productsList[productIndex].colors[0].code};"></div>
                <div class="color" style="background-color: ${productsList[productIndex].colors[1].code};"></div>
            </div>
            <div class="sizesBox">
                <div class="size">42</div>
                <div class="size">43</div>
                <div class="size">44</div>
            </div>
            <button class="productBuyBtn">BUY NOW!</button>
        </div>
        `
    )
}

// + dynamic navbar menu active item and header slider 
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
        productDetailsElemMeker(index)
    })
})

window.addEventListener('resize' , e => {
    menuItemList.forEach(dyanmicMenuItemActive)
})
// - dynamic navbar menu active item and header slider 

window.onload = productDetailsElemMeker(0)