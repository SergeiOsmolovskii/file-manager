import * as readline from 'readline';
import { welcome } from './utils/welcome.js';
import { goodbye } from './utils/goodbye.js';
import { getCurrentUserName } from './utils/getCurrentUserName.js';
import { getCurrentCommand } from './utils/getCurrentCommand.js';
import { selectOSParam } from './systemInfoOperations/OSSettings.js';
import { up } from './listOfOperations/up.js';
import { ls } from './listOfOperations/ls.js';
import { cd } from './listOfOperations/cd.js';
import { cat } from './filesOperations/cat.js';
import { add } from './filesOperations/add.js';
import { rn } from './filesOperations/rn.js';
import { rm } from './filesOperations/rm.js';
import { cp } from  './filesOperations/cp.js';
import { mv } from './filesOperations/mv.js';
import { hash } from './hashOperations/hash.js';
import { compress } from './compressAndDecompressOperations/compress.js';
import { decompress } from './compressAndDecompressOperations/decompress.js';

import { getHomeDir } from './systemInfoOperations/getHomeDir.js';


const rl = readline.createInterface({
  input: process.stdin
});

export const startApp = async () => {
  const userName = await getCurrentUserName();
  let currentPath = await getHomeDir();
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
        break;
      }
      case 'cd': {
        currentPath = await cd(input.trim(), currentPath);
        break;
      }
      case 'ls': {
        ls(currentPath);
        break;
      }
      case 'add': {
        await add(input.trim(), currentPath);
        break;
      }
      case 'cat': {
        await cat(input.trim(), currentPath);
        break;
      }
      case 'rn': {
        await rn(input.trim(), currentPath);
        break;
      }
      case 'cp': {
        await cp(input.trim(), currentPath);
        break;
      }
      case 'mv': {
        await mv(input.trim(), currentPath);
        break;
      }
      case 'rm': {
        await rm(input.trim(), currentPath);
        break;
      }
      case 'hash': {
        await hash(input.trim(), currentPath);
        break;
      }
      case 'compress': {
        await compress(input.trim(), currentPath);
        break;
      }
      case 'decompress': {
        await decompress(input.trim(), currentPath);
        break;
      }
      case 'os': {
        await selectOSParam(input, currentPath);
        break;
      } 
      default: {
        console.log('\nInvalid input');
        console.log(`\nYou are currently in ${currentPath}\n`);
      }
    }
  });

  process.on('SIGINT', () => {
    goodbye(userName);
    process.exit();
  }); 

}

startApp();