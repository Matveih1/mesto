export default class FormValidator {
  
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;

    // сразу получим все импуты
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    // получим кнопку
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector)
  }


  // покажем ошибку
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  // спрячем ошибку
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    // валидируем введенные данные и подсказываем что не так
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // доступность кнопки сохранить
  _toggleButtonState () {
    if (!this._formElement.checkValidity()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners() {
    // на все импуты добавим реакцию на ввод
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        // провалидируем
        this._checkInputValidity(inputElement);
        // проверим доступность кнопки
        this._toggleButtonState();
      });
    });
  }

  // активация валидации
  enableValidation() {
    //установим слушателей
    this._setEventListeners();
  }

  //валидируем форму сразу после поднятия
  validateAfterOpen() {
    // идем по всем input и прячем возможные ошибки, если были
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    // проверяем доступность кнопки
    this._toggleButtonState();
  }

}


