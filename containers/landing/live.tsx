import React from "react";
import css from "containers/css/live.module.scss";
import useCurrency from "store/hooks/useCurrency";
import symbolFind from "constants/symbolfind";
import { landingContext } from "context/landing";

const emojiText = {
  error: "❗ error",
  loading: "◯",
};

/**
 * Live Exchange Rate Cpmponent
 * @returns
 */
const LiveExchangeRate = () => {
  const { primaryCode, secondryCode } = useCurrency();
  const arrayNumbers = [1, 2, 5, 10, 25, 50, 100, 500, 1000, 10000];
  const { apiState, currentRate } = React.useContext(landingContext);

  const symbolPrimary = symbolFind(primaryCode);
  const symbolSecondry = symbolFind(secondryCode);
  return (
    <div className={css.tables}>
      <div className={css.table}>
        <div className={css.row}>
          <span>
            {symbolPrimary} {primaryCode}
          </span>
          <span>
            {symbolSecondry} {secondryCode}
          </span>
        </div>
        {
          //  @ts-ignore
          arrayNumbers.map((n, i) => (
            <div key={i} className={css.row}>
              <span>
                {symbolPrimary} {n} {primaryCode}
              </span>
              <span>
                {apiState.error ? (
                  emojiText.error
                ) : apiState.loading ? (
                  emojiText.loading
                ) : (
                  <React.Fragment>
                    {symbolSecondry} {(n * currentRate).toFixed(2)}{" "}
                    {secondryCode}
                  </React.Fragment>
                )}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default LiveExchangeRate;
