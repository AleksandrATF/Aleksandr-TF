let loginbutton = document.querySelector('.login-button');
let loginPopUp = document.querySelector('.login-popup');

loginbutton.addEventListener('click',showPopUp);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();


    loginPopUp.classList.toggle('show-popup');

};