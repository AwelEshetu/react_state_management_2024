// cleans up after each test by resetting jsdom, which is simulating the browser.

import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './src/mocks/server'
 
// establish API mocking before all tests
beforeAll(() =>{
  server.listen();
  console.log('server listening');
} )

// clean up once the tests are done
afterEach(() => {
  server.resetHandlers();
  cleanup(); // cleans up after each test by resetting jsdom, which is simulating the browser.
})

// clean up once the tests are done
afterAll(() => {
  server.close();
  console.log('server closed');
})
