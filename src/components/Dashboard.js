import React, { useState, useContext, useEffect } from "react";
import Box from "./Box";
import { Context } from "../Game";
import Logic from "./Logic";
import CutLine from "./CutLine";

export default function (props) {
  const { setBoard, board, setWinner, winner, setPostion, togglePlayer } =
    useContext(Context);
  const [curr, setCurr] = useState(togglePlayer);
  const [counter, setCounter] = useState(0);

  function handelClick(index) {
    if (board[index] === -1) {
      setBoard([...board.slice(0, index), curr, ...board.slice(index + 1)]);

      const prop = {
        index: index,
        curr: curr,
        board: board,
        setPostion: setPostion,
      };
      if (Logic(prop)) {
        if (curr) setWinner(1);
        else setWinner(0);
        setCounter(0);
        setCurr(togglePlayer);
        return;
      }

      setCurr((prev) => !prev);
      setCounter((prev) => prev + 1);

      if (counter === 8) {
        setCounter(0);
        setWinner(2);
        setCurr(togglePlayer);
      }
    }
  }

  return (
    <div className='board'>
      <div className='board-row'>
        <Box id={0} handelClick={handelClick} current={board[0]} />
        <Box id={1} handelClick={handelClick} current={board[1]} />
        <Box id={2} handelClick={handelClick} current={board[2]} />
      </div>
      <div className='board-row'>
        <Box id={3} handelClick={handelClick} current={board[3]} />
        <Box id={4} handelClick={handelClick} current={board[4]} />
        <Box id={5} handelClick={handelClick} current={board[5]} />
      </div>
      <div className='board-row'>
        <Box id={6} handelClick={handelClick} current={board[6]} />
        <Box id={7} handelClick={handelClick} current={board[7]} />
        <Box id={8} handelClick={handelClick} current={board[8]} />
      </div>
      {winner !== -1 && winner !== 2 && <CutLine />}
    </div>
  );
}
