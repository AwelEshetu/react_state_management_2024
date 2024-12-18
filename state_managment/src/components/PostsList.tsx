import React, { memo, Suspense, useCallback } from 'react'
import {PostItem} from '../app/types'

import { CircularProgress, List } from '@mui/material';
import Post from './Post';
import { useUpdatePostMutation } from '../features/posts/postsApi';

interface PostsProps {
  posts: PostItem[];
}
const PostsList: React.FC<PostsProps> = ({ posts }) => {
    // https://redux-toolkit.js.org/rtk-query/usage/error-handling
    const [updatePost] = useUpdatePostMutation();

    const handleLike = useCallback((post: PostItem) => {
        updatePost({ ...post, reactions: { ...post.reactions, likes: post.reactions.likes + 1 } });
      }, [updatePost]);
    
      const handleDislike = useCallback((post: PostItem) => {
        updatePost({ ...post, reactions: { ...post.reactions, dislikes: post.reactions.dislikes + 1 } });
      }, [updatePost]);

    return (
        <Suspense fallback={<CircularProgress />}>
            <List aria-label="posts">
                {
                    posts.map((post) => (
                    <Post key={post.id} post={post} handleLike={handleLike} handleDislike={handleDislike}/>
                    )) 
                }
            </List>
        </Suspense>
    )
};

export default memo(PostsList);