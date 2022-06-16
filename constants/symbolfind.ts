import country from "./country";
/**************************
Symbol Finder
***************************/
const symbolFind = (code: string) => {
      return country.find((d) => d.code === code)?.symbol;
};


export default symbolFind;