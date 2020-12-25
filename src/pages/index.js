import './index.css';

import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';


const configValidator = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_inactive',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active'
  }

// профиль ------------
const userInfo = new UserInfo({
  selectorName: '.profile__info-name',
  selectorDescription: '.profile__info-description'
});

const formProfile = document.querySelector('form[name="form-profile"]');
// привяжем валидацию
const formProfileValidator = new FormValidator(configValidator, formProfile);
formProfileValidator.enableValidation();

//секция для добавления новых элементов -----------
const formElement = document.querySelector('form[name="form-elements"]');
// привяжем валидацию
const formElementValidator = new FormValidator(configValidator, formElement);
formElementValidator.enableValidation();

// image-popup ------------
const imagePopup = document.querySelector('.popup_image');
const configCard = {
  elementImageSelector: '.element__image',
  elementTitleSelector: '.element__title',
  elementLikeSelector: '.element__like',
  elementDeleteSelector: '.element__delete',
  likeActiveClass: 'element__like_active',

  imagePopup: imagePopup,  
  imageSelector: '.popup__img',
  captionSelector: '.popup__caption'
}

function createCard(item) {
  const card = new Card(item.link, item.name, imageShow, '#element', configCard);
  return card.generateCard()
} 

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

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
      cardList.addItem(createCard(item));
    }
  },
  '.elements'
);

// отрисовали карточки из массива
cardList.render();

//popupImage 
const popupImage = new PopupWithImage('.popup_image');
function imageShow(img, src) {
  popupImage.open(img, src);
} 

const elementPopup = new PopupWithForm({
  popupSelector: '.popup_element', 
  handleFormSubmit: (formData) => {
    cardList.addItem(createCard({link: formData.link, name: formData.title}), false);

    elementPopup.close();
  }
},'form[name="form-elements"]');

const profilePopup = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.description);
    profilePopup.close();
  }
}, 'form[name="form-profile"]')

document.querySelector('.profile__edit-button').addEventListener('click', function () {  
  const user = userInfo.getUserInfo();
  profilePopup.setInputValues(user);
  
  formProfileValidator.validateAfterOpen();

  profilePopup.open();
});

document.querySelector('.profile__add-button').addEventListener('click', function () {

  formElementValidator.validateAfterOpen();
  elementPopup.open();
});