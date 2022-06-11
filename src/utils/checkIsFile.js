import fs from 'fs';

export const checkIsFile = async (path) => {
  const stat = await fs.promises.lstat(path);
  return stat.isFile();
}