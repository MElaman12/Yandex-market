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
        
// Холодильники
let fridge_arr = [{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 2,
    name: 'Samsung_Fridge',
    colors: ['white', 'grey'],
    year: 2020,
    sale: 600,
    warranty: true,
    cashback: 2, 
    img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSEhUSGBIYGBISEhEYEhIYERERGBgaGRgYGBgcIS8lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQhISM0NDQxNDExMTQxPzE0NDQ/NTE2NDQxNDQxPzQ/NDQ1NDQ/NTE0NDQ3PzQxPzY0NDE/Mf/AABEIAN8A4gMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEkQAAIBAgEGCQkECAYCAwEAAAECAAMRBAUSITFxsQYiMkFRYXKBwRMkM1KCkaGy0RQjQpIHFTRik6LC8ENTc4PS4WPxo9PiFv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACgRAQEAAgEDAgUFAQAAAAAAAAABAhEDBBJBITEiUWFxsRMyUpGhFP/aAAwDAQACEQMRAD8A9migmMx9KkPvHVefNvdjsUaTKLGcKRpFFCf330AdYUa+8iBqIphqOVsQxJNRu7NA9wEIGUq/+Y3w+km102MUyQynX9c+5fpOjKtf1/5U+kbNNZFMp+t6/rj8q/SL9dV+lfyiNmmrimU/X1cf5f5T9YPXy5iTqYL2UX+q8bNNnFM9wZxtWoXFRy1swrcKLXzr6hsmhlRyKZ/LfCH7Oxpomc9gSzGyi+rQNJ+Ey+MyxXraHc5vqrxV2WGvvvC6eiDEJ6y/mEcHB1Ee8TNcH8HTeiWdM4jNtpN9XUYe2Bw/PTce0/1hFwDOyl+xYb1XHtH6xfYaHMag9qBdRSk+y0+apWHtH6RfZ05q9Ye230gXcieui8plG1gJRVsm0nN2quT0tcn4wU5Fp+UBDZy6QFsQCx2HTA0wxCEZwZbetnC3vkDZToD/ABEPUpzj7lvKwZNpr+AX7I8Y8UlHMYBbZYp/hFVtlMj5rSJsrP8AhpfmcDcDIswer75G9RhqAHxgSNj8QdQpqOy7H3kjdK+tlfEIWGcDmlhyFA0GXtSkvkybaba5lcdy37T7zFVuYoooRheFI86bspulUolxwnHnLdlN0q1WZqp8IuvuhgWQ4NdfdCgsqm2itJM2NIgNzAfxAdRB8BISJieGvCjGYTEmnQVDTWnTdy1MsVLFhpNxo0TcuNMmkQtIXEIYSJhKq74JcqpsTe008zPBQcapsTe000RK894X/tbdlN0qUlvwu/am7CbpUoIVt+DXoD7EsmUnWZW8HPQH2JZg/wB6JWaaKfXEaWyPEdBA70tkiNKEsfGRtqkEBQCQ/a6aOod1BBBIvxrWPMNMJIvGhDnDi8+nTq65ZA6vlCm3J8odiON4EGOLHqt36IZiVOjQNXR/3AGpH+7fSUdOKHQ3uH1glXFtfQvNfUekjwkzoAbFrE9bdIHNo1kCClqban6tZ03JG8GZ3PYaRzentUbpkcocup2qm8zX1fR9wmQyly6m1/GWkbqKKKBi+Eg85bspulaqy24RDzhuym6VyrIqfBrr2QvNkODGk7BCbQplpwiSlY0iB49+k5lGNYELc0KQBJYFSC5uLaDqtp6Z6w4lHl3JtCpWDVKVJ2zVGc9NWawvouRL5hFqB2EYwk7LImEKuOC3KqbF3maWZvguOM+xN5mkiJXn/C4edt2U3SqQS34Wjzo9lN0qkEDZcH/QNz8nR3mHrUtrBHev1gHB8XoMOpd5hRww6N0rNT/aEHOfyk7pxsVT6W/h1P8AjIRhh0D4R32UdA9wgNbHUxrY8/4Kn0kD5Rogaai99xvEkfC+MYMOAALaNUm1Pw+JpuwzHRr6rEG8JckVF6yQdljBqKWItJ3H3i9rwMQS4mAuYZiTASR0iWjK8I8SPtKG+iiqO2jSc5rke5Qe+UOQMWfKFTpznp1dNrLpOcB+f4SyyrkrEVTinVKl3cog8m+lAoUMP3dEApZH+zFLuzPd1bRYcm2jqzjbunmvd3b+r5ty5P1O7xt6xX9GdkyGVOXU2v4zYYjkHYJjsqcuptfxnpr6UbuKKKBkeEA84PZXdK9RLLL3pz2V3SvAkUTgxr2DfC7SDBjXsG+FWhUdo0iSkRpEAOvg6bnOYXOrWRo7pIyyciMYQB2WQsIUwkLrAtODPKqbF3maKZ/g2OO+xd5mgiMsFwsHnR7KbpVIJb8LP2o9hPGVSQrY8HPQnYu8yyDCVGRmIwzkawot72kIxb+q35//AMxvSVYV8tYZCVZjcEg2RyARr0gSFeEOFIuHNv8ATf6SgrZMRydFQAm+aKgKjqAzdXVIHyOh9fquQR7jonjuXU79JHC3m36SNKMu4Y/jttRx4SWji6dQE02DWNja+g2Bsb9RmWfJ7E3uSesQrJdF6NyqIWYguxYgsQLAGwOoTfFlzXLWckjWN5N/FJpo0OmRY6hTaoC2fe9rB6gHPzA2keGdmNyLdPGv4Qtx94O14GemV1BVcPSW3F+BO+DOE5g35ZdYlBoguaunVo16tEtqzF57lfg9iKjVCrjybszIvHLLcg6ubT1xmDyHVTMBBayBCbHSwZzfT1v8J6LmC14PUGmY7cXG8GG96XNUWTuAmPyry6m1/GbDEejPdMflbl1Pb3TpXWN3FFFIMpl0ffnsrugCiWGXPTnsrugIkUXgxr2CFWg2D59ghcBto0iPtFaBGRGESa0YRCoWEhZYQwjGEA/g8OM+xd5l9KPII4z7F3mXkRlheFf7UewnjKpJbcKx50ewnjKlBCtdweF6DDqG9oT9lEH4OeiOwb2lmY0gZcKJ04USdGEAxOUGDlVzQF0aQSW0X9048/Phw492ft7NY43K6hz4cfAyPyQAtAjldtLEBgGK5ijTYdEdh8oFmUMBZrkWvxbadM8/H1/DnZJvdup6N5cOWM3R1MaZLUNqg2ncZCzWg1Xyha6vYcwzFNtHSZ7Y5oOFGKZURQ2aGYhjz2UX267TO4fEMRnlmuoUAW0EaBYnYWltlpGbMFTj6Wt+G2r1ZV0Co/wRza2qfWfK6vG3k3v8vr9NcZwya/DW4WpnID3e6NcQfCYkBBYKOrOb6xhrvYnaRq6dAn0uPfbNvncuu66aLEejOwTIZVHHqe3umurcjuEyOVRx6nt7p2rhG6iiikGWy76c7F3QEQ7LnpzsTdAhIovBc+zxhZEGwY0f31QmApyOnIDTOER8aYEbCRMIQwkZEKNyGOM2wb5dSnyMOM2wb5cRGWI4Ujzk9hPGVSCW/CgecnsJ4yqQQrT5CH3LbPFpI5e2jcIzIHojs/qaUdTLNU1HKsqorMFQqpBCm3GNr83TOPPz48Mly8/J14uDLltmPhcotQ/+lnGw5OlgCebQLyo/XNV2YglACQKZVdFuZrjXNPhH8pTRyACwBI5r89uqcuLqMObK4SX0+bXL0+XFJb5Ur4U3LWIb1gSCe8SJcnj98bHcH4GaB6YkTJPR2Rw3QdJCLXLHouSff0ybyecQDznwMfmx1P0ibfAzUEVXBraB/qun0S1r4hOc20gXINgTf6RgIOog/SauJMtewJMEgFgNE4+FWGmD1JNaW3a3xB+7OwTKZU5b+1umqxHozsEy2VOW/tbpqsxtooopBlsuenOxN0CWG5c9OdiboEsijcHq9/hCYNg/r4QmFdnJ2ckiOGKIzsoYY0iPM4YBmRxxm2DfLeVOSOU2wb5bREYvhOPOT2E8ZVLLbhP+0HsJ4yqWGmlyObUH7J1a9bQU4OgXz8y7XuTpsx6SM6x74Vkn0D9ht7TqIJnLDHKas39zHPLH9t0ir4Kk757JxjrNrZ3aAbT3yVqjjQGIA0AALYDZH6AJS5byyKKHMRmbULC9js55n4MN3Wrf9TPO6ndfSeyxd6nrv7lg58p69Tp0Zn0lThMUHswzmYgFjo4pPMSTr2SyoVNNjq5uqcsOfuy1rTnjl3CKWIYsBdtfQIVVOrTziAoPvFPNc6O6StiGzreTci5AN0sTq6Z6cbtosfhTUJAcqc9jzjOUG5W40i8fgKZQ2LZxI0nZYDXsnamL4wOY4YWvfN92g6pLTrhmvY6iLXS41dc62+hE7SCrrk2dfmPw8DA3xCMM4Hi2vex1TGlXWI9GdgmXyly6nfumnrH7vuEzGUeW/f8ALFI20UUUgy2XfTnYu6ArDcuenPZXdAVkUdgvr4QqAYZmF81VOjnYrz9NjJDUxHqUf49T/wCuAWTOQTOxHqUf4r/8J29fooj2qh/pEAqKCWr9NH8tQ+Iiza/r0f4bn+uASYmgxSt69L+C/wDzkCUsSDdq1Mj1RhyPj5SBe5J5TbBvltKTISsC+c2cbDSFCgDoAufjLuIjG8Jv2j2V8ZVCWnCf9o9lfGVQMNNLkYnyDEa81rdF7tI0x1Ua1XaAfrIsl12SmM0686+gHnMKOJfq/Iv0mM+O5e1s+xLrxs05SqdA/LGnG1CNNr9Sx5xFT+0X6Tn2ir1/kH0mcOK43e7fuZXfjSoxGLxVyM1GXmsLe+5gz4IVSGqLxtHJzrfGaDy9f9/8n/U41bEf+T8n/U1jx6u91iY68hcNS4w12Fzp6bW8TCyACM7Rxr9WvplVlCpiwCU8oWsc0EEAnr0SpoPlF3zWRM21wGZlBN+nTOk9CtFiaiEMbnlgajewOsDo64/DpouSLnToPUJUU8HXY/eIFtqzKhceEkTBul9BN+nyngpmu76Glw1M9MBdDmHT628wUq41g/8Ayf1KJEzta2r2qf8Ayk2umxY/dewu6ZrKHLf+/wAMmoZTzUzWao2gDUCBszZDWR6jMUV2B1cR76ui0WjbRRRSDKZd9Oeyu6AAw7L3pz2V3SvBkUfg4VeB4Q+PhCbwp95wmNvOEwh5M5eMvOXhTiZwmNLThaBZ5GPGbYN8uJS5DPGbYN8uojLF8KT5x7K+MqQZZ8Kj5z7CbzKgGGmp4PH7v3/MY7GYlVqlWeoDYEKBcW8JFwcPE9/zGNyu9qgI5Wba1ubSdc1GalOJp871vyj6SKpXpeviPy0/pBPKk6/GMc3/ALMJtM+Kp6ga57qcCxGKuDmCvcc5zbfBowhs6/1jCSTzyhYNhUIDLVL3HR5PXz6dVpdotn7jA8BxGUadJsdn/u0Of0nc28xSCGBFtA0i+qcB/dHvMmYaF7I8YzR1+6ZVwMPVbuInS684f3Xnbjp984e6AmoKVDWBB6VF5S5QQLUIVVA4uoAW4oOgS+X0Y2mUWVD942xfkEUjbxRRQMjl8+cN2U3QAGG8Ij5w3ZTdK5TIo/CHx8ITeB4Q+PhCCYVJeNLRudGloEhaNLRhaMLwJS0aWkZeNLQLrIJ4zbF3y8mf4OnjPsXeZoIjLC8LT517Cb2lQrSz4YHzv2Ke9pTK0K1nBs8Q9/zGNywPvQeaw083P0xcGDxDs8TC8W4FSxQNdbhiT0nRaaiVUXHT8V+sazr0/FZbiqv+VT7zecZ//HT/ACwiiaot+b8wipuL/wB/SWVWq1+RSH+3/wBwSupdbHMHZUgj4yh2GcF1t0jmPORLGr6Tuf5jAcnobhQeKDck6zp1CHVvSdz/ADGSkGsdC9kbzOd/vifkr2fExgv1SNHaerdGtsndPRGkyCZfRjaZQZVP3j7F+QS9X0Y2mUOV+W/ZX5JaN1FFFCMXwkPnLdlN0rVaH8Jz5y3ZTdKtWkVYYRtJ2eMKzoDhG0nZ4wktCpC0YWjS0YWgSF4wtGFo0tAeWnC0jLTmdAvuDR479ld5mjma4Lnjv2V3maWIy8+4aHzv/bTe0pFaXHDc+d/7dP5nlEphWx4LHinZ/VIeE2VVoOM4NyV0i17EtzE9UdwTPFOz+qSZaoA1A5AICgWIufxc01EoLBY41aa1FLBWvYHXoJHNskzOTzn3mNRNFlQ26lNt8k8g/Mh/KPrCA2XTe7e82jFUkwp8LU15vdmwd89NLLYdJIA+IgFYfisgFuUObu8YfWP3nc/zGVuFzmZWsM0EaQwPOL80savpO5/mMUg1uSvZ8TGEdXujm5KdnxMbMtOaP3h8Z2/XFczl4Eg9GO0ZQZXPHfsr8gl8D937RlDljlv2R8ogbyKKKVGE4VN503ZTdKpWljwuPnbdinuMqUaRVhhG093jC7wHBtpOzxhWdCnExpM4TGkwEzRhaNZowmA8tFnSItFeZGj4Jnjv2V3maiZXggeNU7KbzNVNRK844dHzz/ap/M8olaXfD0+eD/ST5nlAhgbLgkeK2w/NLHH1HWpxSLFeq4IJ6RKvggeK2w/NDMq1bVAL20Dm289pMspjN1ZLbqGfbMRzP/Kn0nftVc63+UeEGRxzOt/h8JICdd1I6lYmcP8Ap4/5Nfp5T3iQPUI4zt7z4StquWYqWYr0FjbfLMPosFe/+m1vfBPsz5181x120ROq4rdbn9pcLJvSXBKpIGbmqNWaXOc2vjXJ0aDC63pO5/mMERACu28Krek7n+Yz0RkW3JTs+JnLHqjm5K9nxMjI6vdA6T1GJXnL9BInD3QJb/d+0ZQ5Y5b9kfIJeA/d+0ZR5W5TdkfLA3sUbFKjA8LgftOeBxCqAP8AhJF7i/T1SmQw/hbkDFoWqYd2sdJTWp7pisNwlNOp5PGIUN7CqAcy/wC8Pw7R8JFbPCHSdnjC7wDAVA/GUhlKghgQQQdRBGuG3hTiZGxjXxFMa3QbXUeMDq5Ywq8rEYcba1P6wC2MjYytfhFghrxFDudTugtXhXgF/wAdT2UqN8qmBdXivM6/DLBDU1RuzRfxAncNwvwdRggNUMTYA0jf4GTRt6JwQ5dTYm8zVTI8CHz89xoBCAA3DazrB1TVYhSUYDXY22yxK844fnzwf6VP5qkoEML4T08QK2fUUlQM29jcgG409Vzzc8rMNiFfknSNY5xtEDb8DzxW2H5pYZVw9RmugYmwIItzX5zK3ge4CtcgaDrIH4po2xNMa3T86yZYzLHtpvVUaPiqa2SgG2FVJ2x/lcaSB5CmAdbGpydotLVsdSH40994xspUR+Me5j4TyXoOC3djXfVei40g3Sip/DxmII7tUIXC1mAz2W/4gDxb9UlOVaPrE+y0acsU+hz7I+s6YdJw4Xck2lytJcCwINxbdGVx973MfeSZyplqnzI/8o8ZW/rmm2JVGAS6tYswFyOaehF4XUgDOAIFrHRzzoQ83w07pBdTskeYObRsJG6ASTGNbokefUH4r9RAMRrn8SA9YNj7tUCdfR+0ZS5U5TdkfLLZKoKZtiNN9MqMpcpuyPlgboTkcmobBFKhOoIsdUyvCPgVQxgNwATz2E1kUDzXFfo7qNhUwiVKSIl82oqEVyM7OsXv1yiP6IW/FUZj0kk757PFA8fpfoiTnMOo/onoDXPUooHnVL9F+FGsQ2l+jnBr+AfCbiKBk6XAXBr+BfcJKvAfBZ2c1NT1WE08UAXBYGlQXMpKqr0Aa4VFFAFxWCp1BZlB7pheEfAEPephyUqDSCug3nokUDx2lhsfSwtgqtiw5QUWoVczNz7Z5cMF5PG0bI5cn5aYXthU6hSc297z1+0VpB5AMgZafXiEXs0Kej33kq8EcqtysY47KUl3LPWrTso8m/8A4DHNy8divZqFR8LSRP0aVDy8Viztr1PrPVYoHmFP9FiDT5bEBukVnvvg2N/RpXNrV2cAjN8oS7qOcKzagecc89YigefZPyJi8PTCBabKt7DNzWFzewZbHnk5xdRPSU6i9Ys6e42b+abmMakp1gSaGOpY9W1PTJ6CWR/c2j+aFeU0XZXA6c3OX863X4y6xGR6L61HugB4OKpvTd0PUxhQiVFYXUqR1EGV2UOUdg3S8/VFUn7w06nW6LndzDTC6eRKOt0ue3UI+JgWSahsEU7FKj//2Q=='
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 2,
    category: 2,
    name: 'Xiaomi_Fridge',
    colors: 'black',
    year: 2020,
    sale: 490,
    warranty: 3,
    cashback: 4,
    img:'https://m.media-amazon.com/images/I/71nqCR56Z3L._AC_.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 3,
    category: 2,
    name: 'Apple_Fridge',
    colors: 'grey',
    year: 2018,
    sale: 520,
    warranty: false,
    cashback: 2,
    img:'https://www.smeg.com/binaries/content/gallery/smeg-unitedkingdom/categories/refrigeration/fq60x2peai-600x600.jpg/fq60x2peai-600x600.jpg/brx%3AsquareMobile'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 4,
    category: 2,
    name: 'Sony_Fridge',
    colors: 'black',
    year: 2018,
    sale: 300 ,
    warranty: true,
    cashback: 2,
    img:'https://api.time.com/wp-content/uploads/2016/05/family_hub_black_stainless.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 5,
    category: 2,
    name: 'Bosch_Fridge',
    colors: ['black', 'grey'],
    year: 2019,
    sale: 450,
    warranty: 1,
    cashback: 2,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyAnqiWimDC5R9itsZUR0gfIQfnDs9FZXKA&usqp=CAU'
}
];
// ------------------------


