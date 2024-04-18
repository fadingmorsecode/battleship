let gamestatus;

export function getGameStatus() {
  return gamestatus;
}

// allows attacklistener to make moves
export function changeStatusToTrue() {
  gamestatus = true;
}

// stops attacklistener from making moves
export function changeStatusToFalse() {
  gamestatus = false;
}
