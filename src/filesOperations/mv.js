import fs from 'fs';
import path from 'path';
import { checkIsDirectory } from '../utils/checkIsDirectory.js';
import { checkIsFile } from '../utils/checkIsFile.js';

export const mv = async (command, currentPath) => {

  const params = command.trim().split('mv ')[1];
  const fileToCopy = params.split(' ')[0];
  const directoryToCopy = params.split(' ')[1];
  const fileToCopyPath = path.join(currentPath, fileToCopy);
  const directoryToCopyPath = path.join(currentPath, directoryToCopy);
  const newFilePath = path.join(directoryToCopyPath, fileToCopy);
  const isFile = await checkIsFile(fileToCopyPath);
  const isDirectory = await checkIsDirectory(directoryToCopyPath);

  try {

    if (isFile && isDirectory) {
      
      const readStream = fs.createReadStream(fileToCopyPath);
      const writeStream = fs.createWriteStream(newFilePath);
      
      readStream.pipe(writeStream).on('close', () => {
        console.log(`File ${fileToCopy} copied into ${directoryToCopy}`);

        fs.promises.unlink(fileToCopyPath).then(() => {
          console.log(`Base file deleted`);
        }).catch(() => {
          console.log('Operation failed');
        });
      });
    }
  }
    catch (e) {
    console.log('Operation failed');
  }
}