// cleans up after each test by resetting jsdom, which is simulating the browser.

import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './src/mocks/server'
 
// establish API mocking before all tests
beforeAll(() => server.listen())

// reset any request handlers that we may add during the tests, so they don't affect other tests
afterEach(() => {
  server.resetHandlers(); 
  cleanup();
})

// clean up once the tests are done
afterAll(() => server.close())
