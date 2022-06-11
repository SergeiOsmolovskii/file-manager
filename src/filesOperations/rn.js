import fs from 'fs';
import path from 'path';

export const rn = async (command, currentPath) => {
  const params = command.trim().split('rn ')[1];
  const oldFileName = params.split(' ')[0];
  const newFileName = params.split(' ')[1];
  const oldFilePath = path.join(currentPath, oldFileName);
  const newFilePath = path.join(currentPath, newFileName);

  fs.promises.rename(oldFilePath, newFilePath).then(() => {
    console.log(`File ${oldFilePath} renamed to ${newFilePath}`);
  }).catch(() => {
    console.log('Operation failed');
  });
}