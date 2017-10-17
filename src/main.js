import React from 'react';
import {connect} from 'react-redux';
import activateFirstWorker from './actions/first_worker';

class Main extends React.Component {
  state = {firstWorkerLoading: false, secondWorkerLoading: false}

  callFirstWorker() {
    this.setState({firstWorkerLoading: true}, () => {
      this.props.activateFirstWorker();
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.firstWorkerLoading && nextProps.firstWorker && !nextProps.firstWorker.loading) {
      this.setState({firstWorkerLoading: false});
    }
  }

  render() {
    const {firstWorkerLoading} = this.state;
    const {firstWorker} = this.props;
    const firstWorkerComplete = firstWorker && !firstWorkerLoading;

    return (
      <div className="App-header">
        <header>
          <h1>Redux middleware workers example</h1>
        </header>
        <div className="dot"></div>
        <p>
          Click one of the two buttons to start a web-worker
        </p>
        {firstWorkerComplete && <div>{firstWorker.type}</div>}
        <button className="first-worker" onClick={(e) => this.callFirstWorker()}>First Worker</button>
      </div>
    );
  }
}

const mapStoreToProps = ({firstWorker}) => ({firstWorker});
const mapDispatchToProps = (dispatch) => {
  return {
    activateFirstWorker: () => dispatch(activateFirstWorker())
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Main);
