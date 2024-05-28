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
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: [
      // @/xxxx => packages/xxxx
      {
        find: /^@\/(.+)/,
        replacement: `${resolve(__dirname, '../')}/$1`,
      },
    ],
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: 'packages/naver/lib/index.ts',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['react', 'react/jsx-runtime'],
      treeshake: 'smallest',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].cjs',
        },
      ],
    },
  },
});
