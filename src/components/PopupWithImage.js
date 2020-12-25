import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__img');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  open(img, src) {
    this._popupImage.src = src;
    this._popupImage.alt = img;
    this._popupCaption.textContent = img;

    super.open();
  }
}