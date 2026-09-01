import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: process.env.CF_PAGES ? '/' : '/SIH_2026_CritiX_PROTOTYPE/',
  plugins: [react()],
});
