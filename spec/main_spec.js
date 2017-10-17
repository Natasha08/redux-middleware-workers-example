import Main from '../src/Main';
import createWrapper from './helpers/wrapper';
import configureStore from 'redux-mock-store'
import workerMiddleware from './workers/middleware';

describe('when the first worker button is pressed', () => {
  const mockStore = configureStore(workerMiddleware);
  const store = mockStore({});
  const wrapper = createWrapper(Main, store);

  it('dispatches the "FIRST_WORKER_LOADING action"', () => {
    const button = wrapper.find('.first-worker');
    button.simulate('click');
    const actions = store.getActions();
    expect(...actions).to.deep.equal({type: 'FIRST_WORKER_LOADING', meta: {webworker: true, type: 'WORKER_TYPE_ONE'}});
    store.clearActions();
  });

  it('dispatches the "SECOND_WORKER_LOADING action"', () => {
    const button = wrapper.find('.second-worker');
    button.simulate('click');
    const actions = store.getActions();
    expect(...actions).to.deep.equal({type: 'SECOND_WORKER_LOADING', meta: {webworker: true, type: 'WORKER_TYPE_TWO'}});
    store.clearActions();
  });
});
