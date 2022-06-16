import symbolFind from "./symbolfind";


/**************************
A Simple Function For Output Values
***************************/
const dynamicValues = (amount: number, currency: string) => {
      let symbol = symbolFind(currency);
      return `${symbol} ${amount} ${currency}`;
};


export default dynamicValues;