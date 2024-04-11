let gamestatus;

export function getGameStatus() {
  return gamestatus;
}

// allows eventlistener to make moves
export function changeStatusToTrue() {
  gamestatus = true;
}

// stops eventlistener from making moves
export function changeStatusToFalse() {
  gamestatus = false;
}
