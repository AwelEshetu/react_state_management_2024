import './App.css'
import {useGetPostsQuery} from './features/posts/postsApi';
import PostsList from './components/PostsList';
import Link from '@mui/material/Link';
import { CircularProgress, Typography } from '@mui/material';

const App= ()=> {
 const { data , isFetching } = useGetPostsQuery();
  

  return (
    <>
      {isFetching && <CircularProgress />}
      <h4>React state management showcase using RTK</h4>
      <Typography variant="body2">Api used : <Link href="https://dummyjson.com/docs/posts" target="_blank" rel="noreferrer">Dummy json posts</Link></Typography>
      <Typography variant="body2">Number of posts fetched: {data?.posts.length}</Typography>
      {data?.posts && <PostsList posts={data.posts} />}
    </>
  )
}

export default App
