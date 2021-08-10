import React, {useContext} from 'react';
import { Context } from '../Game';
import SwapVertIcon from '@material-ui/icons/SwapVert';

export default function Score() {
    const {player1Score, player2Score, start, togglePlayer, setPlayer} = useContext (Context);

    return (
        <div className= "score">
            <h2 className= "score-font">P1: {player1Score}</h2>
            <h2 className= "score-font">P2: {player2Score}</h2>
        </div>
    )
}
