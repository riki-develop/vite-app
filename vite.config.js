import { defineConfig } from 'vite';
import { ViteEjsPlugin } from "vite-plugin-ejs";
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const createHotReloadPlugin = (name, matchFn) => {
  return {
    name: name,
    handleHotUpdate({ file, server }) {
      if (matchFn(file)) {
        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
    }
  };
};

const allFilesHotReloadPlugin = createHotReloadPlugin('all-files-hot-reload', (file) => file.startsWith(path.resolve(__dirname, 'src')));

const jsFiles = Object.fromEntries(
  globSync('src/**/*.js', { ignore: ['node_modules/**','**/modules/**','**/dist/**']}).map(file => [
    path.relative(
      'src',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const scssFiles = Object.fromEntries(
  globSync('src/**/*.scss', { ignore: ['src/assets/styles/base/**', 'src/assets/styles/layouts/**', 'src/assets/styles/components/**', 'src/assets/styles/pages/**', 'src/assets/styles/utils/**'] }).map(file => [
    path.relative(
      'src',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const htmlFiles = Object.fromEntries(
  globSync('src/**/*.html', { ignore: ['node_modules/**', '**/dist/**'] }).map(file => [
    path.relative(
      'src',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const inputObject = { ...scssFiles, ...jsFiles, ...htmlFiles };

export default defineConfig({
  root: './src',
  base: './',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: inputObject,
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return '[name].[ext]';
          }
          if (/\.scss$/.test(assetInfo.name)) {
            return '[name].[ext]';
          }
          return '[name].[ext]';
        },
      },
    },
  },
  plugins: [
    ViteEjsPlugin(),
    sassGlobImports(),
    allFilesHotReloadPlugin
  ],
  server: {
    port: 3000,
    watch: {
      include: [
        'src/**/*',
      ],
    },
  }
});