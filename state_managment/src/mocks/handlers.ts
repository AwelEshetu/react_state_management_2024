import { http , HttpResponse} from 'msw'
import {mockPosts} from './mockPosts.ts'

const baseUrl = import.meta.env.VITE_BASE_URL;

export const handlers = [
  // Intercept the "GET /resource" request.
  http.get(`${baseUrl}/posts`, () => {
    return new HttpResponse(JSON.stringify(mockPosts), {  status: 200, headers: { 'Content-Type': 'application/json' }  })
  }),

  // Intercept the "GET /resource/:id" request.
  http.get(`${baseUrl}/posts/:id`, ({params}) => {
    const { id } = params
    const post = mockPosts.find((post) => post.id === Number(id));
    if (!post) {
      return new HttpResponse('Post not found', { status: 404 })
    }

    return new HttpResponse(JSON.stringify(post), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }),

  // Intercept the "POST /resource" request.
  http.post(`${baseUrl}/posts`, async({request}) => {
    const body = await request.json()
    return new HttpResponse(JSON.stringify(body), { status: 201, headers: { 'Content-Type': 'application/json' } })
  }),

  // Intercept the "PUT /resource/:id" request. TODO: fix this
  http.put(`${baseUrl}/posts/:id`, async({request}) => {
    const body = await request.json()
    return new HttpResponse(JSON.stringify(body), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }),

  // Intercept the "DELETE /resource/:id" request.
  http.delete(`${baseUrl}/posts/:id`, ({params}) => {
    const { id } = params
    return new HttpResponse(JSON.stringify({id}), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }),

]