
// покажем ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

// спрячем ошибку
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

// валидируем введенные данные и подсказываем что не так
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// проверим список импутов на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// доступность кнопки сохранить
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button-submit_inactive');
  } else {
    buttonElement.classList.remove('popup__button-submit_inactive');
  }
};

//валидируем форму сразу после поднятия
const validateAfterOpen = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button-submit');

  inputList.forEach((inputElement) => {
    // спрячем возможные ошибки, если были
    hideInputError(formElement, inputElement);
  });

  toggleButtonState(inputList, buttonElement);
}

// повесим события на все импуты в форме
const setEventListeners = (formElement) => {
  // получим список импутов для переданной формы
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

  // получим кнопку submit формы
  const buttonElement = formElement.querySelector('.popup__button-submit');
  // проверим кнопку на доступность
  //toggleButtonState(inputList, buttonElement);

  // на все импуты добавим реакцию на ввод
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      // провалидируем
      checkInputValidity(formElement, inputElement);
      // проверим доступность кнопки
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// активация валидации
const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__container'));
  
  // переберем полученный список
  formList.forEach((formElement) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

// активируем валидацию документа
enableValidation();
