import * as argon2 from 'argon2';

export const hashing = async (password) => {
  return await argon2.hash(password, {
    secret: Buffer.from(process.env.PEPPER),
  });
};

export const check = async (hash, plainText) => {
  return await argon2.verify(hash, plainText, {
    secret: Buffer.from(process.env.PEPPER),
  });
};
