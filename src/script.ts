import './styles.css';

const varForTest = 'very important value';
const newVar = `${varForTest}!`;
const fiveNum = 5; // переменная объявлена для проверки работоспособности ESLint
const doubleNumber = (someNum) => someNum * 2;
doubleNumber(fiveNum);

console.log('In this variable we can see:', newVar);