// ------------------------
let h3 = document.querySelectorAll('.top h3')    
    h3[0].innerText = fridge_arr[0].name
    h3[1].innerText = fridge_arr[1].name
    h3[2].innerText = fridge_arr[2].name
    h3[3].innerText = fridge_arr[3].name
    h3[4].innerText = fridge_arr[4].name
// ------------------------


// ------------------------
let balance = document.querySelectorAll('.balance')  
    balance[0].innerText = fridge_arr[0].sale + '$'
    balance[1].innerText = fridge_arr[1].sale + '$'
    balance[2].innerText = fridge_arr[2].sale + '$'
    balance[3].innerText = fridge_arr[3].sale + '$'
    balance[4].innerText = fridge_arr[4].sale + '$'
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

    let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
    let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
    let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
    let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
    let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent 

    total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$' + '</span>'  

    total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$' + '</span>'

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


let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$' + '</span>'

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


let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$' + '</span>'

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

let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$' + '</span>'

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

let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$' + '</span>'

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}
// ------------------------

// Плюс ------------------- 
plus[0].onclick = () => {
object_quantity.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.innerHTML = 'Общий чек: ' + '<span class="cash">' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$' + '</span>'

let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}

// ------------------------
plus[1].onclick = () => {
object_quantity1.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'

let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}

