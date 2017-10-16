export default function(state={}, action) {
  if (action.type === 'WORKER_1_COMPLETE') {
    return { ...state, ...action };
  }

  return state;
}
