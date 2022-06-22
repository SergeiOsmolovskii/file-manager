import { getCPU } from './getCPU.js';
import { getCurrentUserName } from './getUserName.js';
import { getEOL } from './getEOL.js';
import { getHomeDir } from './getHomeDir.js';
import { getCPUArchitecture } from './getCPUArchitecture.js';

export const selectOSParam = async (param, currentPath) => {
  const command = await getSelectedParams(param);
  switch (command) {
    case '--EOL': {
      await getEOL();
      console.log(`\nYou are currently in ${currentPath}\n`);
      break;
    }
    case '--cpus': {
      await getCPU();
      console.log(`\nYou are currently in ${currentPath}\n`);
      break;
    }
    case '--homedir': {
      const homeDir = await getHomeDir();
      console.log(`Home dir: ${homeDir}`); 
      console.log(`\nYou are currently in ${currentPath}\n`);
      break;
    }
    case '--username': {
      await getCurrentUserName();
      console.log(`\nYou are currently in ${currentPath}\n`);
      break;
    }
    case '--architecture': {
      getCPUArchitecture();
      console.log(`\nYou are currently in ${currentPath}\n`);
      break;
    }
    default: {
      console.log('\nInvalid input');
      console.log(`\nYou are currently in ${currentPath}\n`);
    }
  }
}

export const getSelectedParams = async (command) => { 
  return command.toString().trim().split(' ')[1];
}