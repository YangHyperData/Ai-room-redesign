import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Ai-Content-Generator_owner:kidQCFV9pNe3@ep-jolly-sound-a5zpn4bs.us-east-2.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});