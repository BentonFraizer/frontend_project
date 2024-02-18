import path from 'path';
import fsp from 'node:fs/promises';

const bytesToKilobytes = (bytes) => {
  if (typeof bytes !== 'number' || Number.isNaN(bytes) || bytes < 0) {
    return 'Invalid input';
  }

  return `${(bytes / 1024).toFixed(2)} KB`;
};

const formatDate = (rowDate) => {
  const gettedDate = new Date(rowDate);
  return `${String(gettedDate.getDate()).padStart(2, '0')}.${String(gettedDate.getMonth()).padStart(
    2,
    '0'
  )}.${gettedDate.getFullYear()}г.`;
};

// очень хороший пример с рекурсией. Спасибо за него.
// не было времени навести красоту в результирующей строке, но было бы интересно
// узнать как подогнать по ширине все строки чтобы получилась более менее ровная таблица.
const getFilesInfoInDir = async (dirPath) => {
  try {
    const filesList = await fsp.readdir(dirPath);
    let result = 'имя файла | размер | дата создания';

    const readFilesToOrder = (filesInDir) => {
      if (filesInDir.length === 0) {
        console.log(result);
        return;
      }
      const [firstFileName, ...anotherNames] = filesInDir;

      fsp.stat(path.resolve(dirPath, firstFileName), 'utf-8').then((res) => {
        result += `\n${firstFileName} | ${bytesToKilobytes(res.size)} | ${formatDate(res.birthtime)}`;
        readFilesToOrder(anotherNames); // рекурсия здесь
      });
    };

    readFilesToOrder(filesList);
  } catch (error) {
    console.log(error);
  }
};

getFilesInfoInDir(path.resolve(process.cwd(), 'someDir'));

// предполагаемый результат работы:
// имя файла | размер | дата создания
// code.js | 0.45 KB | 18.01.2024г.
// index.html | 0.67 KB | 18.01.2024г.
// js-is-favorite.jpeg | 88.72 KB | 18.01.2024г.
