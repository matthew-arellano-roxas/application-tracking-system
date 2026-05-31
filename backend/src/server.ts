import '@/helpers/loadEnv';

import express from 'express';
import { env } from '@/config';

const app = express();

app.listen(env.PORT, () => {
  console.log(`Server running at http://localhost:${env.PORT}`);
});
