// 1. Получаем комментарии
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Can\'t get data');
  })
  .then((comments) => console.log('Массив элементов с чётными id:', comments.filter((comment) => comment.id % 2 === 0)))
  .catch((error) => console.log('Текст ошибки:', error.message));

// 2. Получаем фотографии
// в следующем примере reduce взял просто потренироваться
const getPhotos = async () => {
  const photos = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Что-то фотки не загрузились ¯\\_(ツ)_/¯');
    })
    .then((gettedPhotos) => gettedPhotos.reduce((acc, cur) => {
      if (cur.title[0].toLowerCase() === 'a') {
        acc.push(cur);
      }
      return acc;
    }, []));

  return photos;
};

getPhotos()
  .then((photos) => console.log('Массив данных отобранных по первой бувке \'a\' в поле "title":', photos))
  .catch((error) => console.log(error.message));

// 3. Получаем альбомы
fetch('https://jsonplaceholder.typicode.com/users/1/albums')
  .then((res) => res.json())
  .then((albums) => console.log('Массив данных, у которых значение ключа "id" больше пяти:', albums.filter((album) => album.id > 5)));
