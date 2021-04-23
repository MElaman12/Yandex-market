let categories = [
    { id: 1, name: 'Телефоны', img: 'https://avatars.mds.yandex.net/get-mpic/4076910/img_id3325122176538221318.png/8hq' },
    { id: 2, name: 'Холодильники', img: 'https://avatars.mds.yandex.net/get-mpic/1901070/img_id4851551715385398106.jpeg/orig' },
    { id: 3, name: 'Наушники', img: 'https://avatars.mds.yandex.net/get-mpic/1345185/img_id6034376855641906512.jpeg/8hq' },
    { id: 4, name: 'Ноутбуки', img: 'https://www.apple.com/v/mac/home/bc/images/overview/compare/macbook_pro_16__x90efpvdutu6_large.jpg' },
    { id: 5, name: 'Телевизоры', img: 'https://avatars.mds.yandex.net/get-mpic/4412310/img_id387231736494264950.jpeg/8hq' },
    { id: 6, name: 'Мониторы', img: 'https://cdn.shopify.com/s/files/1/0292/5975/9756/t/15/assets/new_front_angle_1024x.png?v=15295455487753216210' }
]

let brands = [
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'Xiaomi' },
    { id: 3, name: 'Apple' },
    { id: 4, name: 'Sony' },
    { id: 5, name: 'Bosch' },
    { id: 6, name: 'LG' },
    { id: 7, name: 'Artel' }
]

let phone_arr = [    {
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 1,
    name: 'Galaxy S20 Ultra 5G',
    colors: ['black', 'blue'],
    price: 1299,
    year: 2020,
    sale: 5,
    warranty: true,
    cashback: 7,
    img: 'https://images.samsung.com/uz_ru/smartphones/galaxy-s20/images/galaxy-s20_highlights_design_default-gray-03.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 1,
    name: "Galaxy A51",
    colors: ['grey'],
    price: 720,
    year: 2018,
    sale: 5,
    warranty: true,
    cashback: 20,
    img: 'data:image/jpeg;base64,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'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 1,
    name: "iPhone XR",
    colors: ['black', 'grey'],
    price: 1050,
    year: 2019,
    sale: 4000000,
    warranty: true,
    cashback: 10,
    img: 'data:image/jpeg;base64,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'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 1,
    name: "Poco X3 NFC",
    colors: ['black', 'grey'],
    price: 1050,
    year: 2020,
    sale: 3300000,
    warranty: true,
    cashback: 5,
    img: 'data:image/jpeg;base64,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'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 1,
    name: "Velvet",
    colors: ['black', 'white'],
    price: 490.5,
    year: 2021,
    sale: 1400000,
    warranty: true,
    cashback: 0,
    img: 'data:image/jpeg;base64,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'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 1,
    name: "6300",
    colors: ['white'],
    price: 230,
    year: 2010,
    sale: 999999999,
    warranty: true,
    cashback: 0,
    img: 'https://lh3.googleusercontent.com/proxy/3BytP1WlkEHde807dBJHr_Tn0q5z6VOS9CLQAhR3-u0t9iquPUEWsIzx3d_R8ag_hX_w2VyFTArOMkvQn4IvUjLYYsUfaiwLXzgpPsqVe5tVsAwtiVKN-RdwvHBY1sb-QJHsSLrfJzo'
}
];

let monitor_arr = [{
    id: Math.random().toString().slice(2, 10),
    brand: 6,
    category: 6,
    name: "27GL650F 27",
    price: 629,
    colors: ["black"],
    year: 2019,
    sale: 10,
    warranty: 1,
    cashback:4 ,
    img: "https://www.e-katalog.ru/jpg_zoom1/1640202.jpg"
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 6,
    name: "Samsung C24F390F 24",
    price: 629,
    colors: ["black", 'white'],
    year: 2017,
    sale: 12,
    warranty: 2,
    cashback: 5,
    img: "https://www.e-katalog.ru/jpg_zoom1/770743.jpg"
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 5,
    category: 6,
    name: "AOC C24G2AE 24",
    price: 629,
    colors: ["black"],
    year: 2020,
    sale: 5,
    warranty: 3,
    cashback: 2,
    img: "https://www.e-katalog.ru/jpg_zoom1/1923014.jpg"
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 4,
    category: 6,
    name: "Philips 243B1JH 24",
    price: 629,
    colors: ["black", 'white'],
    year: 2021,
    sale: 7,
    warranty: 1,
    cashback: 7,
    img: "https://www.e-katalog.ru/jpg_zoom1/1963997.jpg"
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 6,
    name: "Aorus FI27Q-X 27 ",
    price: 890,
    colors: ["black", 'grey'],
    year: 2021,
    sale: 14,
    warranty: 4,
    cashback: 10,
    img: "https://www.e-katalog.ru/jpg_zoom1/1989936.jpg"
}
];

