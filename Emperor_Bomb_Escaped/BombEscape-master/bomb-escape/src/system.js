import { Directions } from './controller';

const BOARD_WIDTH = 31;
const BOARD_HEIGHT = 31;
const MIN_BOMBS_PER_TURN = 3;
const DIFFICULTY_INCREASE_INTERVAL = 7;

export const update = (gameState, turn, move = Directions.STAY) => {
  const newPlayerPos = doMove(gameState.playerPosition, move);
  const tickBombs = gameState.bombs
    .filter(
      b => b.timer > 0
    )
    .map(
      b => Object.assign({}, b, { timer: b.timer - 1 })
    );

  const newBombs = [...tickBombs, ...createBombs(tickBombs, newPlayerPos, MIN_BOMBS_PER_TURN + turn / DIFFICULTY_INCREASE_INTERVAL, BOARD_WIDTH, BOARD_HEIGHT)];

  const gameOver = newBombs.some(bomb => bomb.x === newPlayerPos.x && bomb.y === newPlayerPos.y) || newBombs.filter(bomb => bomb.timer === 0).some(bomb => Math.abs(bomb.x - newPlayerPos.x) + Math.abs(bomb.y - newPlayerPos.y) <= 2);

  return {
    playerPosition: newPlayerPos,
    bombs: newBombs,
    gameOver
  };
}

const doMove = (playerPosition, move) => {
  switch (move) {
    case Directions.STAY:
      return playerPosition;
    case Directions.UP:
      return playerPosition.y > 0
        ? Object.assign({}, playerPosition, { y: playerPosition.y - 1 })
        : Object.assign({}, playerPosition, { y: BOARD_HEIGHT - 1 });
    case Directions.DOWN:
      return playerPosition.y < BOARD_HEIGHT - 1
        ? Object.assign({}, playerPosition, { y: playerPosition.y + 1 })
        : Object.assign({}, playerPosition, { y: 0 });
    case Directions.LEFT:
      return playerPosition.x > 0
        ? Object.assign({}, playerPosition, { x: playerPosition.x - 1 })
        : Object.assign({}, playerPosition, { x: BOARD_WIDTH - 1 });
    case Directions.RIGHT:
      return playerPosition.x < BOARD_WIDTH - 1
        ? Object.assign({}, playerPosition, { x: playerPosition.x + 1 })
        : Object.assign({}, playerPosition, { x: 0 });
    default: return playerPosition;
  }
}

const createBombs = (currentBombs, playerPos, numberToCreate, boardWidth, boardHeight) => {
  const possiblePosisions = Array.from({ length: boardWidth * boardHeight })
    .map((item, index) => ({
      timer: 2,
      x: index % boardWidth,
      y: Math.floor(index / boardWidth)
    }))
    .filter(
      position => currentBombs.every(bomb => bomb.x !== position.x && bomb.y !== position.y) && playerPos.x !== position.x && playerPos.y !== position.y
    );
  return knuthShuffle(possiblePosisions).slice(0, Math.min(numberToCreate, possiblePosisions.length));
}

function knuthShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}