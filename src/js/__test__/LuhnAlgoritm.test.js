import LuhnAlgorithm from '../LuhnAlgorithm';
import InputNumber from '../inputNumber';
import Widget from '../drowWidget';

const widget = new Widget(6);
widget.drow();
const inputNumber = new InputNumber();
inputNumber.addLisiners();
const luhnAlgorithm = new LuhnAlgorithm();
luhnAlgorithm.getCardNumber();

describe('Метод checkLuhnAlgo должен проверять переданное значение по алгоритму Луна корректно', () => {
  test.each([
    ['Тест 1', '4716983987165598', true],
    ['Тест 2', '4225414378713780418', true],
    ['Тест 3', '36865410416253', true],
    ['Тест 4', '6762976812058473', true],
    ['Тест 5', '2222222222222222222', false],
    ['Тест 6', '', false],
    ['Тест 7', '0', false],

  ])(('Должен быть %s'), (_, input, expected) => {
    expect(luhnAlgorithm.luhn(input)).toBe(expected);
  });
});
