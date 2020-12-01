export default class Card {
  constructor(link, title, cardSelector ){
    this._img = link;
    this._title = title;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    // найдем нужный template и клонируем содержимое
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  
    return cardElement;
  }

  _setEventListeners() {
    // оживим like
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    });
    // добавим возможность удалять
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._element.remove();
    });
    // добавим возможность смотреть 
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._imageShow(this._img, this._title);
    });
  }

  generateCard(imageShow) {
    // сохраним ссылку на поднятие popup
    this._imageShow = imageShow;

    // получим клонированный элемент для наполнения содержимым
    this._element = this._getTemplate();
    this._setEventListeners(); // добавим обработчики
  
    const elementImage = this._element.querySelector('.element__image');

    // наполняем содержимым
    elementImage.src = this._img;
    elementImage.alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;

    // Вернём элемент наружу
    return this._element;
  } 


}
