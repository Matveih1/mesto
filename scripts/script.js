const popupForm = document.querySelector('.popup');

const editButton = document.querySelector('.profile__edit-button');
const closeButton = popupForm.querySelector('.popup__button-close');

const infoName = document.querySelector('.profile__info-name');
const nameInput = popupForm.querySelector('input[name="name"]');
const infoDescription = document.querySelector('.profile__info-description');
const descriptionInput = popupForm.querySelector('input[name="description"]');

// найдем форму
const formProfile = popupForm.querySelector('.popup__container');


// найдем кнопку для добавления новых элементов
const addButton = document.querySelector('.profile__add-button');
// найдем нужный popup
const popupElement = document.querySelector('.element-popup');
const formElement = popupElement.querySelector('form[name="form-elements"]');
const closeButtonElement = popupElement.querySelector('.element-popup__button-close');
const titleElement = formElement.querySelector('input[name="title"]');
const linkElement = formElement.querySelector('input[name="link"]');

// image-popup
const imagePopup = document.querySelector('.image-popup');
const imagePopupButtonClose = imagePopup.querySelector('.image-popup__button-close');



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

// добавим элементы из массива
initialCards.forEach((item) => {
  addElement(item.link, item.name);
});

function addElement (img, title) {
  // получим содержимое template для клонирования
  const elementTemplate = document.querySelector('#element').content;
  // найдем родителя в которого будем клонировать
  const elements = document.querySelector('.elements');

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
    const popupImage = imagePopup.querySelector('.image-popup__img');
    
    popupImage.src = img;
    popupImage.alt = title;
    imagePopup.querySelector('.image-popup__caption').textContent = title;
    
    imagePopup.classList.add('image-popup_open');
  });

  // отображаем на странице в начало родителя
  elements.prepend(newElement); 
}

function editButtonClick() {
  nameInput.value = infoName.textContent;
  descriptionInput.value = infoDescription.textContent;

  popupForm.classList.add('popup_open');
}

function closeButtonClick() {
  popupForm.classList.remove('popup_open');
}

// Обработаем отправку формы
function formSubmitHandler (evt) {
  evt.preventDefault(); // отменим стандартную отправку

  // присвоем значение
  infoName.textContent = nameInput.value;
  infoDescription.textContent = descriptionInput.value;

  //закроем форму
  closeButtonClick();
}

// Работа с формой добавления элементов
function addButtonClick () {
  // очистим форму
  linkElement.value = '';
  titleElement.value = '';
  
  // откроем форму
  popupElement.classList.add('element-popup_open');
}

function closeButtonElementClick () {
  popupElement.classList.remove('element-popup_open');
}

function formElementSubmit (evt) {
  evt.preventDefault(); // отменим стандартную отправку

  addElement(linkElement.value, titleElement.value);

  closeButtonElementClick();
}


function imagePopupClose() {
  imagePopup.classList.remove('image-popup_open');
}


// добавим прослушку событий
editButton.addEventListener('click', editButtonClick); 
closeButton.addEventListener('click', closeButtonClick);
formProfile.addEventListener('submit', formSubmitHandler); 

addButton.addEventListener('click', addButtonClick);
closeButtonElement.addEventListener('click', closeButtonElementClick);
formElement.addEventListener('submit', formElementSubmit);

imagePopupButtonClose.addEventListener('click', imagePopupClose);

