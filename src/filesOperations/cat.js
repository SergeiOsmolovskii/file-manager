import fs from 'fs';
import path from 'path';
import { checkIsFile } from '../utils/checkIsFile.js';
export const cat = async (command, currentPath) => {
  try {
    const params = command.trim().split('cat ')[1];
    const filePath = path.join(currentPath, params);
    const readStream = fs.createReadStream(filePath);

    return await fs.promises.access(filePath).then(async () => {
        if (await checkIsFile(filePath)) {
          let data = [];

          readStream.on('data', (chunk) => {
            data.push(chunk.toString());
          });

          readStream.on('end', () => {
            console.log(data.join(''));
          });

        } else {
          console.log('\nOperation failed');
        } 
      })
    }
    catch (e) {
      console.log('\nOperation failed');
    }
  }