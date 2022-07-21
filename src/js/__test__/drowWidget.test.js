import DrowWidget from '../drowWidget';

test('Отрисовка страницы с картами и формой ввода даных для 6 типов карт', () => {
  const drowWidget = new DrowWidget(6);
  drowWidget.drow();
  const received = document.querySelectorAll('.card');
  expect(received.length).toBe(6);
});
