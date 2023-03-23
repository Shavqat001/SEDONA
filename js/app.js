let interestForm = document.querySelector('.interest__form');
let interestButton = document.querySelector('.interest__button');
let interestSpan = interestForm.querySelector('.interest__form--arrival > input');

interestButton.onclick = () => {
    interestForm.classList.toggle('visually-hidden');
    interestSpan.focus();
}
interestForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
});