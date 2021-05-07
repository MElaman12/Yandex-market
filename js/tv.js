let add = document.querySelectorAll('.add')
let minus = document.querySelectorAll('.minus')
let plus = document.querySelectorAll('.plus')
// ------------------------


// ------------------------
let cart_counter2 = document.querySelector('.cart-counter2')
// ------------------------


// ------------------------
let object_counter = document.querySelector('.object-counter')
let object_counter1 = document.querySelector('.object-counter1')
let object_counter2 = document.querySelector('.object-counter2')
let object_counter3 = document.querySelector('.object-counter3')
let object_counter4 = document.querySelector('.object-counter4')
// ------------------------


// Общий чек --------------
let total = document.querySelector('.total')
// ------------------------

// ------------------------
let object_quantity = document.querySelector('.object-quantity') 
let object_quantity1 = document.querySelector('.object-quantity1') 
let object_quantity2 = document.querySelector('.object-quantity2') 
let object_quantity3 = document.querySelector('.object-quantity3') 
let object_quantity4 = document.querySelector('.object-quantity4') 
// ------------------------

// ------------------------
let cashback = document.querySelector('.cashback')
// ------------------------


// Телевизоры
let tv_arr = [{
    id: Math.random().toString().slice(2, 10),
    brand:  1,
    category: 5,
    name: "Samsung_Tv",
    colors: ['white', 'grey'],
    price: 600,
    year: 2020,
    sale: 12,
    warranty: 3,
    cashback: 9,
    img: 'https://www.ixbt.com/img/n1/news/2021/0/2/Google-TV_large.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand:  2,
    category: 5,
    name: "Xiaomi_Tv",
    colors: "black",
    year: 2019,
    price: 500,
    sale: 14 ,
    warranty: 4,
    cashback: 10,
    img: 'https://xiaomi.uz/uploads/CatalogueImage/Xiaomi-Mi-TV-2-55-inch-4K_13570_1430386831.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand:  3,
    category: 5,
    name: "Apple_Tv",
    colors: 'grey',
    year: 2018,
    price: 650,
    sale: 13,
    warranty: 4,
    cashback: 10,
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-hero-select-201709?wid=538&hei=535&fmt=jpeg&qlt=95&.v=1504814112595'
},
{
    id: Math.random().toString().slice(2, 10),
    brand:  7,
    category: 5,
    name: "Sony_Tv",
    colors: "black",
    year: 2018,
    price: 227,
    sale: 14,
    warranty: 2,
    cashback: 13,
    img: 'https://tezz.uz/uploads/images/product/521/thumbs/202031-10501050.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand:  2,
    category: 5,
    name: "Bosch_Tv",
    colors: ["black","grey"],
    year: 2019,
    price: 645,
    sale: 14,
    warranty: 2.5,
    cashback: 10,
    img: 'https://assets.asaxiy.uz/product/items/desktop/c81e728d9d4c2f636f067f89cc14862c2020042516385123988DxOON2dM7n.jpg'
}
];



// ------------------------
let h3 = document.querySelectorAll('.block .top h3')
    h3[0].textContent = tv_arr[0].name
    h3[1].textContent = tv_arr[1].name
    h3[2].textContent = tv_arr[2].name
    h3[3].textContent = tv_arr[3].name
    h3[4].textContent = tv_arr[4].name
// ------------------------


// ------------------------
let balance = document.querySelectorAll('.balance')  
    balance[0].innerText = tv_arr[0].price + '$'
    balance[1].innerText = tv_arr[1].price + '$'
    balance[2].innerText = tv_arr[2].price + '$'
    balance[3].innerText = tv_arr[3].price + '$'
    balance[4].innerText = tv_arr[4].price + '$'
// ------------------------



// ------------------------
add[0].onclick = () => {
    add[0].classList.add('off')
    object_counter.classList.add('flex')
    cart_counter2.textContent++
    object_quantity.textContent++

    if(object_quantity.textContent == 1 || object_quantity.textContent >= 1){
        add[0].classList.add('off')
    }

    let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
    let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
    let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
    let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
    let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent 

    total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$' + '</span>'  

    total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$' + '</span>'

    cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 20)
}
// ------------------------


// ------------------------
add[1].onclick = () => {
add[1].classList.add('off')
object_counter1.classList.add('flex')
cart_counter2.textContent++
object_quantity1.textContent++

if(object_quantity1.textContent == 1 || object_quantity1.textContent >= 1){
    add[1].classList.add('off')
}


let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$' + '</span>'


        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 20)
}
// ------------------------


