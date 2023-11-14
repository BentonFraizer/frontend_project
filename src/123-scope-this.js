// 1.Создание новых объектов с помощью функций-конструкторов
function getName() {
  console.log('Player\'s full name is:', `${this.firstName} ${this.lastName}.`);
}

const GuitarPlayer = function (firstName, lastName) {
  // if (!(this instanceof GuitarPlayer)) {
  //   throw Error('Error: Incorrect invocation!');
  // }
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = getName;
};

const somePlayer = new GuitarPlayer('Nikolas', 'Zakas');

console.log('somePlayer info:', somePlayer);
somePlayer.getName();

// Ниже намеренно не указан оператор "new" для того,
// чтобы проверить отработает ли проверка на строке №7
const wrongInstanceOfPlayer = GuitarPlayer('Noname', 'Person');
console.log('Instance without new operator:', wrongInstanceOfPlayer);

// 2. Реализация логгеров счетчиков от нуля, используя замыкания
const counter = () => {
  let startValue = 0;
  return () => {
    console.log('Значение счетчика:', startValue += 1);
  };
};

const firstCounter = counter();
const secondCounter = counter();
firstCounter();
firstCounter();

secondCounter();
secondCounter();

// 3. Практика над объетами/массивами, используя нативные методы
// 3.1 Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays.
// Both arrays will always be the same length.
// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];

const mash = (arr1, arr2) => {
  const result = [];
  arr1.forEach((element, index) => {
    result.push(element);
    result.push(arr2[index]);
  });
  return result;
};

console.log('Массив значений, собранный поочередно из двух массивов:', mash(numbers, letters));
// 3.2 Write a function that merges two sorted arrays into a single one.
// The arrays only contain integers.
// Also, the final outcome must be sorted and not have any duplicate.
const numbers1 = [2, 4, 8];
const numbers2 = [2, 4, 6];

function mergeArrays(a, b) {
  // Код на строке 67 взят из интернета, просто было интересно как это реализуют более
  // опытные разработчики с помощью reduce.
  const middleResult = a.reduce((acc, e, i) => (acc.push(e, b[i]), acc), []);
  const sorted = middleResult.sort((d, e) => {
    if (d < e) {
      return -1;
    }

    if (d > e) {
      return 1;
    }

    return 0;
  });

  return [...new Set(sorted)];
}

console.log('Массив уникальных значений после сбора его из двух разных массивов:', mergeArrays(numbers1, numbers2));

// К сожалению не успел прорешать больше примеров.
