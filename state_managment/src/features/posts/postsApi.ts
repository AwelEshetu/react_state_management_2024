//import { createSlice } from '@reduxjs/toolkit'
//import { PayloadAction } from '@reduxjs/toolkit';
import { PostItem, PostsResponse } from '../../app/types';
//import postService from '../../services/posts';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_BASE_URL;
const headers = {'content-type': 'application/json'};

// Define a service using a base URL and expected endpoints
export const postsApiSlice = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Posts'], // Define a tag type for posts
  endpoints: (builder) => ({
    getPosts: builder.query<PostItem[], {limit?: number, order?: string}>({
      query: ({limit=30, order='asc'}={}) => `/posts?limit=${limit}&order=${order}`,
      transformResponse: (response: PostsResponse) => {
        const { posts } = response;
        // Sort posts by likes in descending order
        return posts.sort((prev, next) => next.reactions.likes - prev.reactions.likes);
      },
      // TODO: use queryFn to fetch data from the server instead of query
      providesTags: ['Posts'], // define a tag for calling this endpoint
    }),
    getPost: builder.query<PostItem, number>({
      query: (postId: number) => `/posts/${postId}`,
      providesTags: ['Posts'], // define a tag for calling this endpoint
    }),
    addPost: builder.mutation({
      query: (newPost: PostItem) => ({
        url: '/posts',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(newPost),
      }),
      //https://redux-toolkit.js.org/rtk-query/usage/automated-refetching
      // invalidate the Posts tag to refetch the data automatically
      // meaning a component using useGetPostsQuery will refetch the data because we invalidated the cached Posts not to be used again
      // steps after addPost fired (from the above link docs):
      //1. The addPost mutation is fired off to add a post
      //2. Upon completion, RTK Query internally registers that the 'Posts' tag is now invalidated,
      // and removes the previously provided 'Post' tags from the cache
      //3. Since the getPosts endpoint has provided tags of type 'Posts' which now has invalid cache data, 
      // and the component is still subscribed to the data, the /posts request is automatically fired off again, 
      // fetching new data and registering new tags for the updated cached data
      invalidatesTags: ['Posts'], 
    }),
    updatePost: builder.mutation({
      query: (post: PostItem) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(post),
      }),
      invalidatesTags: ['Posts'],  // invalidate the Posts tag to refetch the data automatically
    }),
    deletePost: builder.mutation({
      query: (postId: number) => ({
        url: `/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'], // invalidate the Posts tag to refetch the data automatically
    }),
  }), 
});

//automatically generated hooks based on the defined endpoints and getPosts query
export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation, useDeletePostMutation, useUpdatePostMutation, endpoints } = postsApiSlice;
