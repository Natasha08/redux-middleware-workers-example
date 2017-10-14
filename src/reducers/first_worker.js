export default function(state={}, action) {
  if (action.type === 'FIRST_WORKER') {
    return { ...state };
  }

  return state;
}
