import Clock from './Clock'
import './App.css';

function App() {
  return (
    <div className="App">
      <Clock date={new Date()} />
    </div>
  );
}

export default App;
