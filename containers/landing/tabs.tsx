import ChartIcon from "constants/icons/ChartIcon";
import CurrencyIcon from "constants/icons/CurrencyIcon";
import css from "containers/css/container.module.scss";
import { useRouter } from "next/router";

const Tabs = () => {
  const { push } = useRouter();
  return (
    <div className={css.tabs}>
      <button type="button" style={{ background: "#fff" }}>
        <i>
          <CurrencyIcon />
        </i>
        Conversor
      </button>
      <button type="button" onClick={() => push("/#charts")}>
        <i>
          <ChartIcon />
        </i>
        Gráficas
      </button>
    </div>
  );
};

export default Tabs;
