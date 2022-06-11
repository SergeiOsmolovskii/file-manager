import fs from 'fs';
import path from 'path';

export const add = async (command, currentPath) => {
  const fileName = command.trim().split('add ')[1];
  const filePath = path.join(currentPath, fileName);

  const writeStream = fs.createWriteStream(filePath);

  writeStream.on('close', () => {
    console.log(`File ${fileName} created`);
  });

  writeStream.on('error', () => {
    console.log('Operation failed');
  });

  writeStream.close();
} 