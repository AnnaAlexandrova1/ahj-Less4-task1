import Widget from './drowWidget';
import InputNumber from './inputNumber';
import LuhnAlgotithm from './LuhnAlgorithm';

const widget = new Widget(6);
widget.drow();
const inputNumber = new InputNumber();
inputNumber.addLisiners();
const luhnAlgorithm = new LuhnAlgotithm();
luhnAlgorithm.getCardNumber();
