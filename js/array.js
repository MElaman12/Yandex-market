//
let brands = [
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'Xiaomi' },
    { id: 3, name: 'Apple' },
    { id: 4, name: 'Sony' },
    { id: 5, name: 'Bosch' }
]

let items_p = document.querySelectorAll('.items p')


// ------------------------
let performance = document.querySelector('.performance')
    performance.children[1].innerText = brands[0].name 
    performance.children[2].innerText = brands[1].name 
    performance.children[3].innerText = brands[2].name 
    performance.children[4].innerText = brands[3].name  
    performance.children[5].innerText = brands[4].name  
// ------------------------


// ------------------------
let heart = document.querySelectorAll('.heart')
let bottom = document.querySelectorAll('.bottom')
let hearts = document.querySelectorAll('.heart-active')
let cart_counter = document.querySelector('.cart-counter')
let counter = 0;
// ------------------------



// ------------------------
heart[0].onclick = () => {
    hearts[0].classList.add('heart-on')
    counter++
    cart_counter.textContent = counter
}

hearts[0].onclick = () => {
    hearts[0].classList.remove('heart-on')
    counter--
    cart_counter.textContent = counter
}
// ------------------------


// ------------------------
heart[1].onclick = () => {
    hearts[1].classList.add('heart-on')
    counter++
    cart_counter.innerText = counter
}

hearts[1].onclick = () => {
    hearts[1].classList.remove('heart-on')
    counter--
    cart_counter.textContent = counter
}
// ------------------------


// ------------------------
heart[2].onclick = () => {
    hearts[2].classList.add('heart-on')
    counter++
    cart_counter.innerText = counter
}

hearts[2].onclick = () => {
    hearts[2].classList.remove('heart-on')
    counter--
    cart_counter.textContent = counter
}
// ------------------------


// ------------------------
heart[3].onclick = () => {
    hearts[3].classList.add('heart-on')
    counter++
    cart_counter.innerText = counter
}

hearts[3].onclick = () => {
    hearts[3].classList.remove('heart-on')
    counter--
    cart_counter.textContent = counter
}
// ------------------------


// ------------------------
heart[4].onclick = () => {
    hearts[4].classList.add('heart-on')
    counter++
    cart_counter.innerText = counter
}

hearts[4].onclick = () => {
    hearts[4].classList.remove('heart-on')
    counter--
    cart_counter.textContent = counter
}
// ------------------------