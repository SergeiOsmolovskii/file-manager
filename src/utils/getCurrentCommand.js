export const getCurrentCommand = async (command) => { 
  // console.log(`You test command: ${command}`);
  return command.toString().trim().split(' ')[0];
}