// Search -------------------
let search = document.querySelector('.search')
let find_btn = document.querySelector('.find')
let items = document.querySelectorAll('.block')

find_btn.onclick = () => {
    event.preventDefault();

    let val = search.value.trim();
 
    if(val != '') {
        items.forEach(function(elem){
           if(elem.innerText.search(val) == -1){
               elem.classList.add('hide')
               if (elem.getAttribute('class' == 'hide')) {
                   
               }
               elem.innerHTML = elem.innerText;
           } 
           else{
               elem.classList.remove('hide')
               let str1 = elem.innerText;
               elem.innerHTML = mark(str1, elem.innerText.search(val), val.length);
           }
        });
        
    } else{
        items.forEach(function (elem) {
            elem.classList.remove('hide')
            elem.innerHTML = elem.innerText;
        });
    }
}

let mark = (str, pos, len) => {
    return str.slice(0, pos) + '<mark>' + str.slice(pos, pos+len) + '</mark>' + str.slice(pos+len);
}
