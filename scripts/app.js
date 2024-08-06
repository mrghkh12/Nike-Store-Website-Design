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
// create product elem 
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
                <div class="color" onclick="changeImgSrc(event)" style="background-color: ${productsList[productIndex].colors[0].code};" data-src="${productsList[productIndex].colors[0].img}"></div>
                <div class="color" onclick="changeImgSrc(event)" style="background-color: ${productsList[productIndex].colors[1].code};" data-src="${productsList[productIndex].colors[1].img}"></div>
            </div>
            <div class="sizesBox">
                <div class="size" onclick="sizeActive(event)">42</div>
                <div class="size" onclick="sizeActive(event)">43</div>
                <div class="size" onclick="sizeActive(event)">44</div>
            </div>
            <button class="productBuyBtn">BUY NOW!</button>
        </div>

        <div class="payment-modal">
            <div class="payTitle">Personal Information</div>
            <label>Name and Surname</label>
            <input type="text" placeholder="John Doe" class="payInput">
            <label>Phone Number</label>
            <input type="text" placeholder="+1 234 5678" class="payInput">
            <label>Address</label>
            <input type="text" placeholder="Elton st 21 22-145" class="payInput">

            <div class="payTitle">Card Information</div>
            <div class="cardIcons">
                <img src="./img/visa.png" class="cardIcon" alt="">
                <img src="./img/master.png" class="cardIcon" alt="">
            </div>
            <input type="password" class="payInput" placeholder="Card Number">
            <div class="cardInfo">
                <input type="text" placeholder="mm" class="payInput sm">
                <input type="text" placeholder="yyyy" class="payInput sm">
                <input type="text" placeholder="cvv" class="payInput sm">
            </div>
            <button class="payBtn">Checkout!</button>
        </div>
        `
    )
}
// change product image src according color
const changeImgSrc = e =>{
    let productImgElm = productContainer.querySelector('.productImg')
    productImgElm.src = e.target.dataset.src
}
// remove and add active class in product size
const sizeActive = e =>{
    let sizeElemList = productContainer.querySelectorAll('.size')
    sizeElemList.forEach(item => item.classList.remove('active'))
    e.target.classList.add('active')
}

// + dynamic navbar menu active item and header slider 
const sliderWrapper = $.querySelector('.sliderWrapper')
const menuItemList = $.querySelectorAll('.menuItem')

const menuItemActiveLine = $.querySelector('.line-active')
// change menu item active line position and width
const dyanmicMenuItemActive = item => {
    if(item.classList.contains('active')){
        menuItemActiveLine.style.left = `${item.offsetLeft}px`
        menuItemActiveLine.style.width = `${item.offsetWidth}px`
    }
}

menuItemList.forEach((item,index) => {
    // change menu item active line
    dyanmicMenuItemActive(item)
    item.addEventListener('click' , (e) => {
        // change slide 
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`
        // remove and add to target active class
        menuItemList.forEach(itemMenu => itemMenu.classList.remove('active'))
        e.target.classList.add('active')
        // change menu item active line
        dyanmicMenuItemActive(e.target)
        // change slide with product item 
        productDetailsElemMeker(index)
    })
})

// change menu item active line
window.addEventListener('resize' , e => {
    menuItemList.forEach(dyanmicMenuItemActive)
})
// - dynamic navbar menu active item and header slider 

// create default product item element
window.onload = productDetailsElemMeker(0)