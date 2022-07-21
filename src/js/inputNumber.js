export default class InputNumber {
  constructor() {
    this.input = undefined;
    this.char = null;
    this.type = undefined;
    this.cardList = undefined;
  }

  // слушатели на изменение формы и кнопку "отправить"
  addLisiners() {
    this.input = document.getElementById('card-number');

    this.input.oninput = (event) => {
      this.char = event.target.value;
      this.checkCard();
      this.showTypeOfCard();
    };

    this.input.onkeyup = (e) => {
      const del = document.querySelector('.tooltip');
      if (e.key === 'Backspace') {
        /* if (this.input.value.length === 0) {
          del.remove();
        } */
        if (this.char.slice(-1).charCodeAt() > 48 && this.char.slice(-1).charCodeAt() < 58) {
          if (del) {
            del.remove();
          }
        }
      }
    };
  }

  // добавляем подсказку при введении не цифр

  addTooltip() {
    const exist = Array.from(document.querySelectorAll('.tooltip'));
    // console.log(exist);
    if (exist.length === 0) {
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.textContent = 'Please insert a cregit card number';
      this.input.after(tooltip);
    }
  }

  checkCard() {
    if (this.char.slice(-1).charCodeAt() < 48 || this.char.slice(-1).charCodeAt() > 58) {
      this.addTooltip();
    }
  }

  // подсветка типа кары при введении
  showTypeOfCard() {
    this.cardList = Array.from(document.getElementsByClassName('card'));
    if (this.char[0] === undefined) {
      return;
    }

    if (this.char[0].charCodeAt() > 48 && this.char[0].charCodeAt() < 58) {
      this.cardList.forEach((elem) => { elem.classList.add('card-fade'); });
    }

    if (this.char[0] === '4') {
      const visa = document.querySelector('.card-1');
      visa.classList.remove('card-fade');
    }
    if (this.char[0] === '5') {
      if (this.char[1] === '0' || this.char[1] === '6' || this.char[1] === '7' || this.char[1] === '8') {
        const maestro = document.querySelector('.card-6');
        maestro.classList.remove('card-fade');
      }
      if (this.char[1] === '1' || this.char[1] === '2' || this.char[1] === '3' || this.char[1] === '4') {
        const maestro = document.querySelector('.card-2');
        maestro.classList.remove('card-fade');
      }
    }
    if (this.char[0] === '2') {
      const mir = document.querySelector('.card-3');
      mir.classList.remove('card-fade');
    }
    if (this.char[0] === '6') {
      const unionPay = document.querySelector('.card-4');
      unionPay.classList.remove('card-fade');
    }
    if (this.char[0] === '3') {
      const amerExpress = document.querySelector('.card-5');
      amerExpress.classList.remove('card-fade');
    }
  }
}
