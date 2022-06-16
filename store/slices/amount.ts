import { ActionType } from 'typings/store';
import { createSlice } from '@reduxjs/toolkit';
type AmountState = number

const initialState: AmountState = 1

const amount = createSlice({
      name: 'Amount Slice',
      initialState: initialState,
      reducers: {
            updateAmount: (_state: AmountState, action: ActionType) => {
                  return action.payload
            }
      }
})


export default amount;