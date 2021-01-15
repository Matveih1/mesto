
import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {

  constructor({popupSelector, elementForm}) {
    super(popupSelector)
    this._elementForm = this._popup.querySelector(elementForm);
  }

  _formSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(); 
  }

  setEventListeners() {
    super.setEventListeners();
    this._elementForm.addEventListener('submit', this._formSubmit);
  }

  unsetEventListeners() {
    super.unsetEventListeners();
    this._elementForm.removeEventListener('submit', this._formSubmit);
  }

  setSubmitHandler(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit;
  }

}