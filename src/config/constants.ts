import dotenv from 'dotenv';

dotenv.config({ silent: true });

export const {
  DEV_URL,
  PROD_URL,
  PASSWORD_SALT,
} = process.env;

export const DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production'
  ? process.env.PROD_URL
  : process.env.DEV_URL;

export const TOKEN_SECRET: string = PASSWORD_SALT;

export const tokenTimeout: number = 10;
