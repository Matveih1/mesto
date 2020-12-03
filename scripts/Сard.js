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
      
      const popupImage = this._config.imagePopup.querySelector(this._config.imageSelector);

      popupImage.src = this._img;
      popupImage.alt = this._title;
      this._config.imagePopup.querySelector(this._config.captionSelector).textContent = this._title;

      this._imageShow(this._config.imagePopup);
    });
  }

  generateCard(config, imageShow) {
    // сохраним ссылку на поднятие popup
    this._imageShow = imageShow;

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
