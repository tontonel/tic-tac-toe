import React, { useContext, useEffect } from "react";
import { Context } from "../Game";
import ReplayIcon from "@material-ui/icons/Replay";
import { useTransition, animated } from "react-spring";

export default function Winner({ handelButton }) {
  const { winner, togglePlayer, setPlayer1Score, setPlayer2Score } =
    useContext(Context);
  const transition = useTransition(winner, {
    from: { y: 100, opacity: 0 },
    enter: { y: 10, opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });


  useEffect(() => {
    console.log(togglePlayer, winner);
    return () => {
      if (togglePlayer == winner) setPlayer1Score((prev) => prev + 1);
      else if (winner !== 2) setPlayer2Score((prev) => prev + 1);
    };
  }, []);

  return (
    <>
      {transition((style, item) => (
        <animated.div className='noSelect winner' style={style}>
          <div className='winner-text'>
            {winner == togglePlayer ? (
              <h2>The winner is Player1</h2>
            ) : (
              winner !== 2 && <h2>The winner is Player2</h2>
            )}
            {winner === 2 && <h2>It's a draw </h2>}
          </div>
          <div className='retry-button'>
            <ReplayIcon
              className='btn'
              onClick={handelButton}
              fontSize='large'
            ></ReplayIcon>
          </div>
        </animated.div>
      ))}
    </>
  );
}
