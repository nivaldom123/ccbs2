/**************************
Types
***************************/
import type { ActionType } from "typings/store";
/**************************
Mixed
***************************/
import React from "react";
import delay from "constants/delay";
import useAmount from "store/hooks/useAmount";
import useCurrency from "store/hooks/useCurrency";
import dynamicValues from "constants/dynamicvalues";
import toNumber from "constants/tonum";
import { IAPIResponseType, IApiStateType } from "typings/api";

/**************************
Landing Page Context
***************************/
// @ts-ignore
const LandingContext = React.createContext<LandingContextTypes>(null);

/**************************
Slice For useReducer()
***************************/
const convertSlice = {
  initialState: {
    error: false,
    fetchPayload: {} as IAPIResponseType,
    loading: true,
  } as IApiStateType,
  reducer: (state: IApiStateType, action: ActionType) => {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: action.payload };
      case "ERROR":
        return { ...state, error: action.payload };
      case "RESPONSE":
        return { ...state, fetchPayload: action.payload };
      default:
        return state;
    }
  },
  actions: {
    loading: (payload: any) => ({ type: "LOADING", payload }),
    error: (payload: any) => ({ type: "ERROR", payload }),
    fetchPayload: (payload: any) => ({ type: "RESPONSE", payload }),
  },
};

const LandingProvider = (props: React.PropsWithChildren<{}>) => {
  const decimal = 6;
  const { actions, initialState, reducer } = convertSlice;
  const [apiState, dispatch] = React.useReducer(reducer, initialState);
  const { amountState, updateAmount } = useAmount();
  const { primaryCode, secondryCode } = useCurrency();
  const { updatePrimaryCode, updateSecondryCode } = useCurrency();

  /**************************
      Reverse Value
      ***************************/
  const opposite = (initialAmount: number, exchangeRate: number) => {
    // INR 1-> USD 0.0128
    // USD 1-> INR 77.9950
    const val = initialAmount * (1 / exchangeRate);
    return toNumber(val, decimal);
  };

  /**************************
      Local State API
      ***************************/
  const { fetchPayload } = apiState;

  /**************************
      Get Output Result From API
      ***************************/

  const result = toNumber(fetchPayload?.result, decimal);
  const rate = toNumber(fetchPayload?.info?.rate, decimal);
  // console.log(result);
  /**************************
      Static Value
      ***************************/
  const fromValue = dynamicValues(amountState, primaryCode);
  const fromValueReverse = dynamicValues(amountState, secondryCode);
  /************************** 
      Dynamic Value
      ***************************/
  const toValue = dynamicValues(result, secondryCode);
  const toValueReverse = dynamicValues(
    opposite(amountState, rate),
    primaryCode
  );
  /**************************
      Endpoint
      ***************************/
  const url = `https://api.exchangerate.host/convert?from=${primaryCode}&to=${secondryCode}&amount=${amountState}`;
  /**************************
      Data Fetching Submit Handler
      ***************************/
  const fetchFunction = async () => {
    dispatch(actions.loading(true));
    try {
      const res = await fetch(url);
      const data = await res.json();
      // 2 Sec Delay For Better Loading UI
      await delay(2000);
      dispatch(actions.fetchPayload(data));
      dispatch(actions.loading(false));
    } catch (e) {
      dispatch(actions.error(true));
      console.log(e);
    }
  };

  /**************************
      Handler For On Change Amount
      ***************************/
  const onChangeAmount = React.useCallback(
    (e: any) => {
      updateAmount(e.target.value);
    },
    [amountState]
  );

  /**************************
      Handler For On Change From Code (Initial)
      ***************************/
  const onChangeFromCode = React.useCallback(
    (e: any) => {
      updatePrimaryCode(e.target.value);
    },
    [primaryCode]
  );
  /**************************
      Handler For On Change To Code (Secondry)
      ***************************/
  const onChangeToCode = React.useCallback(
    (e: any) => {
      updateSecondryCode(e.target.value);
    },
    [secondryCode]
  );

  /**************************
      Submit Form Get Value
      ***************************/
  const onSubmitForm = React.useCallback((e: any) => {
    e.preventDefault();
    void fetchFunction();
  }, []);
  /**************************
      Flip Form and Get Value
      ***************************/
  const [isFlip, setisFlip] = React.useState(false);

  const onFlipForm = React.useCallback(() => {
    setisFlip(!isFlip);
    updatePrimaryCode(secondryCode);
    updateSecondryCode(primaryCode);
    // void fetchFunction();
  }, [isFlip, primaryCode, secondryCode]);

  /**************************
    Render Once and Render if dependencies Change 
    ***************************/
  const safeCallRef = React.useRef<boolean>();
  React.useEffect(() => {
    safeCallRef.current = true;
    if (safeCallRef.current) {
      void fetchFunction();
    }
    return () => {
      safeCallRef.current = false;
    };
  }, [onChangeAmount, onChangeFromCode, onChangeToCode, onFlipForm]);

  /**************************
  Returs Values
  ***************************/

  const value = {
    // State Values
    apiState,
    // Values
    toValue,
    fromValue,
    toValueReverse,
    fromValueReverse,
    // Dynamic Api Values
    currentRate: rate,
    currencyResult: result,
    // Handers
    onSubmitForm,
    onChangeAmount,
    onChangeFromCode,
    onFlipForm,
    onChangeToCode,
  };

  return (
    <LandingContext.Provider value={value}>
      {props.children}
    </LandingContext.Provider>
  );
};

export { LandingContext as landingContext };
export default LandingProvider;
