export const checkWinner = (cells) => {
  const lines = [
    [0, 1, 2], // Row
    [3, 4, 5], // Row
    [6, 7, 8], // Row
    [0, 3, 6], // Column
    [1, 4, 7], // Column
    [2, 5, 8], // Column
    [0, 4, 8], // Diag
    [2, 4, 6], // Diag
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
      return { player: cells[a], pos: [a, b, c] };
    }
  }
  return null;
};
