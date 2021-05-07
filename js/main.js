// Search -------------------
let search = document.querySelector('.search')
let find_btn = document.querySelector('.find')
let items = document.querySelectorAll('.block .top h3')
let block = document.querySelectorAll('.block')
let block4 = document.querySelector('.block4')

find_btn.onclick = () => {
    event.preventDefault();

    let val = search.value.trim();
    
    if(val != '') {
        items.forEach(function(elem){

           if(elem.innerText.search(val) == -1){
               elem.innerHTML = elem.innerText;
               elem.classList.add('hide')

            
               if (block[0].children[0].children[0].className == 'hide') {
                   block[0].classList.add('hide')
               } 

               if (block[1].children[0].children[0].className == 'hide') {
                   block[1].classList.add('hide')
               } 

               if (block[2].children[0].children[0].className == 'hide') {
                block[2].classList.add('hide')
               } 

               if (block[3].children[0].children[0].className == 'hide') {
                block[3].classList.add('hide')
            }

            if (block[4].children[0].children[0].className == 'hide') {
                block4.classList.add('hide')
            }

            if(search.value === 'Bosch' || search.value === 'Bos' || search.value === 'Bosch_Fridge' || search.value === 'Bo' || search.value === 'sch') {
                block[0].classList.add('hide')
                block[1].classList.add('hide')
                block[2].classList.add('hide')
                block[3].classList.add('hide')

                block4.classList.remove('hide')
                items[4].classList.remove('hide')
            }

          
        }        
                
    else {  
        let str1 = elem.innerText;
        
        
        if (block[0].children[0].children[0].className == 'hide') {
         block[0].classList.remove('hide')
        }
    
        if (block[1].children[0].children[0].className == 'hide') {
         block[1].classList.remove('hide')
        }
        if(block[2].children[0].children[0].className == 'hide') {
         block[2].classList.remove('hide')
        }
         if (block[3].children[0].children[0].className == 'hide') {
         block[3].classList.remove('hide')
        }
    
       if (block4.children[0].children[0].className == 'hide') {
         block4.classList.remove('hide')
         block4.children[0].children[0].classList.remove('hide')
        }

        if(search.value === 'Bosch' || search.value === 'B' || search.value === 'Bos' || search.value === 'Bosch_Fridge' || search.value === 'Bo' || search.value === 'sch') {
            block[0].classList.add('hide')
            block[1].classList.add('hide')
            block[2].classList.add('hide')
            block[3].classList.add('hide')

            block4.classList.remove('hide')
            items[4].classList.remove('hide')
        }
        if(search.value == 'A' ){
            block[0].classList.add('hide')
            block[1].classList.add('hide')
            block[3].classList.add('hide')
           }
        elem.innerHTML = mark(str1, elem.innerText.search(val), val.length);
        elem.classList.remove('hide')
    }
});
        
    } 
    // 
    else{
        items.forEach(function (elem) {
            elem.classList.remove('hide')
            elem.innerHTML = elem.innerText;
            block[0].classList.remove('hide')
            block[0].children[0].children[0].classList.remove('hide')

            block[1].classList.remove('hide')
            block[1].children[0].children[0].classList.remove('hide')
            
            block[2].classList.remove('hide')
            block[2].children[0].children[0].classList.remove('hide')

            block[3].classList.remove('hide')
            block[3].children[0].children[0].classList.remove('hide')
            
            block[4].classList.remove('hide')
            block[4].children[0].children[0].classList.remove('hide')   
        });
    }
}

let mark = (str, pos, len) => {
    return str.slice(0, pos) + '<mark>' + str.slice(pos, pos+len) + '</mark>' + str.slice(pos+len);
}