// ------------------------
add[2].onclick = () => {
add[2].classList.add('off')
object_counter2.classList.add('flex')
cart_counter2.textContent++
object_quantity2.textContent++

if(object_quantity2.textContent == 1 || object_quantity2.textContent >= 1){
    add[2].classList.add('off')
}


let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$' + '</span>'

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 20)
}
// ------------------------
add[3].onclick = () => {
add[3].classList.add('off')
object_counter3.classList.add('flex')
cart_counter2.textContent++
object_quantity3.textContent++

if(object_quantity3.textContent == 1 || object_quantity3.textContent >= 1){
    add[3].classList.add('off')
}

let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$' + '</span>'

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 20)
}
// ------------------------
add[4].onclick = () => {
add[4].classList.add('off')
object_counter4.classList.add('flex')
cart_counter2.textContent++
object_quantity4.textContent++

if(object_quantity4.textContent == 1 || object_quantity4.textContent >= 1){
    add[4].classList.add('off')
}

let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$' + '</span>'

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 19) + '$'
}
// ------------------------

// Плюс ------------------- 
plus[0].onclick = () => {
object_quantity.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$' + '</span>'

let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 19) + '$'
}

// ------------------------
plus[1].onclick = () => {
object_quantity1.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'

let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 19) + '$'
}

// ------------------------
plus[2].onclick = () => {
object_quantity2.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + 
(object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'

let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 19) + '$'
}

// ------------------------
plus[3].onclick = () => {
object_quantity3.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'

let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 19) + '$'

}

// ------------------------
plus[4].onclick = () => {
object_quantity4.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 19) + '$'
}
// ------------------------



// Минус
minus[0].onclick = () => {
    object_quantity.textContent--
    cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

if(object_quantity.textContent == 0 || object_quantity.textContent == ''){
    object_counter.classList.remove('flex')
    add[0].classList.remove('off')
     total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'
}

if (object_quantity.textContent >= 1) {
    total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'
}

let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 19) + '$'

        if(total.textContent.substr(11, 2) == '0$') {
            cashback.textContent = 'Общий кешбэк: 0$'
        }
}
// ------------------------


// ------------------------
minus[1].onclick = () => {
    object_quantity1.textContent--
    cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

    if(object_quantity1.textContent == 0 || object_quantity1.textContent == ''){
        object_counter1.classList.remove('flex')
        add[1].classList.remove('off')
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'
    }

    if (object_quantity1.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'
    }

    let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
    let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
    let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
    let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
    let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 19) + '$'


     

    if(total.textContent.substr(11, 2) == '0$') {
        cashback.textContent = 'Общий кешбэк: 0$'
    }
}
// ------------------------


// ------------------------
minus[2].onclick = () => {
    object_quantity2.textContent--
    cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

    if(object_quantity2.textContent == 0 || object_quantity2.textContent == ''){
        object_counter2.classList.remove('flex')
        add[2].classList.remove('off')
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'
    }

    if (object_quantity2.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'
    }

    let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
    let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
    let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
    let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
    let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) 
        cashback.textContent = cashback.textContent.substr(0, 19) + '$'

    if(total.textContent.substr(11, 2) == '0$') {
        cashback.textContent = 'Общий кешбэк: 0$'
    }
}
// ------------------------


// ------------------------
minus[3].onclick = () => {
    object_quantity3.textContent--
    cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)
   
    if(object_quantity3.textContent == 0 || object_quantity3.textContent == ''){
        object_counter3.classList.remove('flex')
        add[3].classList.remove('off')
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'
    }

    if (object_quantity3.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'
    }

    let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
    let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
    let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
    let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
    let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

            cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
            cashback.textContent = cashback.textContent.substr(0, 19) + '$'


    
    if(total.textContent.substr(11, 2) == '0$') {
        cashback.textContent = 'Общий кешбэк: 0$'
    }
}
// ------------------------


// ------------------------
minus[4].onclick = () => {
    object_quantity4.textContent--
    cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

    if(object_quantity4.textContent == 0 || object_quantity4.textContent == ''){
        object_counter4.classList.remove('flex')
        add[4].classList.remove('off')
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'
    }

    if (object_quantity4.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * tv_arr[0].price) + (object_quantity1.textContent * tv_arr[1].price) + (object_quantity2.textContent * tv_arr[2].price) + (object_quantity3.textContent * tv_arr[3].price) + (object_quantity4.textContent * tv_arr[4].price)) + '$'
    }

    let a = (tv_arr[0].price / 100 * tv_arr[0].cashback) * object_quantity.textContent 
    let b = (tv_arr[1].price / 100 * tv_arr[1].cashback) * object_quantity1.textContent 
    let c = (tv_arr[2].price / 100 * tv_arr[2].cashback) * object_quantity2.textContent
    let d = (tv_arr[3].price / 100 * tv_arr[3].cashback) * object_quantity3.textContent
    let e = (tv_arr[4].price / 100 * tv_arr[4].cashback) * object_quantity4.textContent

    cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e)
        cashback.textContent = cashback.textContent.substr(0, 19) + '$'+ '$'

    if(total.textContent.substr(11, 2) == '0$') {
        cashback.textContent = 'Общий кешбэк: 0$'
    }
}
// ------------------------