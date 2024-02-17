import fsp from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const readPort = async () => {
  const filePath = path.resolve(__dirname, '../dist', 'port.txt');

  try {
    await fsp.access(filePath);
    const readingResult = await fsp.readFile(filePath, 'utf-8');
    console.log(`File contains: ${readingResult}`);
  } catch (e) {
    console.log('File does not exist');
  }
};

readPort();
