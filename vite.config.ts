import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), 
    VitePWA({ 
      // registerType: 'autoUpdate',
      registerType: 'prompt',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      workbox: {
        skipWaiting:true,
        // sourcemap: true,
        // cleanupOutdatedCaches: false,
        globPatterns: ['**/*.{js,jsx,css,html,ico,png,svg,woff,ttf,woff2}']
      }
   })],
});