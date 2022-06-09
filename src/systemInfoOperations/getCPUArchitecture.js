import os from 'os';

export const getCPUArchitecture = async () => {
  console.log(`Operating system CPU architecture: ${os.arch()}`);
}