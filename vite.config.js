import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin to handle figma:asset imports by replacing them with a placeholder
// This prevents the app from crashing when missing the Figma plugin environment
const figmaAssetPlugin = () => {
  return {
    name: 'figma-asset-plugin',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return id;
      }
    },
    load(id) {
      if (id.startsWith('figma:asset/')) {
        // Return a module that exports a placeholder image URL
        // You can replace this URL with your own fallback image
        return `export default "https://placehold.co/600x400?text=Image+Missing"`;
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), figmaAssetPlugin()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
