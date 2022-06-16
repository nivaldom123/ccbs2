import { ActionType } from 'typings/store';
import { createSlice } from '@reduxjs/toolkit';


// primary
// secondry
interface SelectCodeType {
    primaryCode: string;
    secondryCode: string;
}
const initialState = {
    primaryCode: `USD`,
    secondryCode: `BRL`,
} as SelectCodeType

const currencycode = createSlice({
    name: 'Amount Select Slice',
    initialState: initialState,
    reducers: {
        updatePrimaryCode: (state: SelectCodeType, action: ActionType) => {
            state.primaryCode = action.payload
        },
        updateSecondryCode: (state: SelectCodeType, action: ActionType) => {
            state.secondryCode = action.payload
        },
    }
})


export default currencycode; 