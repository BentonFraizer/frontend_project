Promise.resolve()
  .then(() => alert('промис выполнен!'))
  .then(() => alert('код выполнен'));

// у нас есть массив с именем и фамилией
const arr = ['Ilya', 'Kantor'];

// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
const [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname); // Kantor
