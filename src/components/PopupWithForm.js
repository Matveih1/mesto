import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor({popupSelector, handleFormSubmit}, elementForm) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._elementForm      = this._popup.querySelector(elementForm);
    this._submitButton     = this._elementForm.querySelector('.popup__button-submit');

    this._inputList = this._elementForm.querySelectorAll('.popup__input');
    this._formValues = {};
  }

  _getInputValues() { 
    // добавляем в объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    // возвращаем объект значений
    return this._formValues;
  } 

  _formSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues()); 
  }

  setEventListeners() {
    this._elementForm.addEventListener('submit', this._formSubmit);
  }

  setInputValues(formValues) {
    this._inputList.forEach(input => {
      input.value = formValues[input.name];
    })
  }

  setSubmitText(submitText) {
    this._submitButton.textContent = submitText;
  }

}

