import { welcome } from './utils/welcome.js';
import { goodbye } from './utils/goodbye.js';
import * as readline from 'readline';
import { getCurrentUserName } from './utils/getCurrentUserName.js';
import { getCurrentCommand } from './utils/getCurrentCommand.js';
import { selectOSParam } from './systemInfoOperations/OSSettings.js';
import { getPath } from './utils/getPath.js';
import { up } from './listOfOperations/up.js';

const rl = readline.createInterface({
  input: process.stdin
});

export const startApp = async () => {
  const userName = await getCurrentUserName();
  let currentPath = await getPath(import.meta.url, '');
  await welcome(userName);
  console.log(`You are currently in ${currentPath}`);
  rl.on('line', async (input) => {
    let command = await getCurrentCommand(input);
    switch (command) {
      case '.exit': {
        goodbye(userName);
        process.exit();
      }
      case 'up': {
        currentPath = await up(currentPath);
        console.log('up');
        break;
      }
      case 'cd': {
        console.log('cd');
        break;
      }
      case 'ls': {
        console.log('ls');
        break;
      }
      case 'cat': {
        console.log('cat');
        break;
      }
      case 'rn': {
        console.log('rn');
        break;
      }
      case 'cp': {
        console.log('cp');
        break;
      }
      case 'mv': {
        console.log('mv');
        break;
      }
      case 'rm': {
        console.log('rm');
        break;
      }
      case 'hash': {
        console.log('hash');
        break;
      }
      case 'compress': {
        console.log('compress');
        break;
      }
      case 'decompress': {
        console.log('decompress');
        break;
      }
      case 'os': {
        await selectOSParam(input);
        break;
      } 
      default: {
        console.log('Invalid input');
      }
    }
    console.log(`\nYou are currently in ${currentPath}`);
  });

  process.on('SIGINT', () => {
    goodbye(userName);
    process.exit();
  }); 

}

startApp();