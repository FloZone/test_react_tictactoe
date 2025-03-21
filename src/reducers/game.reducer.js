export const GAME_PLAY_ACTION = "game/play";
export const GAME_JUMPTO_ACTION = "game/jumpTo";

const gameReducer = (state, action) => {
  switch (action.type) {
    case GAME_PLAY_ACTION: {
      let newHistory;
      // If we play from an old move, overwrite history after this move
      if (state.step < state.moveHistory.length - 1) {
        newHistory = [
          ...state.moveHistory.slice(0, state.step + 1),
          action.payload.moveIndex,
        ];
      } else {
        newHistory = [...state.moveHistory, action.payload.moveIndex];
      }
      return {
        ...state,
        moveHistory: newHistory,
        step: state.step + 1,
      };
    }
    case GAME_JUMPTO_ACTION:
      return {
        ...state,
        step: action.payload.moveIndex,
      };
    default:
      return state;
  }
};
export default gameReducer;
