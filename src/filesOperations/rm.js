import fs from 'fs';
import path from 'path';

export const rm = async (command, currentPath) => {
  try {
    const fileName = command.trim().split('rm ')[1];
    const filePath = path.join(currentPath, fileName);

    fs.promises.unlink(filePath).then(() => {
      console.log(`File ${fileName} deleted`);
    }).catch(() => {
      console.log('\nOperation failed');
    });

  } catch (e) {
    console.log('\nOperation failed');
  }
}