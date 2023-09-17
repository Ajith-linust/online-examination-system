import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // alias: {
    //   components: path.relative(__dirname, 'src/components'),
    //   pages: path.relative(__dirname, 'src/pages'),
    //   utils: path.relative(__dirname, 'src/utils'),
    //   assets: path.relative(__dirname, 'src/assets'),
    //   reduxStore: path.relative(__dirname, 'src/reduxStore'),
    //   library: path.relative(__dirname, 'src/library'),
    // }
    alias: [
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, './src/pages'),
      },
      {
        find: '@library',
        replacement: path.resolve(__dirname, './src/library'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, './src/assets'),
      },
      {
        find: '@reduxStore',
        replacement: path.resolve(__dirname, './src/reduxStore'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, './src/utils'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, './src/hooks'),
      },
    ]
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
})
