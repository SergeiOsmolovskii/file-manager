import path from 'path';
import fs from 'fs';
import { up } from "./up.js";
import { checkIsFile } from '../utils/checkIsFile.js';

export const cd = async (command, currentPath) => {
  try {
    const params = command.trim().split('cd ')[1];
    const newPath = path.join(currentPath, params);

    if (params === '..') {
      return up(currentPath);
    }

    return await fs.promises.access(newPath).then(async () => {
      if (newPath) {
        let isFile = await checkIsFile(newPath);
        return isFile ? currentPath : newPath;
      }
    }).catch(() => {
      console.log('Invalid path');
      return currentPath;
    });
  } catch (e) {
    console.log('Invalid path');
    return currentPath;
  };
}