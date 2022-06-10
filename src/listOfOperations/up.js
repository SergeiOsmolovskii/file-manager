import path from 'path';

export const up = async (currentPath) => {
  const currentPathArray = currentPath.trim().split(path.sep);
  const newPath = currentPathArray.slice(0, currentPathArray.length - 1).join(path.sep);
  if (currentPathArray.length <= 2) {
    return `${currentPathArray[0]}${path.sep}`;
  }
  return newPath;
}