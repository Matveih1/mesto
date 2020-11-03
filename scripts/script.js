let popupForm = document.querySelector('.popup');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');

let infoName = document.querySelector('.profile__info-name');
let nameInput = popupForm.querySelector('input[name="name"]');
let infoDescription = document.querySelector('.profile__info-description');
let descriptionInput = popupForm.querySelector('input[name="description"]');

// найдем форму
let formElement = popupForm.querySelector('.popup__container');

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

  // отображаем на странице в начало родителя
  elements.prepend(newElement); 
}


function editButtonClick() {

  popupForm.classList.add('popup_open');

  nameInput.value = infoName.textContent;
  descriptionInput.value = infoDescription.textContent;
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

editButton.addEventListener('click', editButtonClick); 
closeButton.addEventListener('click', closeButtonClick);

formElement.addEventListener('submit', formSubmitHandler); 
