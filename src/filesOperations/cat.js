import fs from 'fs';
import path from 'path';
import { checkIsFile } from '../utils/checkIsFile.js';

export const cat = async (command, currentPath) => {
  const params = command.trim().split('cat ')[1];
  const filePath = path.join(currentPath, params);

  return await fs.promises.access(filePath).then(async () => {
    
    if (await checkIsFile(filePath)) {
      let data = [];
      const readStream = fs.createReadStream(filePath);
  
      readStream.on('data', (chunk) => {
        data.push(chunk.toString());
      });
  
      readStream.on('end', () => {
        console.log(data.join(''));
      });
    } else {
      console.log('Invalid path');
    }
  }).catch(() => {
    console.log('Invalid path');
  });
}