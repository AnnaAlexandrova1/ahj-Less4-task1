export default class LuhnAlgotithm {
  constructor() {
    this.inputForm = undefined;
    this.input = undefined;
    this.button = undefined;
    this.widget = undefined;
  }
  // алгоритм Луна

  luhnChech(num) {
    this.numQuantity = num.length;
    let nSum = 0;
    let isSecond = false;
    let checkSum = 0;

    if (num === '' || num === '0' || num === 'NaN') {
      return false;
    }

    for (let j = 0; j < this.numQuantity; j += 1) {
      checkSum += num[j];
    }

    if (checkSum === 0) {
      return false;
    }

    for (let i = this.numQuantity - 1; i >= 0; i -= 1) {
      let d = num[i].charCodeAt() - '0'.charCodeAt();
      if (isSecond === true) {
        d *= 2;
      }
      nSum += parseInt(d / 10, 10);
      nSum += d % 10;
      isSecond = !isSecond;
    }
    return (nSum % 10 === 0);
  }
  // применение алгоритма при клике

  luhn(num) {
    this.widget = document.querySelector('.widget');
    const mess = document.createElement('div');
    mess.classList.add('mess');
    this.widget.after(mess);

    if (this.luhnChech(num)) {
      mess.textContent = 'This is a valid card';
      mess.classList.add('valid');
      return true;
    }
    mess.textContent = 'This is not a valid card';
    mess.classList.add('invalid');
    return false;
  }

  // получаем номер введенной карты, применяем алгоритм Луна, отрисоываем сообщение

  getCardNumber() {
    this.inputForm = document.querySelector('.inputForm');
    this.input = this.inputForm.querySelector('input');
    this.button = this.inputForm.querySelector('button');

    this.button.onclick = (event) => {
      event.preventDefault();

      if (!this.input.value.match(/^\d{13,21}$/)) {
        this.button.classList.add('card-fade');
        const tryAgain = document.createElement('div');
        tryAgain.classList.add('tooltip');
        tryAgain.textContent = 'Недопустимый формат карты';
        this.button.after(tryAgain);
        this.input.value = '';
        setTimeout(() => {
          this.button.classList.remove('card-fade');
          tryAgain.remove();
        }, 1000);
        return;
      }
      this.luhn(this.input.value);
    };
  }
}
