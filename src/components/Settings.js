import React, { useState } from "react";
import RadioBox from "../RadioBox"
import Counter from "./Counter"; 

import { PLAYER_SIZE, GRID_SIZE, INITIAL_ROUND_TIME} from "../constants";


const Settings = ({startGame}) => {

    const [playerSize, setPlayerSize] = useState(PLAYER_SIZE[0])
    const [gridSize, setGridSize] = useState(GRID_SIZE[0])
    const [roundTime, setRoundTime] = useState(INITIAL_ROUND_TIME)

    const onStartGame = () => {
        startGame({playerSize, gridSize, roundTime});
    };

    return (
        <div className="settings">
            <h2>Settings</h2>

            <h4>Number Of Players</h4>
            <div className="setting">
                {PLAYER_SIZE.map(itemPlayer =>(
                    <RadioBox key={itemPlayer} name={itemPlayer} selectedItem={playerSize} onChange={e => setPlayerSize(e.target.value)}/>
                    
                ))}
            </div>
            <h4>Grid Size</h4>
            <div className="setting">
                {GRID_SIZE.map(itemGrid =>(
                    <RadioBox key={itemGrid} name={itemGrid} selectedItem={gridSize} onChange={e => setGridSize(e.target.value)}/>
                ))}
            </div>
            <h4>Round Time (Minutes)</h4>
            <div className="setting">
                    <Counter roundTime={roundTime} onClick={setRoundTime}/>
            </div>
            <div className="buttons">
                <button className="button"  onClick={onStartGame}>Start</button>
                <button className="button"  >Cancel</button>
            </div>
            
        </div>
    )
}
export default Settings;