let laptop_arr = [ {
    id: Math.random().toString().slice(2, 10),
    brand: 2,
    category: 4,
    name: "Extensa",
    color: ['black'],
    year: 2019,
    price: 1849.95,
    sale: 25,
    warranty: 1,
    cashback: 10,
    img: 'https://cdn.svyaznoy.ru/upload/iblock/261/287299.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    name: "Probook",
    category: 4,
    color: ['grey', 'white'],
    year: 2018,
    price: 1499,
    sale: 25,
    warranty: 1,
    cashback: 20,
    img: 'https://cdn.svyaznoy.ru/upload/iblock/dbd/dos_1122207.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 6,
    name: "Thinkpad",
    category: "computers",
    color: ['black'],
    year: 2016,
    price: 1050,
    sale: 50,
    warranty: 1,
    cashback: 10,
    img: 'https://trudogolik24.ru/pic/tov/bc/20200522142322927.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 6,
    name: "Toshiba Satellite",
    category: 4,
    color: "white",
    year: 2014,
    sale: 25,
    warranty: 1,
    cashback: 10,
    img: 'https://gigapower.ru/wp-content/uploads/toshiba-satellite-c50-a-l2w.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    name: "Galaxy S9",
    category: 4,
    color: ['grey', 'black', 'white'],
    year: 2019,
    sale: 10,
    warranty: 1,
    cashback: 10,
    img: 'https://megaobzor.com/uploads/stories/135284/samsung-notebook-9-pen-1.jpg'
}
];


// Телевизоры
let tv_arr = [{
    id: Math.random().toString().slice(2, 10),
    brand:  1,
    category: 5,
    name: "Led 43 Full Hd",
    colors: ['black', 'grey'],
    price: 600,
    year: 2020,
    sale: 12,
    warranty: 3,
    cashback: 9,
    img: 'https://lh3.googleusercontent.com/proxy/2OwmFP-CA05ECrjwhAoZnVKibnEkuHL3QmuB-eQFJgqXAJ6T73TEIRjUW4-LuU5x3VkCzmRVIJR1-CZant_OYftkV8cZGpqc8CsNjCygSRlAv1yTcBbdDpl6'
},
{
    id: Math.random().toString().slice(2, 10),
    brand:  2,
    category: 5,
    name: "Xiaomi MI Tv 2 55",
    colors: "white",
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
    name: "Apple Tv 4K",
    colors: ["white",'black','grey'],
    year: 2021,
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
    name: "Artel Tv 32 AH90G Smart Led",
    colors: "black",
    year: 2019,
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
    name: "Sony KD-43XG8096 4K UHD Smart Tv",
    colors: ["white","grey"],
    year: 2019,
    price: 645,
    sale: 14,
    warranty: 2.5,
    cashback: 10,
    img: 'https://assets.asaxiy.uz/product/items/desktop/c81e728d9d4c2f636f067f89cc14862c2020042516385123988DxOON2dM7n.jpg'
}
];


// Холодильники


// Наушники 
let headphones = [ {
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 3,
    name: 'Samsung Buds',
    colors: ['white', 'gray'],
    year: 2020,
    sale: 100000,
    warranty: 2,
    cashback: 5,
    img: 'https://images.samsung.com/is/image/samsung/uz_ru/galaxy-note20/gallery/uz-ru-galaxy-buds-live-r180-sm-r180nzkacac-casetopcombinationmysticblack-thumb-278153862?$LazyLoad_Home_IMG$'
},

{
    id: Math.random().toString().slice(2, 10),
    brand: 2,
    category: 3,
    name: 'Xiaomi Redmi AirDots 2',
    colors: 'black',
    year: 2020,
    sale: 450000,
    warranty: 1,
    cashback: 5,
    img: 'https://ru-mi.com/image/cache/data/Tovari/Naushnikiikolonki/bluetooth/redmi_airdots/xiaomi_redmi_airdots_2_true_wireless_bluetooth_headset/xiaomi_redmi_airdots_2_true_wireless_bluetooth_headset_ava_1-800x800_wmark.jpg'
},

{
    id: Math.random().toString().slice(2, 10),
    brand: 3,
    category: 3,
    name: 'Apple AirPods Pro',
    colors:  ['gray', 'white', 'black'],
    year: 2021,
    sale: 200,
    warranty: 2,
    cashback: 5,
    img: 'https://allbazar.top/upload/iblock/76a/76adc86535881404693076ec6472d54a.jpg'
},

{
    id: Math.random().toString().slice(2, 10),
    brand: 4,
    category: 3,
    name: 'WH-XB900 Blue',
    colors: 'white',
    year: 2021,
    sale: 170,
    warranty: 2,
    cashback: 5,
    img: 'https://radius.uz/upload/iblock/147/147ec629b95b1abe9ca71da2dcbe2ef3.jpg'
},

{
    id: Math.random().toString().slice(2, 10),
    brand: 5,
    category: 3,
    name: 'Bosch LBB3443/00',
    colors: ["black", "gray"],
    year: 2021,
    sale: 90,
    warranty: 1,
    cashback: 5,
    img: 'https://img.layta.ru/bosch-lbb3443-00-0.resize1.jpeg'
},

{
    id: Math.random().toString().slice(2, 10),
    brand: 6,
    category: 3,
    name: 'Lg Tone Active HBS-A80',
    colors: ['white', 'black'],
    year: 2020,
    sale: 500000,
    warranty: 1,
    cashback: 5,
    img: 'data:image/jpeg;base64,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'
}
];


