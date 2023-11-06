// Задача №1. Дан массив цен. Тип значений number. Сформировать на его основании новый массив,
// где значения будут вида "100 р" (цена и знак рубля в виде строки)
const prices = [100, 150, 200, 250];

const pricesWithUnits = prices.map((price) => `${price} ₽`);
console.log('Массив цен с обозначением единиц изменерия:', pricesWithUnits);

// Залача №2. Дан массив пользователей. Каждый пользователь представлен в виде массива,
// вида ['alex', 32]. Первое значение - имя (строкой), второе - возраст (числом).
// Сформировать на его основе массив, где останутся только пользователи старше 18 лет.
const usersInfo = [['alex', 32], ['thomas', 17], ['olga', 14], ['andre', 24]];

const adults = usersInfo.filter((user) => user[1] > 18);
console.log('Массив совешеннолетних пользователей:', adults);

// Задача №3. Дан массив товаров в виде объекта - { title: 'пицца', price: 100 }.
// Вычислите общую стоимость всех товаров.
const goods = [
  { title: 'пицца', price: 200 },
  { title: 'баранина', price: 300 },
  { title: 'креветки', price: 400 },
];

const goodsPricesSum = goods.reduce((acc, cur) => acc + cur.price, 0);
console.log('Сумма всех товаров с использованием метода reduece:', goodsPricesSum);

let sum = 0;
goods.forEach((good) => sum += Object.values(good)[1])
console.log('Сумма всех товаров с использованием метода forEach:', sum);
