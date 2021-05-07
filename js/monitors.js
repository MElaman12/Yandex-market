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


// -----------------------
// Мониторы
let monitor_arr = [{
    id: Math.random().toString().slice(2, 10),
    brand: 6,
    category: 6,
    name: "Samsung_monitor",
    price: 620,
    colors: ["black", 'grey'],
    year: 2020,
    sale: 10,
    warranty: 1,
    cashback: 4 ,
    img: "https://www.e-katalog.ru/jpg_zoom1/1640202.jpg"
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 6,
    name: "Xiaomi_monitor",
    price: 600,
    colors: ["black", 'white'],
    year: 2019,
    sale: 12,
    warranty: 2,
    cashback: 5,
    img: "https://www.e-katalog.ru/jpg_zoom1/770743.jpg"
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 5,
    category: 6,
    name: "Apple_monitor",
    price: 500,
    colors: ["grey"],
    year: 2018,
    sale: 5,
    warranty: 3,
    cashback: 2,
    img: "https://www.e-katalog.ru/jpg_zoom1/1923014.jpg"
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 4,
    category: 6,
    name: "Sony_monitor",
    price: 650,
    colors: ["black", 'white'],
    year: 2018,
    sale: 7,
    warranty: 1,
    cashback: 7,
    img: "https://www.e-katalog.ru/jpg_zoom1/1963997.jpg"
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 6,
    name: "Bosch_monitor",
    price: 480,
    colors: ["black", 'grey'],
    year: 2019,
    sale: 14,
    warranty: 2,
    cashback: 10,
    img: "https://www.e-katalog.ru/jpg_zoom1/1989936.jpg"
}
];
// -------------------------


// ------------------------
let h3 = document.querySelectorAll('.block .top h3')
    h3[0].textContent = monitor_arr[0].name
    h3[1].textContent = monitor_arr[1].name
    h3[2].textContent = monitor_arr[2].name
    h3[3].textContent = monitor_arr[3].name
    h3[4].textContent = monitor_arr[4].name
// ------------------------



// ------------------------
let balance = document.querySelectorAll('.balance')  
    balance[0].innerText = monitor_arr[0].price + '$'
    balance[1].innerText = monitor_arr[1].price + '$'
    balance[2].innerText = monitor_arr[2].price + '$'
    balance[3].innerText = monitor_arr[3].price + '$'
    balance[4].innerText = monitor_arr[4].price + '$'
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

    let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
    let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
    let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
    let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
    let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent 

    total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$' + '</span>'  

    total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$' + '</span>'

    cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
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


let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$' + '</span>'


        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
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


let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$' + '</span>'

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
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

let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$' + '</span>'

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
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

let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$' + '</span>'

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}
// ------------------------

// Плюс ------------------- 
plus[0].onclick = () => {
object_quantity.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$' + '</span>'

let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}

// ------------------------
plus[1].onclick = () => {
object_quantity1.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'

let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}

// ------------------------
plus[2].onclick = () => {
object_quantity2.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + 
(object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'

let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}

// ------------------------
plus[3].onclick = () => {
object_quantity3.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'

let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 

}

// ------------------------
plus[4].onclick = () => {
object_quantity4.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}
// ------------------------



// Минус
minus[0].onclick = () => {
    object_quantity.textContent--
    cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

if(object_quantity.textContent == 0 || object_quantity.textContent == ''){
    object_counter.classList.remove('flex')
    add[0].classList.remove('off')
     total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'
}

if (object_quantity.textContent >= 1) {
    total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'
}

let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'
    }

    if (object_quantity1.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'
    }

    let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
    let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
    let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
    let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
    let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 


     

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'
    }

    if (object_quantity2.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'
    }

    let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
    let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
    let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
    let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
    let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

            cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'
    }

    if (object_quantity3.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'
    }

    let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
    let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
    let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
    let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
    let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

            cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 


    
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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'
    }

    if (object_quantity4.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * monitor_arr[0].price) + (object_quantity1.textContent * monitor_arr[1].price) + (object_quantity2.textContent * monitor_arr[2].price) + (object_quantity3.textContent * monitor_arr[3].price) + (object_quantity4.textContent * monitor_arr[4].price)) + '$'
    }

    let a = (monitor_arr[0].price / 100 * monitor_arr[0].cashback) * object_quantity.textContent 
    let b = (monitor_arr[1].price / 100 * monitor_arr[1].cashback) * object_quantity1.textContent 
    let c = (monitor_arr[2].price / 100 * monitor_arr[2].cashback) * object_quantity2.textContent
    let d = (monitor_arr[3].price / 100 * monitor_arr[3].cashback) * object_quantity3.textContent
    let e = (monitor_arr[4].price / 100 * monitor_arr[4].cashback) * object_quantity4.textContent

    cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 

    if(total.textContent.substr(11, 2) == '0$') {
        cashback.textContent = 'Общий кешбэк: 0$'
    }
}
// ------------------------