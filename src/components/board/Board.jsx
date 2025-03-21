import Cell from "/src/components/cell/Cell";
import useGameContext from "/src/hooks/useGameContext";
import { checkWinner } from "/src/utils/utils";

const Board = () => {
  const { currentCells, play } = useGameContext();

  const onCellClick = (index) => {
    if (currentCells[index] || checkWinner(currentCells)) {
      return;
    }
    play(index)();
  };

  // Build cells HTML
  const winnerInfo = checkWinner(currentCells);
  const cellsHtml = [];
  for (let r = 0; r < 3; ++r) {
    const rowHtml = [];
    for (let c = 0; c < 3; ++c) {
      const cellIndex = 3 * r + c;
      const win = winnerInfo?.pos.includes(cellIndex);
      rowHtml.push(
        <Cell
          key={c}
          win={win}
          value={currentCells[cellIndex]}
          onClick={() => onCellClick(cellIndex)}
        />,
      );
    }
    cellsHtml.push(
      <div key={r} className="row">
        {rowHtml}
      </div>,
    );
  }

  return <>{cellsHtml}</>;
};

export default Board;
