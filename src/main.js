import React from 'react';
import {connect} from 'react-redux';
import activateFirstWorker from './actions/first_worker';

class Main extends React.Component {
  callFirstWorker() {
    this.props.activateFirstWorker();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Redux middleware workers example</h1>
        </header>
        <p>
          Click one of the two buttons to start a web-worker
        </p>
        { this.props.first_worker && <div>{this.props.first_worker.type}</div>}
        <button className="first-worker" onClick={(e) => this.callFirstWorker()}>First Worker</button>
      </div>
    );
  }
}

const mapStoreToProps = ({first_worker}) => ({first_worker});
const mapDispatchToProps = (dispatch) => {
  return {
    activateFirstWorker: () => dispatch(activateFirstWorker())
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Main);
