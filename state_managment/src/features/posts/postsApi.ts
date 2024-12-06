//import { createSlice } from '@reduxjs/toolkit'
//import { PayloadAction } from '@reduxjs/toolkit';
import { PostsResponse } from '../../app/types';
//import postService from '../../services/posts';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_BASE_URL;

// Define a service using a base URL and expected endpoints
export const postsApiSlice = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, number|void>({
      query: (limit=30, order='asc') => `/posts?limit=${limit}&order=${order}`,
      // TODO: use queryFn to fetch data from the server instead of query
    }),
  }),
});

//automatically generated hooks based on the defined endpoints and getPosts query
export const { useGetPostsQuery } = postsApiSlice;

