import { StateTypes, ActionTypes } from "./types"


const fetchSlice = {
    initialState: {
        error: false,
        loading: true,
        response: []
    } as StateTypes,
    reducer: (state: StateTypes, action: ActionTypes) => {
        switch (action.type) {
            case "DATA":
                return {
                    ...state,
                    response: action.payload
                }
            case "LOADING":
                return {
                    ...state,
                    loading: action.payload
                }
            case "ERROR":
                return {
                    ...state,
                    error: action.payload
                }
            default:
                return state
        }
    },
    action: {
        setData: (payload: any) => ({ type: 'DATA', payload }),
        isLoading: (payload: any) => ({ type: 'LOADING', payload }),
        isError: (payload: any) => ({ type: 'ERROR', payload }),
    }
}



export default fetchSlice;
