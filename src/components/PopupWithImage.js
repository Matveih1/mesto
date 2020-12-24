import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open(img, src) {
    const imagePopup = document.querySelector('.popup_image');
    const popupImage = imagePopup.querySelector('.popup__img');

    popupImage.src = src;
    popupImage.alt = img;
    imagePopup.querySelector('.popup__caption').textContent = img;

    super.open();
  }
}