// ------------------------
plus[2].onclick = () => {
object_quantity2.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + 
(object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'

let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 
}

// ------------------------
plus[3].onclick = () => {
object_quantity3.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'

let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

        cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 

}

// ------------------------
plus[4].onclick = () => {
object_quantity4.textContent++
cart_counter2.textContent = Number(object_quantity.textContent) + Number(object_quantity1.textContent) + Number(object_quantity2.textContent) + Number(object_quantity3.textContent) + Number(object_quantity4.textContent)

let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'

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
     total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'
}

if (object_quantity.textContent >= 1) {
    total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'
}

let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'
    }

    if (object_quantity1.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'
    }

    let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
    let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
    let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
    let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
    let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'
    }

    if (object_quantity2.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'
    }

    let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
    let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
    let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
    let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
    let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'
    }

    if (object_quantity3.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'
    }

    let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
    let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
    let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
    let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
    let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

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
         total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'
    }

    if (object_quantity4.textContent >= 1) {
        total.textContent = 'Общий чек: ' + Number((object_quantity.textContent * fridge_arr[0].sale) + (object_quantity1.textContent * fridge_arr[1].sale) + (object_quantity2.textContent * fridge_arr[2].sale) + (object_quantity3.textContent * fridge_arr[3].sale) + (object_quantity4.textContent * fridge_arr[4].sale)) + '$'
    }

    let a = (fridge_arr[0].sale / 100 * fridge_arr[0].cashback) * object_quantity.textContent 
    let b = (fridge_arr[1].sale / 100 * fridge_arr[1].cashback) * object_quantity1.textContent 
    let c = (fridge_arr[2].sale / 100 * fridge_arr[2].cashback) * object_quantity2.textContent
    let d = (fridge_arr[3].sale / 100 * fridge_arr[3].cashback) * object_quantity3.textContent
    let e = (fridge_arr[4].sale / 100 * fridge_arr[4].cashback) * object_quantity4.textContent

    cashback.textContent = 'Общий кэшбэк: ' + parseFloat(a + b + c + d + e) + '$'
        cashback.textContent = cashback.textContent.substr(0, 20) 

    if(total.textContent.substr(11, 2) == '0$') {
        cashback.textContent = 'Общий кешбэк: 0$'
    }
}
// ------------------------

