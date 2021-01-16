
export default class Popup {

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') { 
      this.close(); 
    } 
  }

  _click = (evt) => {
    if (evt.target.classList.contains('popup_open') || 
        evt.target.classList.contains('popup__button-close')) {
      this.close();
    }
  }

  _setEventListeners() {
    document.addEventListener('keyup', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._click);
  }

  _unsetEventListeners() {
    document.removeEventListener('keyup', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._click);
  }

  open() {
    this._popup.classList.add('popup_open');
    this._setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_open');
    this._unsetEventListeners();
  }

}