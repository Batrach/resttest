const openPopUp = document.getElementById('open_pop_up_orange');
const closePopUp = document.getElementById('pop_up_close_orange')
const popUp = document.getElementById('pop_up_orange')

openPopUp.addEventListener('click', function(e){
    e.preventDefault()
    popUp.classList.remove('none')
    popUp.classList.add('active_orange');
    })
closePopUp.addEventListener('click', ()=>{
    popUp.classList.remove('active_orange')
})
