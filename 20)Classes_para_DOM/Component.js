export class Component {
  #element = null;

  constructor(tag, parent, options) {
    this.tag = tag;
    this.parent = parent;
    this.options = options;
    this.Build();
  }

  getElement() {
    return this.#element;
  }

  Build() {
    this.#element = document.createElement(this.tag);
    Object.assign(this.#element, this.options);
    //Objeto global assign, 1° qual objeto é 2° a atribuição nele
    return this;
  }

  render() {
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#element);
    } else {
      document.querySelector(this.parent).append(this.#element);
    }
  }
}
