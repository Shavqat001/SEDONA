let interestForm = document.querySelector('.interest__form');
let interestButton = document.querySelector('.interest__button');

interestButton.onclick = function () { 
    interestForm.classList.toggle('visually-hidden');
}