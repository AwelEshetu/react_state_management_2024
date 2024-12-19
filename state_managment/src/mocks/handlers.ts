import { http , HttpResponse} from 'msw'
import {mockPosts} from './mockPosts.ts'

const baseUrl = import.meta.env.VITE_BASE_URL;

export const handlers = [
  // Intercept the "GET /resource" request.
  http.get(`${baseUrl}/posts`, () => {
    // const response = {
    //     data: {
    //         posts: mockPosts,
    //     },
    //     isFetching: false,
    // }
    return HttpResponse.json(mockPosts)
  }),
]