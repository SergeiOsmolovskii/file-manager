import path from 'path';
import fs from 'fs';
import zlib from 'zlib';
import { checkIsDirectory } from '../utils/checkIsDirectory.js';
import { checkIsFile } from '../utils/checkIsFile.js';

export const compress = async (command, currentPath) => {

  try {
    const params = command.trim().split('compress ')[1];
    const fileToCompress = params.split(' ')[0];
    const directoryToCompress = params.split(' ')[1];
    const fileToCompressPath = path.join(currentPath, fileToCompress);
    const directoryToCompressPath = path.join(currentPath, directoryToCompress);
    const compressedFilePath = path.join(directoryToCompressPath, fileToCompress + '.br');
    const isFile = await checkIsFile(fileToCompressPath);
    const isDirectory = await checkIsDirectory(directoryToCompressPath);

    if (isFile && isDirectory) {
      const readStream = fs.createReadStream(fileToCompressPath);
      const writeStream = fs.createWriteStream(compressedFilePath);
      const brotli = zlib.createBrotliCompress();
      const stream = readStream.pipe(brotli).pipe(writeStream);

      stream.on('finish', () => {
        console.log(`File ${fileToCompress} compressed into ${compressedFilePath}`);
      });

      stream.on('error', () => {
        console.log('Operation failed');
      });
    }
  } catch (e) {
    console.log('Operation failed');
  }
}