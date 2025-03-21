import { createContext, useReducer } from "react";
import { MOVE_O, MOVE_X } from "/src/constants/constants";
import gameReducer, {
  GAME_JUMPTO_ACTION,
  GAME_PLAY_ACTION,
} from "../reducers/game.reducer";

const GameContext = createContext(null);

const GameContextProvider = ({ children }) => {
  const [gameState, dispatchGameAction] = useReducer(gameReducer, {
    moveHistory: [null],
    step: 0,
  });

  const currentPlayer = gameState.step % 2 === 0 ? MOVE_X : MOVE_O;
  // Build cells
  const currentCells = Array(9).fill(null);
  for (let i = 1; i < gameState.step + 1; ++i) {
    const p = i % 2 === 1 ? MOVE_X : MOVE_O; // Because 1st move history is empty board
    currentCells[gameState.moveHistory[i]] = p;
  }

  const play = (moveIndex) => {
    dispatchGameAction({
      type: GAME_PLAY_ACTION,
      payload: {
        moveIndex: moveIndex,
      },
    });
  };

  const jumpToHistory = (moveIndex) => {
    dispatchGameAction({
      type: GAME_JUMPTO_ACTION,
      payload: {
        moveIndex: moveIndex,
      },
    });
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        currentPlayer,
        currentCells,
        play,
        jumpToHistory,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
export { GameContextProvider };
