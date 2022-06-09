import os from 'os';

export const getHomeDir = async () => {
  console.log(`Home dir: ${os.homedir}`);
}