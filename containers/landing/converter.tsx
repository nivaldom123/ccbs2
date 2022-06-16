import React from "react";
import Tabs from "./tabs";
import SwapButton from "./swap";
import InputField from "./input";
import SelectBox from "./select";
import useAmount from "store/hooks/useAmount";
import useCurrency from "store/hooks/useCurrency";
import PulseDot from "containers/elements/pulse";
import LayerComponent from "containers/elements/layer";
import css from "containers/css/container.module.scss";
import { landingContext } from "context/landing";

const Converter = () => {
  const { amountState } = useAmount();
  const { primaryCode, secondryCode } = useCurrency();
  const {
    apiState,
    toValue,
    fromValue,
    fromValueReverse,
    toValueReverse,
    onFlipForm,
    onSubmitForm,
    onChangeAmount,
    onChangeToCode,
    onChangeFromCode,
  } = React.useContext(landingContext);

  return (
    <div className={css.main}>
      <LayerComponent />
      <form className={css.form}>
        {/* Tabs Component */}
        <Tabs />
        <div className={css.converter}>
          {/* Input Field Component */}
          <InputField
            title="Amount"
            placeholder="Enter amount"
            value={amountState}
            onChange={onChangeAmount}
          />
          {/* Select Box For Base Value */}
          <div className={css.select}>
            <SelectBox
              title="From"
              value={primaryCode}
              onChange={onChangeFromCode}
            />
            {/* Swap The Order of Input */}
            <SwapButton onClick={onFlipForm} />
            {/* Select Box For Convert Value */}
            <SelectBox
              title="To"
              value={secondryCode}
              onChange={onChangeToCode}
            />
          </div>
        </div>
        <div className={css.value}>
          {apiState.error ? (
            <div className={css.exchange}>
              <h1
                style={{ color: "rgba(255, 45, 85,.05)", fontSize: "1.1rem" }}
              >
                Failed to fetch
              </h1>
            </div>
          ) : apiState.loading ? (
            <div className={css.exchange}>
              <PulseDot size={25} style={{ marginRight: "10px" }} />
              <h1>Computing Exchange Rates...</h1>
            </div>
          ) : (
            <React.Fragment>
              <div className={css.exchange}>
                <h1>{fromValue}</h1>
                <h1>=</h1>
                <h1>{toValue}</h1>
              </div>
              <div className={css.exchange}>
                <h1>{fromValueReverse}</h1>
                <h1>=</h1>
                <h1>{toValueReverse}</h1>
              </div>
            </React.Fragment>
          )}
        </div>
        <div className={css.submit}>
          <div className={css.info}>
            <p>
              {`
                A taxa de câmbio para o ${primaryCode} / ${secondryCode} é atualmente de ${toValue}. Cotação ${primaryCode} / ${secondryCode} sempre atualizada para que você fique informado sobre o ${primaryCode} / ${secondryCode} e tome as melhores decisões. O valor das Taxas de Câmbio é meramente informativo.
                `}
            </p>
          </div>
          <button type="submit" onClick={onSubmitForm}>
            Convert
          </button>
        </div>
      </form>
    </div>
  );
};
export default Converter;
