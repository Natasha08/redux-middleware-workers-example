import './style/App.css';

class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Redux middleware workers example</h1>
        </header>
        <p className="App-intro">
          Click one of the two buttons to start a web-worker
        </p>
      </div>
    );
  }
}

export default Main;
