import {
  STATUS_GAMEOVER,
  STATUS_PLAYER_TURN,
  STATUS_PLAYER_WINS,
} from "/src/constants/constants";
import useGameContext from "/src/game/useGameContext";
import { checkWinner } from "/src/utils/utils";

const Status = () => {
  const { currentCells, currentPlayer, gameState } = useGameContext();

  const winnerInfo = checkWinner(currentCells);
  let statusHtml;
  if (winnerInfo) {
    statusHtml = winnerInfo.player + STATUS_PLAYER_WINS;
  } else if (gameState.step === currentCells.length) {
    statusHtml = STATUS_GAMEOVER;
  } else {
    statusHtml = currentPlayer + STATUS_PLAYER_TURN;
  }

  return <>{statusHtml}</>;
};

export default Status;
