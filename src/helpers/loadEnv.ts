import dotenv from 'dotenv';
import fs from 'fs';

export const loadEnv = () => {
  dotenv.config({
    path: '.env',
    override: false,
  });

  const env = process.env.NODE_ENV || 'development';
  const envFilePath = `.env.${env}`;

  if (fs.existsSync(envFilePath)) {
    dotenv.config({
      path: envFilePath,
      override: false,
    });
  }
};

loadEnv();

export default loadEnv;
