import { GAME_BACK_TO, GAME_RESET } from "/src/constants/constants";
import useGameContext from "/src/hooks/useGameContext";

const History = () => {
  const { gameState, jumpToHistory } = useGameContext();

  // Build move history HTML
  const moveHistoryHtml = gameState.moveHistory.map((value, index) => {
    const x = Math.floor(gameState.moveHistory[index] / 3) + 1;
    const y = (gameState.moveHistory[index] % 3) + 1;
    let desc;
    if (index === 0) {
      desc = GAME_RESET;
    } else {
      desc = `${GAME_BACK_TO}${index} (${x},${y})`;
    }
    return (
      <li key={`m${x}_${y}`}>
        <button
          className="history-btn"
          onClick={() => jumpToHistory(index)}
          type="button"
        >
          {desc}
        </button>
      </li>
    );
  });

  return <ol>{moveHistoryHtml}</ol>;
};

export default History;
