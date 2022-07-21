export default class Widget {
  constructor(cardNumber) {
    this.widget = undefined;
    this.cardList = undefined;
    this.inputForm = undefined;
    this.cardNumber = cardNumber;
  }

  // отрисовываем основную страницу

  drow() {
    const body = document.querySelector('body');
    this.widget = document.createElement('widget');
    this.widget.classList.add('widget');

    const text = document.createElement('h1');
    text.classList.add('text');
    text.textContent = 'Check your credit card number';
    this.widget.appendChild(text);

    this.cardList = document.createElement('div');
    this.cardList.classList.add('cardList');
    this.inputForm = document.createElement('form');
    this.inputForm.method = 'post';
    this.inputForm.classList.add('inputForm');

    body.appendChild(this.widget);
    this.widget.appendChild(this.cardList);
    this.widget.appendChild(this.inputForm);

    this.drowCards();
    this.drowForm();
  }

  drowCards() {
    for (let i = 0; i < this.cardNumber; i += 1) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add(`card-${i + 1}`);
      this.cardList.appendChild(card);
    }
  }

  drowForm() {
    for (let i = 0; i < 2; i += 1) {
      const div = document.createElement('div');
      this.inputForm.appendChild(div);
    }
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'card-number';
    input.id = 'card-number';
    input.placeholder = 'Credit card number';
    this.inputForm.firstChild.appendChild(input);

    const button = document.createElement('button');
    button.type = 'submit';
    button.id = 'sumbitNumber';
    button.textContent = 'Click to Validate';
    this.inputForm.lastChild.appendChild(button);
  }

  getWidget() {
    const getWidget = this.drow();
    return getWidget;
  }
}
