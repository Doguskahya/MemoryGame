import { useEffect, useState } from 'react'
import './App.css'
import Settings from './components/Settings';
import Game from './Game';


function App() {

  
const [gameOptions, setGameOptions] = useState(null);
  const startGame = (options) =>{
    setGameOptions(options);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      {!gameOptions ? <Settings startGame={startGame}/> : <Game gameOptions={gameOptions}/>}
    </div>
  );
 
}

export default App