import React from "react";
import css from "containers/css/container.module.scss";

type InputProps = React.ComponentPropsWithRef<"input">;
const InputField = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div className={css.field}>
        <label>{props.title}</label>
        <input
          ref={ref}
          maxLength={10}
          min={1}
          type="number"
          placeholder={props.placeholder}
          onChange={props.onChange}
          {...props}
        />
      </div>
    );
  }
);

export default InputField;
