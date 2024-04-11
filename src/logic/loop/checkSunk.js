export default function checkSunk(board) {
  if (board.allSunk() === true) {
    return true;
  }
  return false;
}