let fridge_arr = [{
    id: Math.random().toString().slice(2, 10),
    brand: 1,
    category: 2,
    name: 'Samsung_Fridge',
    colors: 1,
    year: 2020,
    sale: '600$',
    warranty: true,
    cashback: 7,
    img:'https://www.appliancesonline.com.au/public/images/reusableicons/category-images-All-fridgescategory-row-tile.jpeg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 2,
    category: 2,
    name: 'Xiaomi_Fridge',
    colors: 2,
    year: 2021,
    sale: '490$',
    warranty: false,
    cashback: 4,
    img:'https://www.hificorp.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10114206_DEFY_437LT_FRIDGE_FREEZER_WD_METALLIC_INOX_DAC700_124c.jpg'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 3,
    category: 2,
    name: 'Apple_Fridge',
    colors: 2,
    year: 2014,
    sale: '520$',
    warranty: false,
    cashback: 6,
    img:'https://www.smeg.com/binaries/content/gallery/smeg-unitedkingdom/categories/refrigeration/fq60x2peai-600x600.jpg/fq60x2peai-600x600.jpg/brx%3AsquareMobile'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 4,
    category: 2,
    name: 'Sony_Fridge',
    colors: 3,
    year: 2010,
    sale: '300$',
    warranty: true,
    cashback: 3,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJVPbD4VxJN3pkvsOL_KSDQQEawhc6pX9PQ&usqp=CAU'
},
{
    id: Math.random().toString().slice(2, 10),
    brand: 5,
    category: 2,
    name: 'Bosch_Fridge',
    colors: 3,
    year: 2013,
    sale: '450$',
    warranty: true,
    cashback: 4,
    img:'https://i1.adis.ws/s/euronics/458R5017W-ms/Catalogue/Refrigeration/Larder-Fridges/Freestanding-Larder-Fridges/Under-Counter-Larder-Fridges/Lec-R5017W-50cm-Undercounter-Fridge---White.jpg?locale=en-GB,en-*,*&$product$'
}
];

let box = document.querySelector('.box')

let performance = document.querySelector('.performance ')
    performance.children[1].innerText = brands[1].name 
    performance.children[2].innerText = brands[2].name 
    performance.children[3].innerText = brands[3].name 
    performance.children[4].innerText = brands[4].name  

let h3 = document.querySelectorAll('.top h3')    
    h3[0].innerText = fridge_arr[0].name
    h3[1].innerText = fridge_arr[1].name
    h3[2].innerText = fridge_arr[2].name
    h3[3].innerText = fridge_arr[3].name
    h3[4].innerText = fridge_arr[4].name

let box_img = document.querySelectorAll('.box-img')    
    box_img[0].setAttribute('src', fridge_arr[0].img)
    box_img[1].setAttribute('src', fridge_arr[1].img)
    box_img[2].setAttribute('src', fridge_arr[2].img)
    box_img[3].setAttribute('src', fridge_arr[3].img)
    box_img[4].setAttribute('src', fridge_arr[4].img)


let balance = document.querySelectorAll('.balance')  
    balance[0].innerText = fridge_arr[0].sale
    balance[1].innerText = fridge_arr[1].sale
    balance[2].innerText = fridge_arr[2].sale
    balance[3].innerText = fridge_arr[3].sale
    balance[4].innerText = fridge_arr[4].sale