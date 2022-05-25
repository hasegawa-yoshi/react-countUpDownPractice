import { memo } from "react";

export const Button = memo((props) => {
  console.log(1);
  return <button onClick={props.onClick}>{props.children}</button>;
});
