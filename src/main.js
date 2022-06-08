import { welcome } from './utils/welcome.js';
import { goodbye } from './utils/goodbye.js';
import * as readline from 'readline';
import { getCurrentUserName } from './utils/getCurrentUserName.js';
import { getCurrentCommand } from './utils/getCurrentCommand.js';
import { selectOSParam } from './systemInfoOperations/OSSettings.js';

const rl = readline.createInterface({
  input: process.stdin
});

export const startApp = async () => {
  const userName = await getCurrentUserName(); 
  await welcome(userName);

  rl.on('line', async (input) => {
    let command = await getCurrentCommand(input);
    switch (command) {
      case 'exit': {
        console.log('exit');
        break;
      }
      case 'up': {
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
        selectOSParam(input);
        break;
      } 
      default: {
        console.log('Invalid input');
      }
    }
  });

  process.on('SIGINT', () => {
    goodbye(userName);
    process.exit();
  }); 

}

startApp();