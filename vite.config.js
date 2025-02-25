import { defineConfig } from 'vite'
import AlpineVitePlugin from './alpine-vite-plugin.js'

export default defineConfig({
    root: 'src',
    plugins: [
        AlpineVitePlugin()
    ],
    build: {
        outDir: '../dist'
    }
})