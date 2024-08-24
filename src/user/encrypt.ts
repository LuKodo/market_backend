import { createCipheriv, createDecipheriv } from 'crypto';

const alg = 'aes-256-cbc';
let key = '6dsSuf^%LSy4@b^KN6VZvt@FtKp8scUr';
let iv = '%N6S3%2!w^sJKVUs';

export const encryptData = (data: string): string => {
  const cipher = createCipheriv(alg, key, Buffer.from(iv));
  let result = cipher.update(data, 'utf8', 'hex');
  result += cipher.final('hex');
  return result;
};

export const decryptData = (data: string): string => {
  const decipher = createDecipheriv(alg, key, Buffer.from(iv));
  let decrypted = decipher.update(data, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};
