import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: process.env.CF_PAGES ? '/' : '/Nirakshan.AI/',
  plugins: [react()],
});
