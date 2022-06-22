import os from 'os';

export const getEOL = async () => {
  console.log(`End of line: ${JSON.stringify(os.EOL)}`);
}