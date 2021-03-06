import { useDispatch } from "react-redux";
import { AppDispatch } from "typings/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch;