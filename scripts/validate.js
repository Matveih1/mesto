
// покажем ошибку
const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

// спрячем ошибку
const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

// валидируем введенные данные и подсказываем что не так
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

// проверим список импутов на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// доступность кнопки сохранить
const toggleButtonState = (inputList, buttonElement, inactiveClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveClass);
  } else {
    buttonElement.classList.remove(inactiveClass);
  }
};

//валидируем форму сразу после поднятия
const validateAfterOpen = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button-submit');

  inputList.forEach((inputElement) => {
    // спрячем возможные ошибки, если были
    hideInputError(formElement, inputElement, 'popup__input_error', 'popup__input-error_active');
  });

  toggleButtonState(inputList, buttonElement, 'popup__button-submit_inactive');
}

// повесим события на все импуты в форме
const setEventListeners = (formElement, valSettings) => {
  // получим список импутов для переданной формы
  const inputList = Array.from(formElement.querySelectorAll(valSettings.inputSelector));

  // получим кнопку submit формы
  const buttonElement = formElement.querySelector(valSettings.submitButtonSelector);

  // на все импуты добавим реакцию на ввод
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      // провалидируем
      checkInputValidity(formElement, inputElement, valSettings.inputErrorClass, valSettings.errorClass);
      // проверим доступность кнопки
      toggleButtonState(inputList, buttonElement, valSettings.inactiveButtonClass);
    });
  });
};

// активация валидации
const enableValidation = (valSettings) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(valSettings.formSelector));

  //уберем то что не используем
  delete valSettings.formSelector;
  
  // переберем полученный список
  formList.forEach((formElement) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement, valSettings);
  });
};

// активируем валидацию документа
enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
});
