import fs from 'fs';
import path from 'path';
import { checkIsDirectory } from '../utils/checkIsDirectory.js';
import { checkIsFile } from '../utils/checkIsFile.js';

export const cp = async (command, currentPath) => {
  try {
    const params = command.trim().split('cp ')[1];
    const fileToCopy = params.split(' ')[0];
    const directoryToCopy = params.split(' ')[1];
    const fileToCopyPath = path.join(currentPath, fileToCopy);
    const directoryToCopyPath = path.join(currentPath, directoryToCopy);
    const newFilePath = path.join(directoryToCopyPath, fileToCopy);
    const isFile = await checkIsFile(fileToCopyPath);
    const isDirectory = await checkIsDirectory(directoryToCopyPath);

    if (isFile && isDirectory) {
      const readStream = fs.createReadStream(fileToCopyPath);
      const writeStream = fs.createWriteStream(newFilePath);

      readStream.pipe(writeStream).on('close', () => {
        console.log('File copied');
      });
    }
  } catch (e) {
    console.log('\nOperation failed');
  }
}