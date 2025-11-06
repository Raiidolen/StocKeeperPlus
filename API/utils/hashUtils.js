import * as argon2 from 'argon2';


export const hashing = (password) => {
    return argon2.hash(password, {secret: Buffer.from(process.env.PEPPER)});
};


export const check = (hash, plainText) => {
    return argon2.verify(
        hash,
        plainText,
        {secret: Buffer.from(process.env.PEPPER)}
    );
};