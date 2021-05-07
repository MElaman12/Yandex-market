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
        

// Наушники 
let headphones = [ {
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 3,
    name: 'Samsung_headphone',
    colors: ['white', 'gray'],
    year: 2020,
    sale: 300,
    warranty: 2,
    cashback: 5,
    img: 'https://images.samsung.com/is/image/samsung/uz_ru/galaxy-note20/gallery/uz-ru-galaxy-buds-live-r180-sm-r180nzkacac-casetopcombinationmysticblack-thumb-278153862?$LazyLoad_Home_IMG$'
},

{
    id: Math.random().toString().slice(2, 10),
    brand: 2,
    category: 3,
    name: 'Xiaomi_headphone',
    colors: 'black',
    year: 2019,
    sale: 200,
    warranty: 1,
    cashback: 5,
    img: 'https://ru-mi.com/image/cache/data/Tovari/Naushnikiikolonki/bluetooth/redmi_airdots/xiaomi_redmi_airdots_2_true_wireless_bluetooth_headset/xiaomi_redmi_airdots_2_true_wireless_bluetooth_headset_ava_1-800x800_wmark.jpg'
},

{
    id: Math.random().toString().slice(2, 10),
    brand: 3,
    category: 3,
    name: 'Apple_headphone',
    colors:  ['grey', 'white', 'black'],
    year: 2018,
    sale: 200,
    warranty: 2,
    cashback: 5,
    img: 'https://allbazar.top/upload/iblock/76a/76adc86535881404693076ec6472d54a.jpg'
},

{
    id: Math.random().toString().slice(2, 10),
    brand: 4,
    category: 3,
    name: 'Sony_headphone',
    colors: 'black',
    year: 2018,
    sale: 450,
    warranty: 2,
    cashback: 5,
    img: 'https://radius.uz/upload/iblock/147/147ec629b95b1abe9ca71da2dcbe2ef3.jpg'
},

{
    id: Math.random().toString().slice(2, 10),
    brand: 5,
    category: 3,
    name: 'Bosch_headphone',
    colors: ["black", "grey"],
    year: 2019,
    sale: 150,
    warranty: 1,
    cashback: 5,
    img: 'https://img.layta.ru/bosch-lbb3443-00-0.resize1.jpeg'
},
];
// ------------------------


// ------------------------
let h3 = document.querySelectorAll('.top h3')    
    h3[0].innerText = headphones[0].name
    h3[1].innerText = headphones[1].name
    h3[2].innerText = headphones[2].name
    h3[3].innerText = headphones[3].name
    h3[4].innerText = headphones[4].name
// ------------------------


// ------------------------
let balance = document.querySelectorAll('.balance')  
    balance[0].innerText = headphones[0].sale + '$'
    balance[1].innerText = headphones[1].sale + '$'
    balance[2].innerText = headphones[2].sale + '$'
    balance[3].innerText = headphones[3].sale + '$'
    balance[4].innerText = headphones[4].sale + '$'
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

    let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
    let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
    let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
    let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
    let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent 

    total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$' + '</span>'  

    total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$' + '</span>'

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


let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$' + '</span>'

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


let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$' + '</span>'

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

let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$' + '</span>'

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

let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$' + '</span>'

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}
// ------------------------

// Плюс ------------------- 
plus[0].onclick = () => {
object_quantity.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$' + '</span>'

let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}

// ------------------------
plus[1].onclick = () => {
object_quantity1.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'

let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}

// ------------------------
plus[2].onclick = () => {
object_quantity2.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + 
(object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'

let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}

// ------------------------
plus[3].onclick = () => {
object_quantity3.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'

let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 

}

// ------------------------
plus[4].onclick = () => {
object_quantity4.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'

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
     total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'
}

if (object_quantity.textContent >= 1) {
    total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'
}

let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'
    }

    if (object_quantity1.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'
    }

    let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
    let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
    let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
    let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
    let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'
    }

    if (object_quantity2.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'
    }

    let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
    let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
    let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
    let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
    let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'
    }

    if (object_quantity3.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'
    }

    let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
    let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
    let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
    let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
    let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'
    }

    if (object_quantity4.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * headphones[0].sale) + (object_quantity1.textContent * headphones[1].sale) + (object_quantity2.textContent * headphones[2].sale) + (object_quantity3.textContent * headphones[3].sale) + (object_quantity4.textContent * headphones[4].sale)) + '$'
    }

    let a = (headphones[0].sale / 100 * headphones[0].cashback) * object_quantity.textContent 
    let b = (headphones[1].sale / 100 * headphones[1].cashback) * object_quantity1.textContent 
    let c = (headphones[2].sale / 100 * headphones[2].cashback) * object_quantity2.textContent
    let d = (headphones[3].sale / 100 * headphones[3].cashback) * object_quantity3.textContent
    let e = (headphones[4].sale / 100 * headphones[4].cashback) * object_quantity4.textContent

    cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 

    if(total.textContent.substr(11, 2) == '0$') {
        cashback.textContent = 'Общий кешбэк: 0$'
    }
}
// ------------------------

