export default function(state={}, action) {
  if (action.type === 'WORKER_1_COMPLETE') {
    return {...state, ...action, loading: false};
  }
  if (action.type === 'FIRST_WORKER_LOADING') {
    return {...state, ...action, loading: true};
  }
  return state;
}
