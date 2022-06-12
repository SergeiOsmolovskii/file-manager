import crypto from 'crypto';
import path from 'path';
import fs from 'fs';

export const hash = async (command, currentPath) => {
  const fileName = command.trim().split('hash ')[1];
  const filePath = path.join(currentPath, fileName);
  const hash = crypto.createHash('sha256');
  let data = [];

  const readStream = fs.createReadStream(filePath);

  readStream.on('data', (chunk) => {
    data.push(chunk.toString());
  });

  readStream.on('end', () => {
    hash.update(data.join(''));
    const fileHash = hash.digest('hex');
    console.log(fileHash);
  });

  readStream.on('error', () => {
    console.log('Operation failed');
  });
}