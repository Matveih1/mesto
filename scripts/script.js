// профиль
const infoName = document.querySelector('.profile__info-name');
const infoDescription = document.querySelector('.profile__info-description');
const popupForm = document.querySelector('.popup_profile');
const formProfile = popupForm.querySelector('form[name="form-profile"]');
const nameInput = popupForm.querySelector('input[name="name"]');
const descriptionInput = popupForm.querySelector('input[name="description"]');

//секция для добавления новых элементов
const elements = document.querySelector('.elements');
const popupElement = document.querySelector('.popup_element');
const formElement = popupElement.querySelector('form[name="form-elements"]');
const titleElement = popupElement.querySelector('input[name="title"]');
const linkElement = popupElement.querySelector('input[name="link"]');

// image-popup
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

const getElement = (img, title) => {
  // получим содержимое template для клонирования
  const elementTemplate = document.querySelector('#element').content;
  // клонируем содержимое тега template
  const newElement = elementTemplate.cloneNode(true);

  // наполняем содержимым
  newElement.querySelector('.element__image').src = img;
  newElement.querySelector('.element__image').alt = title;
  newElement.querySelector('.element__title').textContent = title;

  // оживим like
  newElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  // добавим возможность удалять
  newElement.querySelector('.element__delete').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });

  // откроем картинку
  newElement.querySelector('.element__image').addEventListener('click', function (evt) {
    popupImage.src = img;
    popupImage.alt = title;
    popupCaption.textContent = title;
    
    openPopup(imagePopup);
  });

  return newElement;
}

// добавим элементы из массива
initialCards.forEach((item) => {
  elements.append(getElement(item.link, item.name))
});

function openPopup(popup) {
  popup.classList.add('popup_open');
}

function closePopup (popup) {
  popup.classList.remove('popup_open');
}  



// добавим обработку событий
document.querySelector('.profile__edit-button').addEventListener('click', function () {
  nameInput.value = infoName.textContent;
  descriptionInput.value = infoDescription.textContent;

  validateAfterOpen(formProfile);

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
popupForm.addEventListener('mousedown', function(evt) {
  if (evt.target === popupForm) {
    closePopup(popupForm);
  }
})

document.querySelector('.profile__add-button').addEventListener('click', function () {
  // очистим форму
  linkElement.value = '';
  titleElement.value = '';

  validateAfterOpen(formElement);
  
  // откроем форму
  openPopup(popupElement);
});
popupElement.querySelector('.popup__button-close').addEventListener('click', function () {
  closePopup(popupElement)
});
formElement.addEventListener('submit', function(evt) {
  evt.preventDefault();

  elements.prepend(getElement(linkElement.value, titleElement.value));

  closePopup(popupElement);
});
popupElement.addEventListener('mousedown', function(evt) {
  if (evt.target === popupElement) {
    closePopup(popupElement);
  }
})


imagePopup.querySelector('.popup__button-close').addEventListener('click', function () {
  closePopup(imagePopup)
});
imagePopup.addEventListener('mousedown', function(evt) {
  if (evt.target === imagePopup) {
    closePopup(imagePopup);
  }
})
imagePopup.addEventListener('keydown', function(evt) {
  console.log('я тут');
  if (evt.key === "Esc") {
    console.log('теперь тут');
    closePopup(imagePopup);
  }
})


