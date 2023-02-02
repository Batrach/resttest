let btnBurg = document.querySelector('.menu-btn--burger')
let nav = document.querySelector('.header__nav__mobile')
// let picture = document.querySelector('.main__animations')
// let body = document.querySelector('body')

btnBurg.addEventListener('click', function(e){
    e.preventDefault;
    if(btnBurg.classList.contains('menu-btn--burger_active')){
        btnBurg.classList.remove('menu-btn--burger_active')
        nav.style.transform = 'translateX(110%)'
        nav.style.display= 'flex'
        btnBurg.style.border = '1px solid black'
    }else{
        btnBurg.classList.add('menu-btn--burger_active')
        nav.style.display= 'flex'
        nav.style.transform = 'translateX(0)'
        btnBurg.style.border = '0px'
    }
})