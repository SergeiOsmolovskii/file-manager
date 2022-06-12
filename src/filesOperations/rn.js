import fs from 'fs';
import path from 'path';

export const rn = async (command, currentPath) => {
  try {
    const params = command.trim().split('rn ')[1];
    const oldFileName = params.split(' ')[0];
    const newFileName = params.split(' ')[1];
    const oldFilePath = path.join(currentPath, oldFileName);
    const newFilePath = path.join(currentPath, newFileName);

    fs.promises.rename(oldFilePath, newFilePath).then(() => {
      console.log(`File ${oldFileName} renamed to ${newFileName}`);
    }).catch(() => {
      console.log('\nOperation failed');
    });
  } catch (e) {
    console.log('\nOperation failed');
  }
}