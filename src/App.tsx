import './App.css';
import { GameLoop } from './react-sheep-engine/loop';
import { Test } from './Test';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <GameLoop>
        <Test />
      </GameLoop>
    </div>
  );
}

export default App;
