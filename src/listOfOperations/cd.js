import path from 'path';
import fs from 'fs';
import { up } from "./up.js";

export const cd = async (command, currentPath) => {
  let params = command.trim().split('cd ')[1];
  let newPath = path.join(currentPath, params);

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
}

const checkIsFile = async (path) => {
  const stat = await fs.promises.lstat(path);
  return stat.isFile();
}