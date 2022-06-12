import fs from 'fs';

export const ls = async (currentPath) => {
  const itemsArray = [];
  const items = await fs.promises.readdir(currentPath, { withFileTypes: true });
  for (let item of items) {
    itemsArray.push(item.name);
  }
  console.log(itemsArray);
  console.log(`\nYou are currently in ${currentPath}\n`);
}