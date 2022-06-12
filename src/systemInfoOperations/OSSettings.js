import { getCPU } from './getCPU.js';
import { getCurrentUserName } from './getUserName.js';
import { getEOL } from './getEOL.js';
import { getHomeDir } from './getHomeDir.js';
import { getCPUArchitecture } from './getCPUArchitecture.js';

export const selectOSParam = async (param) => {
  const command = await getSelectedParams(param);
  switch (command) {
    case '--EOL': {
      await getEOL();
      break;
    }
    case '--cpus': {
      await getCPU();
      break;
    }
    case '--homedir': {
      const homeDir = await getHomeDir();
      console.log(`Home dir: ${homeDir}`);  
      break;
    }
    case '--username': {
      await getCurrentUserName();
      break;
    }
    case '--architecture': {
      getCPUArchitecture();
      break;
    }
    default: {
      console.log('\nInvalid input');
    }
  }
}

export const getSelectedParams = async (command) => { 
  return command.toString().trim().split(' ')[1];
}