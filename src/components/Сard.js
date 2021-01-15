
export default class Card {
  constructor({item, curentUserId, handleCardClick, handleDeleteClick, handleLikeClick, cardSelector, config}){
    // this._img = item.link;
    // this._title = item.name;
    // this._likes = item.likes;
    this._item = item;
    this._curentUserId = curentUserId;

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

    this._cardSelector = cardSelector;
    this._config = config;

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
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });
    // добавим возможность удалять
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });
    // добавим возможность смотреть 
    this._element.querySelector(this._config.elementImageSelector).addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    // получим клонированный элемент для наполнения содержимым
    this._element = this._getTemplate();
    
    this._deleteButton = this._element.querySelector(this._config.elementDeleteSelector);
    this._likeCount = this._element.querySelector(this._config.elementLikeCountSelector);
    this._likeButton = this._element.querySelector(this._config.elementLikeSelector);
  
    const elementImage = this._element.querySelector(this._config.elementImageSelector);

    // наполним содержимым
    elementImage.src = this._item.link;
    elementImage.alt = this._item.name;
    this._element.querySelector(this._config.elementTitleSelector).textContent = this._item.name;

    // добавим возможность удалять только свои
    if (this._item.owner._id === this._curentUserId) {
      this._deleteButton.style.display = 'block';
    }

    // дорисуем лайки
    this.setLikeState(this._item.likes)

    
    
    this._setEventListeners(); // добавим обработчики
    // Вернём элемент наружу
    return this._element;
  } 

  deleteCard() {
    this._element.remove();
  }

  getLikeState() {
    return this._likeButton.classList.contains(this._config.likeActiveClass)
  }

  setLikeState(likes) {
    this._likeCount.textContent = likes.length;
    
    const meLike = likes.findIndex(like => like._id === this._curentUserId);

    if (meLike === -1) {
      this._likeButton.classList.remove(this._config.likeActiveClass);
    } else {
      this._likeButton.classList.add(this._config.likeActiveClass);
    }
  }
}
