export const getCurrentUserName = async () => {
  const args = process.argv;
  let userName = '';
  args.forEach(arg => {
    if (arg.includes('--username')) {
      userName = arg.split('=')[1];
    }
  });
  return userName;
};