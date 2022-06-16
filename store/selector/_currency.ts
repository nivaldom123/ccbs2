import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "typings/store";
import selectSelf from "./self";


const currency = (state: RootState) => state.currency

const _currency = createDraftSafeSelector(selectSelf, currency)

export default _currency;