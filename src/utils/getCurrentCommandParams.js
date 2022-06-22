export const getCurrentCommandParams = async (command) => { 
  return command.toString().trim().split(' ')[0];
}