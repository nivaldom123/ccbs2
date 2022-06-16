import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "typings/store";
import selectSelf from "./self";


const amount = (state: RootState) => state.amount

const _amount = createDraftSafeSelector(selectSelf, amount)

export default _amount;