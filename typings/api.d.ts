import React from "react"
interface IAPIResponseType {
      success: boolean;
      timeseries: boolean;
      base: string;
      start_date: string;
      end_date: string;
      rates: {
            [key: string]: {
                  [key: string]: number;
            };
      };
}

interface IApiStateType {
      error: boolean;
      fetchPayload: IAPIResponseType;
      loading: boolean;
}


interface APIResponseType {
      code: string;
      codein: string;
      name: string;
      high: string;
      low: string;
      varBid: string;
      pctChange: string;
      bid: string;
      ask: string;
      timestamp: string;
      create_date: string;
}

interface ApiStateType {
      error: boolean;
      fetchPayload: APIResponseType[];
      loading: boolean;
}

interface LandingContextTypes {
      apiState: ApiStateType;
      toValue: string;
      fromValue: string;
      toValueReverse: string;
      fromValueReverse: string;
      currentRate: number;
      currencyResult: number;
      onSubmitForm: (e: any) => void;
      onChangeAmount: (e: any) => void;
      onChangeFromCode: (e: any) => void;
      onFlipForm: () => void;
      onChangeToCode: (e: any) => void;
}