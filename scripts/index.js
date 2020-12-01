import Card from './Сard.js';
import FormValidator from './FormValidator.js';

const configValidator = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_inactive',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active'
  }

// профиль ------------
const infoName = document.querySelector('.profile__info-name');
const infoDescription = document.querySelector('.profile__info-description');
const popupForm = document.querySelector('.popup_profile');
const formProfile = popupForm.querySelector('form[name="form-profile"]');
// привяжем валидацию
const formProfileValidator = new FormValidator(configValidator, formProfile);
formProfileValidator.enableValidation();

const nameInput = popupForm.querySelector('input[name="name"]');
const descriptionInput = popupForm.querySelector('input[name="description"]');

//секция для добавления новых элементов -----------
const elements = document.querySelector('.elements');
const popupElement = document.querySelector('.popup_element');
const formElement = popupElement.querySelector('form[name="form-elements"]');
// привяжем валидацию
const formElementValidator = new FormValidator(configValidator, formElement);
formElementValidator.enableValidation();

const titleElement = popupElement.querySelector('input[name="title"]');
const linkElement = popupElement.querySelector('input[name="link"]');

// image-popup ------------
const imagePopup = document.querySelector('.popup_image');
const popupImage = imagePopup.querySelector('.popup__img');
const popupCaption = imagePopup.querySelector('.popup__caption');



const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// откроем попап с картинкой
function imageShow(img, title) {
  popupImage.src = img;
  popupImage.alt = title;
  popupCaption.textContent = title;
  
  openPopup(imagePopup);
}

// добавим карточки из массива
initialCards.forEach((item) => {
  const card = new Card(item.link, item.name, '#element'); // передаём объект аргументом
  elements.append(card.generateCard(imageShow));
});

function pressEsc(evt) { 
  if (evt.key === 'Escape') { 
    closePopup(document.querySelector('.popup_open')); 
  } 
}

function overlayClick(evt) {
  if (evt.target.classList.contains('popup_open')) {
    closePopup(evt.target);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keyup', pressEsc);
  document.addEventListener('mousedown', overlayClick);
}

function closePopup (popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keyup', pressEsc);
  document.removeEventListener('mousedown', overlayClick);
}  



document.querySelector('.profile__edit-button').addEventListener('click', function () {
  nameInput.value = infoName.textContent;
  descriptionInput.value = infoDescription.textContent;

  formProfileValidator.validateAfterOpen();

  openPopup(popupForm);
});
popupForm.querySelector('.popup__button-close').addEventListener('click', function () {
  closePopup(popupForm)
});
formProfile.addEventListener('submit', function (evt ) {
  evt.preventDefault();

  // присвоем значение
  infoName.textContent = nameInput.value;
  infoDescription.textContent = descriptionInput.value;

  //закроем форму
  closePopup(popupForm);
}); 

document.querySelector('.profile__add-button').addEventListener('click', function () {
  // очистим форму
  linkElement.value = '';
  titleElement.value = '';

  formElementValidator.validateAfterOpen();
  
  // откроем форму
  openPopup(popupElement);
});
popupElement.querySelector('.popup__button-close').addEventListener('click', function () {
  closePopup(popupElement)
});
formElement.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const card = new Card(linkElement.value, titleElement.value, '#element'); // передаём объект аргументом
  elements.prepend(card.generateCard());
 // elements.prepend(getElement(linkElement.value, titleElement.value));

  closePopup(popupElement);
});

imagePopup.querySelector('.popup__button-close').addEventListener('click', function () {
  closePopup(imagePopup)
});

