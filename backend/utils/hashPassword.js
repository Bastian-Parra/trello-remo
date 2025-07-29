import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hashPassword = async (pass) => await bcrypt.hash(pass, SALT_ROUNDS);
export const comparePassword = async (pass, hashedPassword) => await bcrypt.compare(pass, hashedPassword);
