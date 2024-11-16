// line below is needed to make the test setup file work
/// <reference types="vitest/config" /> 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, //this config along with installing @types/jest, makes test keywords such as : describe, test and expect, to be available globally, so we no longer need to import them in each test file
    setupFiles: './testSetup.ts',
  }

})
