import { up } from "./up.js";

export const cd = async (currentPath, userParams) => {
  if (userParams === '..') {
    return up(currentPath);
  }

  if (isAbsolute(userParams)) {
    console.log('Absolute path');
  } else {
    console.log('Relative path');
  }
}

const isAbsolute = (path) => {
  return /^(?:\/|[A-Za-z]:\\)/.test(path);
}