import os from 'os';

export const getHomeDir = async () => {
  return os.homedir();
}