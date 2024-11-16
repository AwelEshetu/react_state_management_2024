import { useCallback } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks';
import { decrement, increment, reset } from './reducers/counterReducer';

const App= ()=> {
  const value = useAppSelector((state) => state.counter.value);
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
