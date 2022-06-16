import { configureStore } from "@reduxjs/toolkit";
// Slices
import amount from "./slices/amount";
import currencycode from "./slices/currency";


/**************************
Redux Store
***************************/
const store = configureStore({
      reducer: {
            amount: amount.reducer,
            currency: currencycode.reducer
      },
      devTools: process.env.NODE_ENV === 'development'
})
export default store;


