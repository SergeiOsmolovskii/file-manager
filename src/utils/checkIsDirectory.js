import fs from 'fs';

export const checkIsDirectory = async (path) => {
  
  try {
    const stat = await fs.promises.lstat(path);
    return stat.isDirectory();
  }
  catch (err) {
    console.log('Operation failed');
  }
}