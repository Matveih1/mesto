
export default class UserInfo {
  constructor({selectorName, selectorDescription, selectorAvatar}) {
    this._infoName = document.querySelector(selectorName);
    this._infoDescription = document.querySelector(selectorDescription);
    this._infoAvatar = document.querySelector(selectorAvatar); 
  }

  getUserInfo() {
    return {
      name: this._infoName.textContent,
      description: this._infoDescription.textContent
    };
  }

  setUserInfo(newName, newDescription, newAvatar) {
    this._infoName.textContent = newName;
    this._infoDescription.textContent = newDescription;
    this._infoAvatar.src = newAvatar;
  }

  setAvatar(newAvatar) {
    this._infoAvatar.src = newAvatar;
  }

}