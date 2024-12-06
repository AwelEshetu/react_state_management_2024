import { Fragment } from 'react'
import './App.css'
import {useGetPostsQuery} from './features/posts/postsApi';
import Post from './components/Post';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import { CircularProgress, Typography } from '@mui/material';

const App= ()=> {
 const { data , isFetching } = useGetPostsQuery();
  

  return (
    <>
     
      <div>
        {isFetching && <CircularProgress />}
        <h4>React state management showcase using RTK</h4>
        <Typography variant="body2">Api used : <Link href="https://dummyjson.com/docs/posts" target="_blank" rel="noreferrer">Dummy json posts</Link></Typography>
        <Typography variant="body2">Number of posts fetched: {data?.posts.length}</Typography>
        <List>
          {data?.posts.map((post) => (
            <Fragment key={post.id}>
              <Post post={post} />
            </Fragment>
          ))} 
        </List>
      </div>
    </>
  )
}

export default App
