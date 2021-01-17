
import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {

  constructor({popupSelector, elementForm}) {
    super(popupSelector)
    this._elementForm = this._popup.querySelector(elementForm);
    this._submitButton     = this._elementForm.querySelector('.popup__button-submit');
  }

  _formSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(); 
  }

  setEventListeners() {
    this._elementForm.addEventListener('submit', this._formSubmit);
  }

  setSubmitHandler(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }

  setSubmitText(submitText) {
    this._submitButton.textContent = submitText;
  }

}