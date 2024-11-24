import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterReducer';
//import postReducer from '../futures/posts/postsApi';
import { postsApiSlice } from '../features/posts/postsApi';

// Create a store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        [postsApiSlice.reducerPath]: postsApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApiSlice.middleware)
})

// export types related to store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Tests with the store
// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
//store.dispatch(increment())
// {value: 1}
//store.dispatch(increment())
// {value: 2}
//store.dispatch(decrement())
// {value: 1}
//store.dispatch(increment())
// {value: 2}
//store.dispatch(reset())
// {value: 0}

export default store