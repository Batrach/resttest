const popupTitle= document.getElementById('popupTitle')
const popupSubmit= document.getElementById('popupsubmit')
const popupForm = document.getElementById('pop_up_orange')

const inpTel = document.getElementById('inputPhone')
const inpMail = document.getElementById('inputMail')

popupSubmit.addEventListener('click', (e)=>{
    // e.preventDefault()
    const patternMail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    const patternPhone = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;

  if(patternMail.test(inpMail.value) && patternPhone.test(inpTel.value)){

    
    popupForm.classList.add('none')
    applicationForm.classList.remove('none')
  }else{
    alert('Заполните имейл и номер телефона в указанном формате')
  }
})
