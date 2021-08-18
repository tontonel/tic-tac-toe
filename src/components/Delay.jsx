import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Game";

export default function Delay({ children, waitTime }) {
  const [show, setShow] = useState(false);
  const { winner } = useContext(Context);

  useEffect(() => {
    if (winner !== 2)
      setTimeout(() => {
        setShow(true);
      }, waitTime);
    else setShow(true);
  }, [waitTime]);

  return show ? children : null;
}
