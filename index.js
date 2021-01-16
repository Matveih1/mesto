(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.item,r=e.curentUserId,o=e.handleCardClick,i=e.handleDeleteClick,u=e.handleLikeClick,a=e.cardSelector,c=e.config;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._item=n,this._curentUserId=r,this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=u,this._cardSelector=a,this._config=c}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeClick()})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick()})),this._element.querySelector(this._config.elementImageSelector).addEventListener("click",(function(){e._handleCardClick()}))}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._deleteButton=this._element.querySelector(this._config.elementDeleteSelector),this._likeCount=this._element.querySelector(this._config.elementLikeCountSelector),this._likeButton=this._element.querySelector(this._config.elementLikeSelector);var e=this._element.querySelector(this._config.elementImageSelector);return e.src=this._item.link,e.alt=this._item.name,this._element.querySelector(this._config.elementTitleSelector).textContent=this._item.name,this._item.owner._id===this._curentUserId&&(this._deleteButton.style.display="block"),this.setLikeState(this._item.likes),this._setEventListeners(),this._element}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"getLikeState",value:function(){return this._likeButton.classList.contains(this._config.likeActiveClass)}},{key:"setLikeState",value:function(e){var t=this;this._likeCount.textContent=e.length,-1===e.findIndex((function(e){return e._id===t._curentUserId}))?this._likeButton.classList.remove(this._config.likeActiveClass):this._likeButton.classList.add(this._config.likeActiveClass)}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._formElement.checkValidity()?(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.disabled=!1):(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"validateAfterOpen",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t?this._container.append(e):this._container.prepend(e)}},{key:"render",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),a(this,"_click",(function(e){(e.target.classList.contains("popup_open")||e.target.classList.contains("popup__button-close"))&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){document.addEventListener("keyup",this._handleEscClose),this._popup.addEventListener("mousedown",this._click)}},{key:"_unsetEventListeners",value:function(){document.removeEventListener("keyup",this._handleEscClose),this._popup.removeEventListener("mousedown",this._click)}},{key:"open",value:function(){this._popup.classList.add("popup_open"),this._setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_open"),this._unsetEventListeners()}}])&&u(t.prototype,n),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__img"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupCaption.textContent=e,f(_(u.prototype),"open",this).call(this)}}])&&l(t.prototype,n),u}(c);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n,r,o,a,c=e.popupSelector,s=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(e){e.preventDefault(),n._handleFormSubmit(n._getInputValues())},(o="_formSubmit")in(r=k(n=i.call(this,c)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._handleFormSubmit=s,n._elementForm=n._popup.querySelector(t),n._submitButton=n._elementForm.querySelector(".popup__button-submit"),n._inputList=n._elementForm.querySelectorAll(".popup__input"),n._formValues={},n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){this._elementForm.addEventListener("submit",this._formSubmit)}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setSubmitText",value:function(e){this._submitButton.textContent=e}}])&&v(t.prototype,n),u}(c);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e){var t,n,r,o,a=e.popupSelector,c=e.elementForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),o=function(e){e.preventDefault(),t._handleFormSubmit()},(r="_formSubmit")in(n=O(t=i.call(this,a)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._elementForm=t._popup.querySelector(c),t}return t=u,(n=[{key:"setEventListeners",value:function(){this._elementForm.addEventListener("submit",this._formSubmit)}},{key:"setSubmitHandler",value:function(e){this._handleFormSubmit=e}}])&&C(t.prototype,n),u}(c);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.selectorName,r=t.selectorDescription,o=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._infoName=document.querySelector(n),this._infoDescription=document.querySelector(r),this._infoAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._infoName.textContent,description:this._infoDescription.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._infoName.textContent=e,this._infoDescription.textContent=t,this._infoAvatar.src=n}},{key:"setAvatar",value:function(e){this._infoAvatar.src=e}}])&&P(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_returnRes",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._returnRes(t)}))}},{key:"getInitialUser",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._returnRes(t)}))}},{key:"updateUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.description})}).then((function(e){return t._returnRes(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.link})}).then((function(e){return t._returnRes(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._returnRes(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._returnRes(e)}))}},{key:"dislikeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._returnRes(e)}))}},{key:"patchAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._returnRes(e)}))}}])&&R(t.prototype,n),e}(),U={formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button-submit_inactive",inputErrorClass:"popup__input_error",errorClass:"popup__input-error_active"},x={elementImageSelector:".element__image",elementTitleSelector:".element__title",elementLikeSelector:".element__like",elementLikeCountSelector:".element__like-count",elementDeleteSelector:".element__delete",likeActiveClass:"element__like_active",imagePopup:J,imageSelector:".popup__img",captionSelector:".popup__caption"},A=new q({selectorName:".profile__info-name",selectorDescription:".profile__info-description",selectorAvatar:".profile__avatar"}),D=new r(U,document.querySelector('form[name="form-profile"]'));D.enableValidation();var B=new r(U,document.querySelector('form[name="form-avatar"]'));B.enableValidation();var F=document.querySelector('form[name="form-elements"]'),V=new r(U,F);V.enableValidation();var N=new m(".popup_image"),H=new j({popupSelector:".popup_image-delete",elementForm:'form[name="form-delete"]'});H.setEventListeners();var J=document.querySelector(".popup_image"),z=new T({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"eb682221-dbec-4c2b-8eb8-60ab601a29cb","Content-Type":"application/json"}});z.getInitialUser().then((function(e){A.setUserInfo(e.name,e.about,e.avatar);var n=e._id;function r(e){var r=new t({item:e,curentUserId:n,handleCardClick:function(){N.open(e.name,e.link)},handleDeleteClick:function(){H.setSubmitHandler((function(){z.deleteCard(e._id).then((function(){r.deleteCard(),H.close()})).catch((function(e){return console.log(e)}))})),H.open()},handleLikeClick:function(){r.getLikeState()?z.dislikeCard(e._id).then((function(e){return r.setLikeState(e.likes)})).catch((function(e){return console.log(e)})):z.likeCard(e._id).then((function(e){return r.setLikeState(e.likes)})).catch((function(e){return console.log(e)}))},cardSelector:"#element",config:x});return r.generateCard()}z.getInitialCards().then((function(e){var t=new i({items:e,renderer:function(e){t.addItem(r(e))}},".elements");t.render();var n=new g({popupSelector:".popup_element",handleFormSubmit:function(e){n.setSubmitText("Сохранение..."),z.addNewCard(e).then((function(e){t.addItem(r(e),!1),n.close()})).catch((function(e){return showError(e)})).finally((function(){return n.setSubmitText("Создать")}))}},'form[name="form-elements"]');n.setEventListeners(),document.querySelector(".profile__add-button").addEventListener("click",(function(){F.reset(),V.validateAfterOpen(),n.open()}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}));var M=new g({popupSelector:".popup_profile",handleFormSubmit:function(e){M.setSubmitText("Сохранение..."),z.updateUserInfo(e).then((function(e){A.setUserInfo(e.name,e.about,e.avatar),M.close()})).catch((function(e){return console.log(e)})).finally((function(){return M.setSubmitText("Сохранить")}))}},'form[name="form-profile"]');M.setEventListeners();var G=new g({popupSelector:".popup_avatar",handleFormSubmit:function(e){G.setSubmitText("Сохранение..."),z.patchAvatar(e.avatar).then((function(e){A.setAvatar(e.avatar),G.close()})).catch((function(e){return console.log(e)})).finally((function(){return G.setSubmitText("Сохранить")}))}},'form[name="form-avatar"]');G.setEventListeners(),document.querySelector(".profile__edit-button").addEventListener("click",(function(){var e=A.getUserInfo();M.setInputValues(e),D.validateAfterOpen(),M.open()})),document.querySelector(".profile__avatar-button").addEventListener("click",(function(){B.validateAfterOpen(),G.open()}))})();
//# sourceMappingURL=index.js.map