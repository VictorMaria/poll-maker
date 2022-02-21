import jwt from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcryptjs';
import { config } from 'dotenv';

config();

export const createToken = (payload, duration) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: duration });
};

export const hashPassword = (password) => {
    return hashSync(password, 10);
};

export const comparePassword = (password, hashedPassword) => {
    return compareSync(password, hashedPassword);
};