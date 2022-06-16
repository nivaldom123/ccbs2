import fetchSlice from "./slice";
import React, { useReducer as uR } from "react";
const { initialState, reducer, action } = fetchSlice
/**
 * Hook for client data fetching
 * @param url 
 * @param options 
 * @returns 
 */
const useFetch = <T>(url: string, options?: RequestInit) => {
    const [state, dispatch] = uR(reducer, initialState);
    if (!url) {
        throw new Error("You forget to add url");
    }
    const fetchData = async () => {
        try {

            const response = await fetch(url, options);
            const dataFiles = await response.json() as T;
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            dispatch(action.setData(dataFiles));
            dispatch(action.isLoading(false));


        } catch (e) {
            dispatch(action.isError(true));
            console.log(e);
        }
    };
    React.useEffect(() => {
        let safeCall = true;
        if (safeCall) {
            void fetchData();
        }
        return () => {
            safeCall = false;
        };
    }, [url]);
    const response = state.response as T
    const { error, loading } = state
    return { response, error, loading }
};


export default useFetch;
