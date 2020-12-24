export default class Card {
  constructor( link, title, handleCardClick, cardSelector ){
    this._img = link;
    this._title = title;
    this._handleCardClick = handleCardClick;
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
    const elementLike = this._element.querySelector(this._config.elementLikeSelector);
    elementLike.addEventListener('click', () => {
      elementLike.classList.toggle(this._config.likeActiveClass);
    });
    // добавим возможность удалять
    this._element.querySelector(this._config.elementDeleteSelector).addEventListener('click', () => {
      this._element.remove();
    });
    // добавим возможность смотреть 
    this._element.querySelector(this._config.elementImageSelector).addEventListener('click', () => {
      this._handleCardClick(this._title, this._img);
    });
  }

  generateCard(config) {
    this._config = config;

    // получим клонированный элемент для наполнения содержимым
    this._element = this._getTemplate();
    this._setEventListeners(); // добавим обработчики
  
    const elementImage = this._element.querySelector(this._config.elementImageSelector);

    // наполняем содержимым
    elementImage.src = this._img;
    elementImage.alt = this._title;
    this._element.querySelector(this._config.elementTitleSelector).textContent = this._title;

    // Вернём элемент наружу
    return this._element;
  } 


}
