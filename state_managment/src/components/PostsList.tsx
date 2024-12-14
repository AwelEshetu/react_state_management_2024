import React, { memo, Suspense } from 'react'
import {PostItem} from '../app/types'

import { CircularProgress, List } from '@mui/material';
import Post from './Post';

interface PostsProps {
  posts: PostItem[];
}
const PostsList: React.FC<PostsProps> = ({ posts }) => {

    return (
        <Suspense fallback={<CircularProgress />}>
            <List aria-label="posts">
                {
                    posts.map((post) => (
                    <Post key={post.id} post={post}/>
                    )) 
                }
            </List>
        </Suspense>
    )
};

export default memo(PostsList);