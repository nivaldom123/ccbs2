import SwapIcon from "constants/icons/SwapIcon";
import css from "containers/css/container.module.scss";
import React from "react";

const SwapButton = (props: React.ComponentPropsWithRef<"i">) => {
  return (
    <div className={css.field}>
      <label style={{ visibility: "hidden" }}> none</label>
      <i className={css.swap} {...props}>
        <SwapIcon />
      </i>
    </div>
  );
};

export default SwapButton;
