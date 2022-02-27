import './App.css';
import {GameLoop} from './react-sheep-engine/loop';
import {Test} from './Test';
import {InputSystem} from "./react-sheep-engine/input";
import userInputConfig from "./user_input.json";

InputSystem.Initialize(userInputConfig);

function App() {

    return (
        <div style={{position: 'relative', width: "800px", height: "800px", backgroundColor: "red"}}>
            <GameLoop>
                <Test/>
            </GameLoop>
        </div>
    );
}

export default App;
