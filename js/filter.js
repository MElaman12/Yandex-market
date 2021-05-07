// Цена товара 
let inpt = document.querySelector('#inpt')
let inpt2 = document.querySelector('.inpt')
// ----------------------------------------


// Sale/Скидка
let sale_yes = document.querySelector('.sale .yes')
let sale_no = document.querySelector('.sale .no')
// ----------------------------------------


// Warranty/Гарантия
let warranty_yes = document.querySelector('.warranty .yes') 
let warranty_no = document.querySelector('.warranty .no')
// ----------------------------------------

// Color/Цвет
let color_select = document.querySelectorAll('.color-select .item')

color_select[0].onclick = () => {
    color_select[0].classList.toggle('scale')
    color_select[1].classList.toggle('hide')
    color_select[2].classList.toggle('hide')

}

color_select[1].onclick = () => {
    color_select[1].classList.toggle('scale')
    color_select[0].classList.toggle('hide')
    color_select[2].classList.toggle('hide')

}
color_select[2].onclick = () => {
    color_select[2].classList.toggle('scale')
    color_select[0].classList.toggle('hide')
    color_select[1].classList.toggle('hide')

}
// ----------------------------------------

// Year/Год
let year = document.querySelector('form #year')
// ----------------------------------------


// Button Done/Кнопка готова || Button reset/Сбросить
let btn = document.querySelector('.buttons .btn')
let btn_reset = document.querySelector('.buttons .btn-reset')
// ----------------------------------------

// Block
let blocks = document.querySelectorAll('.block')
// ----------------------------------------


// ----------------------------------------
inpt.onkeydown = () => {
    if(inpt.value.length == 4 || inpt.value.length >= 4 ){
        alert('EROR 404 $)')
        inpt.value = inpt.value.slice(0, 3)
    }
}

inpt2.onkeydown = () => {
    if(inpt2.value.length == 4 || inpt2.value.length >= 4 ){
        alert('EROR 404 $)')
        inpt2.value = inpt2.value.slice(0, 3)
    }
}
// ----------------------------------------


// ----------------------------------------
performance.children[1].onclick = () => {
    performance.children[1].style.color = '#004dff'

    performance.children[1].classList.add('true')
    performance.children[2].classList.remove('true')
    performance.children[3].classList.remove('true')
    performance.children[4].classList.remove('true')
    performance.children[5].classList.remove('true')



    performance.children[2].style.color = '#696969'
    performance.children[3].style.color = '#696969'
    performance.children[4].style.color = '#696969'
    performance.children[5].style.color = '#696969'
}
performance.children[2].onclick = () => {
    performance.children[2].style.color = '#004dff'

    performance.children[2].classList.add('true')
    performance.children[1].classList.remove('true')
    performance.children[3].classList.remove('true')
    performance.children[4].classList.remove('true')
    performance.children[5].classList.remove('true')

    performance.children[1].style.color = '#696969'
    performance.children[3].style.color = '#696969'
    performance.children[4].style.color = '#696969'
    performance.children[5].style.color = '#696969'
}
performance.children[3].onclick = () => {
    performance.children[3].style.color = '#004dff'

    performance.children[3].classList.add('true')
    
    performance.children[2].classList.remove('true')
    performance.children[1].classList.remove('true')
    performance.children[4].classList.remove('true')
    performance.children[5].classList.remove('true')


    performance.children[2].style.color = '#696969'
    performance.children[1].style.color = '#696969'
    performance.children[4].style.color = '#696969'
    performance.children[5].style.color = '#696969'
}
performance.children[4].onclick = () => {
    performance.children[4].style.color = '#004dff'

    performance.children[4].classList.add('true')

    performance.children[2].classList.remove('true')
    performance.children[3].classList.remove('true')
    performance.children[1].classList.remove('true')
    performance.children[5].classList.remove('true')


    performance.children[2].style.color = '#696969'
    performance.children[3].style.color = '#696969'
    performance.children[1].style.color = '#696969'
    performance.children[5].style.color = '#696969'
}
performance.children[5].onclick = () => {
    performance.children[5].style.color = '#004dff'

    performance.children[5].classList.add('true')

    performance.children[2].classList.remove('true')
    performance.children[3].classList.remove('true')
    performance.children[4].classList.remove('true')
    performance.children[1].classList.remove('true')

    performance.children[2].style.color = '#696969'
    performance.children[3].style.color = '#696969'
    performance.children[4].style.color = '#696969'
    performance.children[1].style.color = '#696969'
}
// ----------------------------------------




// ----------------------------------------
sale_yes.onclick = () => {
    sale_yes.style.color = '#004dff'
    sale_no.style.color = '#696969'
}

sale_no.onclick = () => {
    sale_no.style.color = '#004dff'
    sale_yes.style.color = '#696969'
}
// ----------------------------------------


// ----------------------------------------
warranty_yes.onclick = () => {
    warranty_yes.style.color = '#004dff'
    warranty_no.style.color = '#696969'
}

warranty_no.onclick = () => {
    warranty_no.style.color = '#004dff'
    warranty_yes.style.color = '#696969'
}
// ----------------------------------------



// ----------------------------------------
let span = document.querySelectorAll('.item .span .span1')
// ----------------------------------------


