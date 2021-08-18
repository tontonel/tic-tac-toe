import React, { useContext } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Context } from "../Game";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

export default function StartPage() {
  const { togglePlayer, setStart, setPlayer } = useContext(Context);

  return (
    <div className='start-page'>
      <div className='start-page-font-player'>
        <h2 className='start-page-font-player-name'>Player 1 </h2>
        <h2 className='start-page-font-player-selection'>
          {togglePlayer ? "X" : "O"}
        </h2>
      </div>
      <SwapHorizIcon
        fontSize='large'
        onClick={() => setPlayer((prev) => !prev)}
      />
      <div className='start-page-font-player'>
        <h2 className='start-page-font-player-name'>Player 2 </h2>
        <h2 className='start-page-font-player-selection'>
          {togglePlayer ? "O" : "X"}
        </h2>
      </div>
      <PlayArrowIcon
        style={{ fontSize: 50 }}
        onClick={() => setStart((prev) => !prev)}
      />
    </div>
  );
}
