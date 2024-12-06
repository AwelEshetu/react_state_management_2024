import { createSlice, current } from '@reduxjs/toolkit'
import { CounterState } from '../app/types'

// Define the initial state using that type
const initialState: CounterState = { value: 0 }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state: CounterState) => {
        state.value += 1
        // debug the current state
        console.log(current(state));
      },
      
      decrement: (state: CounterState) => {
        state.value -= 1
      },
      reset: (state: CounterState) => {
        state.value = 0
      }
      
    }
  })

  // check what is inside the counterSlice
//console.log(counterSlice);
// extract actions from the reducer
export const { increment, decrement, reset } = counterSlice.actions;

// export the reducer by accessing reducer from counterSlice
export default counterSlice.reducer;