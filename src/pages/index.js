import './index.css';

import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';


const configValidator = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_inactive',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active'
  }
const configCard = {
  elementImageSelector: '.element__image',
  elementTitleSelector: '.element__title',
  elementLikeSelector: '.element__like',
  elementLikeCountSelector: '.element__like-count',
  elementDeleteSelector: '.element__delete',
  likeActiveClass: 'element__like_active',

  imagePopup: imagePopup,  
  imageSelector: '.popup__img',
  captionSelector: '.popup__caption'
}

// профиль ------------
const userInfo = new UserInfo({
  selectorName: '.profile__info-name',
  selectorDescription: '.profile__info-description',
  selectorAvatar: '.profile__avatar'
});

const formProfile = document.querySelector('form[name="form-profile"]');
const formProfileValidator = new FormValidator(configValidator, formProfile);
formProfileValidator.enableValidation();

const formAvatar = document.querySelector('form[name="form-avatar"]');
const formAvatarValidator = new FormValidator(configValidator, formAvatar);
formAvatarValidator.enableValidation();

//секция для добавления новых элементов -----------
const formElement = document.querySelector('form[name="form-elements"]');
const formElementValidator = new FormValidator(configValidator, formElement);
formElementValidator.enableValidation();


// Форма показа картинки 
const popupImage = new PopupWithImage('.popup_image');
// Форма удаление картинки
const popupDelete = new PopupWithDelete({
  popupSelector: '.popup_image-delete',
  elementForm: 'form[name="form-delete"]' 
});

// image-popup ------------
const imagePopup = document.querySelector('.popup_image');



const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
  headers: {
    authorization: 'eb682221-dbec-4c2b-8eb8-60ab601a29cb',
    'Content-Type': 'application/json'
  }
}); 

api.getInitialUser()
  .then(res => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
    const userId = res._id;

    function createCard(item) {
      const card = new Card({
        item: item, 
        curentUserId: userId,
        handleCardClick: () => {
          popupImage.open(item.name, item.link);
        },
        handleDeleteClick: () => {
          popupDelete.setSubmitHandler(() => {
            api.deleteCard(item._id)
              .then(() => {
                card.deleteCard();
                popupDelete.close();
              })
              .catch(err => console.log(err))
          })
          popupDelete.open();
        },
        handleLikeClick: () => {
          if (card.getLikeState()) {
            api.dislikeCard(item._id)
              .then(res => card.setLikeState(res.likes))
              .catch(err => console.log(err));
          } else {
            api.likeCard(item._id)
              .then(res => card.setLikeState(res.likes))
              .catch(err => console.log(err));
          }
        },
        cardSelector: '#element', 
        config: configCard
      });
    
      return card.generateCard()
    } 

    api.getInitialCards() 
      .then(res => {
        const cardList = new Section({
          items: res,
          renderer: (item) => {
              cardList.addItem(createCard(item));
            }
          },
          '.elements'
        );
        
        cardList.render(); // отрисовали карточки

        const elementPopup = new PopupWithForm({
          popupSelector: '.popup_element', 
          submitWaitText: 'Сохранение...',
          submitActionText: 'Создать',
          handleFormSubmit: (formData) => {
            api.addNewCard(formData)
              .then(result => {
                console.log(result);
                cardList.addItem(createCard(result), false);
                console.log('www');
                elementPopup.close();
              })
              .catch(err => showError(err));
          }
        },'form[name="form-elements"]');
    
        document.querySelector('.profile__add-button').addEventListener('click', function () {
    
          formElementValidator.validateAfterOpen();
          elementPopup.open();
        });
      })
      .catch(err => console.log(err));    
  })
  .catch(err => console.log(err));


const profilePopup = new PopupWithForm({
  popupSelector: '.popup_profile',
  submitWaitText: 'Сохранение...',
  submitActionText: 'Сохранить',
  handleFormSubmit: (formData) => {
    api.updateUserInfo(formData)
      .then(result => {
        userInfo.setUserInfo(result.name, result.about, result.avatar)
        profilePopup.close();
      })
      .catch(err => console.log(err));
  }
}, 'form[name="form-profile"]')

const avatarPopup = new PopupWithForm({
  popupSelector: '.popup_avatar',
  submitWaitText: 'Сохранение...',
  submitActionText: 'Сохранить',
  handleFormSubmit: (formData) => {
    api.patchAvatar(formData.avatar)
      .then(res => {
        userInfo.setAvatar(res.avatar);
        avatarPopup.close();
      })
      .catch(err => console.log(err));
  }
}, 'form[name="form-avatar"]');

document.querySelector('.profile__edit-button').addEventListener('click', function () {  
  const user = userInfo.getUserInfo();
  profilePopup.setInputValues(user);
  
  formProfileValidator.validateAfterOpen();

  profilePopup.open();
});

document.querySelector('.profile__avatar-button').addEventListener('click', function() {
  formAvatarValidator.validateAfterOpen();
  avatarPopup.open();
})
