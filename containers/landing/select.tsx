import React from "react";
import country from "constants/country";
import css from "containers/css/container.module.scss";

type SelectProps = React.ComponentPropsWithRef<"select">;
const SelectBox = React.forwardRef(
  (props: SelectProps, ref: React.Ref<HTMLSelectElement>) => {
    return (
      <div className={css.field}>
        <label>{props.title}</label>
        <select ref={ref} {...props}>
          {country.map((c, i) => (
            <option key={i} value={c.code}>
              {c.code}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default SelectBox;
