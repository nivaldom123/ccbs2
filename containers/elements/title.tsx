import React from "react";
import css from "styles/elements.module.scss";

interface TitleProps {
  id?: string;
  label?: string;
  title: string;
  description: string;
}

const Title = (props: TitleProps) => {
  return (
    <div id={props.id} className={css.title}>
      {props.label ? <label htmlFor={props.label}>{props.label}</label> : null}
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
export default Title;
