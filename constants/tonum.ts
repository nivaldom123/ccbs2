

const toNumber = (value: number | string, decimal: number = 2) => {
      const n = Number(value);
      if (n !== null) {
            const f = decimal ? n.toFixed(decimal) : n;
            return Number(f);
      }
      if (n === null) {
            return NaN
      }
      return Number(n);
};

export default toNumber;