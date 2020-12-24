import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor({popupSelector, handleFormSubmit}, elementForm) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._elementForm = this._popup.querySelector(elementForm);

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
    super.setEventListeners();
    this._elementForm.addEventListener('submit', this._formSubmit);
  }

  unsetEventListeners() {
    super.unsetEventListeners();
    this._elementForm.removeEventListener('submit', this._formSubmit);
  }

  // установим значения по умолчанию если надо
  setInputValues(formValues) {
    this._inputList.forEach(input => {
      input.value = formValues[input.name];
    })
  }

  close() {
    this._elementForm.reset();
    super.close();
  }

}