// ----------------------------------------
btn.onclick = () => {


      for(let item of blocks){  
       for(let item2 of balance){
           item2.classList.add('hide');
            
               if (inpt2.value >=  item2.textContent.slice(0,3)){
               item2.classList.add('hide');

                if(item2.className == 'span3 balance hide'){

                if(block[0].children[0].children[1].children[1].children[0].className == 'span3 balance hide'){
                    block[0].classList.add('hide')

                }
                if(block[1].children[0].children[1].children[1].children[0].className == 'span3 balance hide'){
                    block[1].classList.add('hide')
                }

                if(block[2].children[0].children[1].children[1].children[0].className == 'span3 balance hide'){
                    block[2].classList.add('hide')
                }

                if(block[3].children[0].children[1].children[1].children[0].className == 'span3 balance hide'){
                    block[3].classList.add('hide')
                }

                if(block[4].children[0].children[1].children[1].children[0].className == 'span3 balance hide'){
                    block[4].classList.add('hide')
                }

                if(warranty_yes.style.color == 'rgb(0, 77, 255)'){ 
                    let hidden = document.querySelectorAll('.hidden')
                    for(let off of hidden){
                        off.classList.add('hide')
                    }
                }
            
                    if(warranty_no.style.color == 'rgb(0, 77, 255)'){ 
                            let show = document.querySelectorAll('.show')
                            for(let off of show){
                                off.classList.add('hide')
                            }
                        if(block[4].className == 'block block4 show'){
                            block4.classList.add('hide')
                        }    
                }   
                
            }


            if(performance.children[1].style.color == 'rgb(0, 77, 255)') {
                block[1].classList.add('hide')
                block[2].classList.add('hide')
                block[3].classList.add('hide')
                block[4].classList.add('hide')
            }
            if(performance.children[2].style.color == 'rgb(0, 77, 255)') {
                block[0].classList.add('hide')
                block[2].classList.add('hide')
                block[3].classList.add('hide')
                block[4].classList.add('hide')
            }
            if(performance.children[3].style.color == 'rgb(0, 77, 255)') {
                block[0].classList.add('hide')
                block[1].classList.add('hide')
                block[3].classList.add('hide')
                block[4].classList.add('hide')
            }
            
            if(performance.children[4].style.color == 'rgb(0, 77, 255)') {
                block[0].classList.add('hide')
                block[1].classList.add('hide')
                block[2].classList.add('hide')
                block[4].classList.add('hide')
            }

            if(performance.children[5].style.color == 'rgb(0, 77, 255)') {
                block[0].classList.add('hide')
                block[1].classList.add('hide')
                block[2].classList.add('hide')
                block[3].classList.add('hide')
            }

            if(sale_yes.style.color == 'rgb(0, 77, 255)'){
                block[1].classList.add('hide')
                block[4].classList.add('hide')
                block[3].classList.add('hide')
            }

            if(sale_no.style.color == 'rgb(0, 77, 255)'){
                block[0].classList.add('hide')
                block[3].classList.add('hide')
                block[2].classList.add('hide')
            }    

            
                        
            if (inpt.value >=  item2.textContent.slice(0,3) ){
            if(block[0].children[0].children[1].children[1].children[0].className == 'span3 balance hide'){
                block[0].classList.add('hide')
            }
            if(block[1].children[0].children[1].children[1].children[0].className == 'span3 balance hide'){
                block[1].classList.add('hide')
            }

            if(block[2].children[0].children[1].children[1].children[0].className == 'span3 balance hide'){
                block[2].classList.add('hide')
            }

            if(block[3].children[0].children[1].children[1].children[0].className == 'span3 balance hide'){
                block[3].classList.add('hide')
            }

            if(block[4].children[0].children[1].children[1].children[0].className == 'span3 balance hide'){
                block[4].classList.add('hide')
            }  
        }

        if(warranty_yes.style.color == 'rgb(0, 77, 255)'){ 
              let hidden = document.querySelectorAll('.hidden')
              for(let off of hidden){
                  off.classList.add('hide')
              }
          }
      
        
          if(warranty_no.style.color == 'rgb(0, 77, 255)'){ 
                      let show = document.querySelectorAll('.show')
                      for(let off of show){
                          off.classList.add('hide')
                      }
              }

                if(color_select[0].className == 'item scale'){
                    blocks[0].classList.add('hide')
                    blocks[2].classList.add('hide')
                }

                if(color_select[1].className == 'item scale'){
                    blocks[1].classList.add('hide')
                    blocks[3].classList.add('hide')
                }

                if(color_select[2].className == 'item scale'){
                    blocks[1].classList.add('hide')
                    blocks[2].classList.add('hide')
                    blocks[3].classList.add('hide')
                    blocks[4].classList.add('hide')
                }


            
                if(year.value == 2020){
                    blocks[0].classList.add('hide')
                    blocks[3].classList.add('hide')
                }

                if(year.value == 2018){
                    blocks[1].classList.add('hide')
                    blocks[4].classList.add('hide')
                }

                if(year.value == 2019){
                    blocks[2].classList.add('hide')
                }
            
               
}
            
       else{
          item.classList.remove('hide')
          item2.classList.remove('hide')
        }
      }
    }    
  }
// ----------------------------------------


// ----------------------------------------
btn_reset.onclick = () => {
    for(let item of blocks){  
        for(let item2 of balance){
            item.classList.remove('hide');
            item2.classList.remove('hide');
            inpt.value = '';
            inpt2.value = '';
            warranty_yes.style.color = '#696969'
            warranty_no.style.color = '#696969'
            sale_no.style.color = '#696969'
            sale_yes.style.color = '#696969'
            performance.children[0].style.color = 'rgb(105, 105, 105)'
            performance.children[1].style.color = 'rgb(105, 105, 105)'
            performance.children[2].style.color = 'rgb(105, 105, 105)'
            performance.children[3].style.color = 'rgb(105, 105, 105)'
            performance.children[4].style.color = 'rgb(105, 105, 105)'
            performance.children[5].style.color = 'rgb(105, 105, 105)'
        }
    }
}
// ----------------------------------------
