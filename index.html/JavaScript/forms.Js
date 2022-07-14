const username = document.querySelector('#name')
const Password = document.querySelector('#Password')
const submit = document.getElementsByClassName('form_button')

form_btn.addEventListener('click', (event)=>{
    event.preventDefault();
    //USER NAME VALIDATION
    if(value.trim()=''){
        error('name can not be empty');
    }
})

function error(element,msg) {
    element.style.border = '3px red solid';
    const parent = element.parentElement;
    const p =parent.querySelector('p')
    p.textContent = msg;
    p.style.visibility = 'visible'

}