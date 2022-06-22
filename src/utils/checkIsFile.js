import fs from 'fs';

export const checkIsFile = async (path) => {
  
  try {
    const stat = await fs.promises.lstat(path);
    return stat.isFile(); 
  }
  catch (err) {
    console.log('Operation failed');
  }
}