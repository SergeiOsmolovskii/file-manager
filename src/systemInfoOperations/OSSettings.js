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
      getHomeDir();  
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
      console.log('Invalid input');
    }
  }
}

export const getSelectedParams = async (command) => { 
  return command.toString().trim().split(' ')[1];
}