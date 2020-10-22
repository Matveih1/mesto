let popupForm = document.querySelector('.popup');

let editButton = document.querySelector('.edit-button');
let closeButton = document.querySelector('.popup__button-close');

let infoName = document.querySelector('.profile__info-name');
let nameInput = popupForm.querySelector('.popup__name-input');

// найдем форму
let formElement = popupForm.querySelector('.popup__container');


function editButtonClick() {

  popupForm.classList.add('popup_open');

  nameInput.value = infoName.textContent;
}

function closeButtonClick() {
  popupForm.classList.remove('popup_open');
}

// Обработаем отправку формы
function formSubmitHandler (evt) {
  evt.preventDefault(); // отменим стандартную отправку

  // присвоем значение
  infoName.textContent = nameInput.value;

}

editButton.addEventListener('click', editButtonClick); 
closeButton.addEventListener('click', closeButtonClick);

formElement.addEventListener('submit', formSubmitHandler); 
