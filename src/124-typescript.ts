// Вывод типов согласно задания для переменных и некоторых функций.
// Использовал команду для компиляции: 124-typescript.ts

const newPrices: number[] = [100, 150, 200, 250];

const newPricesWithUnits: string[] = newPrices.map((price) => `${price} ₽`);
console.log('pricesWithUnits', newPricesWithUnits);

// ================================================================================================

const newUsersInfo: [string, number][] = [
  ['alex', 32],
  ['thomas', 17],
  ['olga', 14],
  ['andre', 24],
];

const newAdults = newUsersInfo.filter((user) => user[1] > 18);
console.log('Массив совешеннолетних пользователей:', newAdults);

// ================================================================================================

const newGoods: { title: string; price: number }[] = [
  { title: 'пицца', price: 200 },
  { title: 'баранина', price: 300 },
  { title: 'креветки', price: 400 },
];

const newGoodsPricesSum = newGoods.reduce((acc, cur) => acc + cur.price, 0);
console.log('Сумма всех товаров с использованием метода reduece:', newGoodsPricesSum);

let newSum = 0;
newGoods.forEach((good) => {
  newSum += Object.values(good)[1] as number;
});
console.log('Сумма всех товаров с использованием метода forEach:', newSum);

// ================================================================================================

const newNumbers: number[] = [1, 2, 3];
const newLetters: string[] = ['a', 'b', 'c'];

const newMash = (arr1: number[], arr2: string[]): (string | number)[] => {
  const result: (string | number)[] = [];
  arr1.forEach((element, index) => {
    result.push(element);
    result.push(arr2[index]);
  });
  return result;
};

console.log('Массив значений, собранный поочередно из двух массивов:', newMash(newNumbers, newLetters));
