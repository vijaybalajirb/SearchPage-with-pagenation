import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// Load environment variables from .env file during development
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_APP_CLIENT_CODE':JSON.stringify(process.env.VITE_APP_CLIENT_CODE),
    'process.env.VITE_APP_API_KEY':JSON.stringify(process.env.VITE_APP_API_KEY),
    'process.env.VITE_APP_STORE_ID':JSON.stringify(process.env.VITE_APP_STORE_ID)
  }
})

