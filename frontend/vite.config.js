import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.API_URL': JSON.stringify(env.API_URL),
    },
    plugins: [react(), jsconfigPaths()],
  };
});
