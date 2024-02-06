import { access, mkdir } from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const createDistDir = async () => {
  const dirPath = path.resolve(__dirname, '../dist');
  try {
    await access(dirPath);
    console.log('directory "dist" already exists');
  } catch (e) {
    await mkdir(dirPath);
    console.log(`created ${dirPath}`);
  }
};

createDistDir();

// Моя первая реализация до просмотра примера из лекции

// try {
//   const distFolder = new URL('../dist', import.meta.url);
//   const createDir = await mkdir(distFolder, { recursive: true });

//   if (createDir !== undefined) {
//     console.log(`created ${createDir}`);
//   } else {
//     console.log('directory "dist" already exists');
//   }
// } catch (err) {
//   console.error(err.message);
// }
