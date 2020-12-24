
export default class UserInfo {
  constructor({selectorName, selectorDescription}) {
    this._infoName = document.querySelector(selectorName);
    this._infoDescription = document.querySelector(selectorDescription); 
  }

  getUserInfo() {
    return {
      name: this._infoName.textContent,
      description: this._infoDescription.textContent
    };
  }

  setUserInfo(newName, newDescription) {
    this._infoName.textContent = newName;
    this._infoDescription.textContent = newDescription;
  }

}