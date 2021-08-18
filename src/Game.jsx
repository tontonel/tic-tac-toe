import Dashboard from "./components/Dashboard";
import React, { useState, createContext, useRef, useEffect } from "react";
import Winner from "./components/Winner";
import Delay from "./components/Delay";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Score from "./components/Score";
import StartPage from "./components/StartPage";

export const Context = createContext();

export default function Game() {
  const { height, width } = useWindowDimensions();

  const [board, setBoard] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
  const [winner, setWinner] = useState(-1);
  const [postion, setPostion] = useState({});
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [togglePlayer, setPlayer] = useState(true);
  const [start, setStart] = useState(false);

  const context = {
    setBoard,
    board,
    winner,
    setWinner,
    postion,
    setPostion,
    player1Score,
    player2Score,
    setPlayer1Score,
    setPlayer2Score,
    togglePlayer,
    setPlayer,
    setStart,
  };
  // useEffect (() => {
  //   console.log (cutLineStyle);
  // },[cutLineStyle]);

  function handelButton() {
    setWinner(-1);
    setBoard([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
  }

  return (
    <Context.Provider value={context}>
      {!start ? (
        <StartPage />
      ) : (
        <>
          <Score />
          <Dashboard />
          {winner !== -1 && (
            <Delay waitTime={1500}>
              <Winner handelButton={handelButton} />
            </Delay>
          )}
        </>
      )}
    </Context.Provider>
  );
}
