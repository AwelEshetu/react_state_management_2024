import { useCallback } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { decrement, increment, reset } from './features/counterReducer';
import {useGetPostsQuery} from './features/posts/postsApi';

const App= ()=> {
  const value = useAppSelector((state) => state.counter.value);
 const { data , isFetching } = useGetPostsQuery();
  const dispatch = useAppDispatch();

  // event handlers
  const handlePlus = useCallback(
    () => { 
      dispatch(increment());  
  }, [dispatch, increment]);
  
  const handleMinus = useCallback(() => { 
      dispatch(decrement());
  }, [dispatch, decrement]);

  const handleReset = useCallback(() => {
    dispatch(reset())
  }, [dispatch, reset]);

  return (
    <>
      <div>
        <p>Number of posts fetched: {data?.posts.length}</p>
        <ul>
          {data?.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))} 
        </ul>
        </div>
      <h1>React state management options</h1>
      <h3>Current value:</h3>
      <p>{value}</p>
      <div className="card">
        <button onClick={handlePlus}>
          Plus
        </button>
        <button onClick={handleMinus}>
          Minus
        </button>
        <button onClick={handleReset}>Reset</button>
        </div>
    </>
  )
}

export default App
