import InputNumber from '../inputNumber';
import Widget from '../drowWidget';

const widget = new Widget(6);
widget.drow();
const inputNumber = new InputNumber();
const input = document.getElementById('card-number');
input.value = '4124';
inputNumber.addLisiners();

test('Проверка подсветки типа карты при введении', () => {
  const visa = document.querySelector('.card-1');
  expect(visa.classList.contains('card-fade')).toBe(false);
  expect(input.value).toBe('4124');
});
