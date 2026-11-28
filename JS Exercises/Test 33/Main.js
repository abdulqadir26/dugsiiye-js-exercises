const header = document.querySelector('.header2');
console.log(header);

const Buttons = document.querySelectorAll('button');
console.log(Buttons);

const Texts = document.querySelector('#text');
console.log(Texts);



function ChangeContent() {
    header.textContent = 'WELCOME TO THE DOM (Mr Faatix)';

}
function ChangeElement() {
    Texts.innerHTML = `I am Triny to change this paragraph <strong> to do this Test </strong> Thank you for you change`;
    
}