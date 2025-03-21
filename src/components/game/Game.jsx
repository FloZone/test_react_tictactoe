import Board from "/src/components/board/Board";
import History from "/src/components/history/History";
import Status from "/src/components/status/Status";
import { GameContextProvider } from "/src/contexts/game.context";

const Game = () => {
  return (
    <GameContextProvider>
      <div className="game">
        <div className="centered">
          <div className="title">TicTacToe</div>

          <div className="board">
            <Board />
          </div>

          <div className="status">
            <Status />
          </div>
        </div>

        <div className="right">
          <div className="history">
            <History />
          </div>
        </div>
      </div>
    </GameContextProvider>
  );
};

export default Game;
