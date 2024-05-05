import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'packages',
      //   insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: [
      // @/xxxx => packages/xxxx
      {
        find: /^@\/(.+)/,
        replacement: `${resolve(__dirname, './packages/')}/$1`,
      },
    ],
  },
  build: {
    // sourcemap: true,
    // minify: 'terser',
    outDir: 'dist',
    lib: {
      entry: {
        'common/index': resolve(__dirname, 'lib/packages/common/lib/index.js'),
        'google/index': resolve(__dirname, 'lib/packages/google/lib/index.js'),
        'naver/index': resolve(__dirname, 'lib/packages/naver/lib/index.js'),
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['react'],
      //   treeshake: 'smallest',
    },
  },
});
