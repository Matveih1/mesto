export default class Section {

  constructor({items, renderer}, containerSelector) {
    this._items = items; // список того что надо отрисовать
    this._renderer = renderer; // внешняя функция отрисовки

    this._container = document.querySelector(containerSelector); // контейнер в котором рисуем
  }

  addItem(element, append = true) {
    if (append) {
      this._container.append(element);
    } else {
      this._container.prepend(element);
    }
  }

  render() {
    this._items.forEach(item => this._renderer(item)); // отдаем во вне готовый элемент для отрисовки
  }

}