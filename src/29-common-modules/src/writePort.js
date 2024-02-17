import dotenv from 'dotenv';
import fsp from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

dotenv.config();

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const { PORT } = process.env;

const writePort = async () => {
  const newFilePath = path.resolve(__dirname, '../dist', 'port.txt');

  try {
    await fsp.access(newFilePath);
    console.log('File alredy exists');
  } catch (e) {
    await fsp.writeFile(newFilePath, `enviroment variable PORT = ${PORT}`, 'utf-8');
    console.log('File successfully made');
  }
};

writePort();
