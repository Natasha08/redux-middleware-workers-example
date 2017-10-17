import React from 'react';
import {connect} from 'react-redux';
import activateFirstWorker from './actions/worker';
import {activateSecondWorker} from './actions/worker';

class Main extends React.Component {
  state = {firstWorkerLoading: false, secondWorkerLoading: false}

  callFirstWorker() {
    this.setState({firstWorkerLoading: true}, () => {
      this.props.activateFirstWorker();
    });
  }

  callSecondWorker() {
    this.setState({secondWorkerLoading: true}, () => {
      this.props.activateSecondWorker();
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.firstWorkerLoading && nextProps.firstWorker && !nextProps.firstWorker.loading) {
      this.setState({firstWorkerLoading: false});
    }
    if (nextState.secondWorkerLoading && nextProps.secondWorker && !nextProps.secondWorker.loading) {
      this.setState({secondWorkerLoading: false});
    }
  }

  render() {
    const {firstWorkerLoading, secondWorkerLoading} = this.state;
    const {firstWorker, secondWorker} = this.props;
    const firstWorkerComplete = firstWorker && !firstWorkerLoading;
    const secondWorkerComplete = secondWorker && !secondWorkerLoading;
    console.log("WHY ARENT YOU SHOWING", secondWorker)
    return (
      <div>
        <header className=" App App-header">
          <h1>Redux middleware workers example</h1>
        </header>
        <div className="dot"></div>
        <p>
          Click one of the two buttons to start a web-worker
        </p>
        {firstWorkerComplete && <div>{firstWorker.type}</div>}
        <button className="first-worker" onClick={(e) => this.callFirstWorker()}>First Worker</button>
        {secondWorkerComplete && <div>{secondWorker.type}</div>}
        <button className="second-worker" onClick={(e) => this.callSecondWorker()}>Second Worker</button>
      </div>
    );
  }
}

const mapStoreToProps = ({firstWorker, secondWorker}) => ({firstWorker, secondWorker});
const mapDispatchToProps = (dispatch) => {
  return {
    activateFirstWorker: () => dispatch(activateFirstWorker()),
    activateSecondWorker: () => dispatch(activateSecondWorker())
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Main);
