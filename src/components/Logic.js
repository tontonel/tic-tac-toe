export default function Logic(props) {
  const { index, curr, board, setPostion } = props;

  function GameWinner(orientation, index) {
    setPostion({
      index: index,
      orientation: orientation,
    });
    return true;
  }

  if (
    index % 3 === 0 &&
    board[index + 1] === board[index + 2] &&
    board[index + 2] === curr
  )
    return GameWinner("orizontal", index);

  if (
    index % 3 === 1 &&
    board[index - 1] === board[index + 1] &&
    board[index + 1] === curr
  )
    return GameWinner("orizontal", index);

  if (
    index % 3 === 2 &&
    board[index - 1] === board[index - 2] &&
    board[index - 2] === curr
  )
    return GameWinner("orizontal", index);

  if (
    index < 3 &&
    board[index + 3] === board[index + 6] &&
    board[index + 6] === curr
  )
    return GameWinner("vertical", index);

  if (
    index < 6 &&
    index > 2 &&
    board[index - 3] === board[index + 3] &&
    board[index + 3] === curr
  )
    return GameWinner("vertical", index);

  if (
    index < 9 &&
    index > 5 &&
    board[index - 3] === board[index - 6] &&
    board[index - 3] === curr
  )
    return GameWinner("vertical", index);

  if (index % 4 === 0 && board[0] === board[8] && board[8] === curr)
    return GameWinner("oblic-primary", index);

  if (index % 4 === 0 && board[0] === board[4] && board[4] === curr)
    return GameWinner("oblic-primary", index);

  if (index % 4 === 0 && board[4] === board[8] && board[8] === curr)
    return GameWinner("oblic-primary", index);

  if (index === 4 && board[2] === board[6] && board[2] === curr)
    return GameWinner("oblic-secondary", index);

  if (index === 6 && board[2] === board[4] && board[2] === curr)
    return GameWinner("oblic-secondary", index);

  if (index === 2 && board[4] === board[6] && board[4] === curr)
    return GameWinner("oblic-secondary", index);

  return false;
}
