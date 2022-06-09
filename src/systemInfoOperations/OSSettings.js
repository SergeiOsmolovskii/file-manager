import { getCPU } from './getCPU.js';
import { getCurrentUserName } from './getUserName.js';
import { getEOL } from './getEOL.js';

export const selectOSParam = async (param) => {
  const command = await getSelectedParams(param);
  switch (command) {
    case '--EOL': {
      getEOL();
      break;
    }
    case '--cpus': {
      await getCPU();
      break;
    }
    case '--homedir': {
      console.log('--homedir');
      break;
    }
    case '--username': {
      await getCurrentUserName();
      break;
    }
    case '--architecture': {
      console.log('--architecture');
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