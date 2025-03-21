const Cell = ({ value = null, onClick, win }) => {
  return (
    <button
      className={win ? "cell win" : "cell"}
      onClick={onClick}
      type="button"
    >
      {value}
    </button>
  );
};

export default Cell;
