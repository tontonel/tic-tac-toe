import React, { useContext } from "react";
import {Context} from "../Game";

export default function (props) {
  const {winner} = useContext (Context);
  const className = "noSelect box box" + (props.id + 1);

  return (
    <div className = {className} onClick = {() => winner === -1 && props.handelClick(props.id)}>
      {props.current === true &&  <h1> x </h1>}
      {props.current === false &&  <h1> o </h1>}
    </div>
  );
}
