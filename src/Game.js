import { useEffect, useState } from 'react'
import { animalImages } from './constants'
import AnimalCard from './components/AnimalCard'
import Result from './Result'

const Game = ({gameOptions},{finalResult}) => {
  const [firstClick, setFirstClick] = useState(null)
  const [secondClick, setSecondClick] = useState(null)
  const [animals, setAnimals] = useState([]);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(gameOptions.roundTime)
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(true);
  const gridSize = (gameOptions.gridSize==='4x4' ? 8 : 18);
  const players = gameOptions.playerSize;
  const gridCheck = gridSize===8 ? true : false;
  const shuffled = [...animalImages].sort(() => 0.5 - Math.random());
  const selectedAnimals = shuffled.slice(0, gridSize)
  
  const finishGame = () => {
    setGameStatus(false);
  }

  const gameStats = () => {
    finalResult({turns,score,timer})
  }

  const mixImages = () => {
    const mixedImages = [...selectedAnimals, ...selectedAnimals]
      .sort(() => Math.random() - 0.5)
      .map((animal) => ({ ...animal, id: Math.random()}))
      setFirstClick(null)
      setSecondClick(null)
      setAnimals(mixedImages)
      setTurns(0)
  }

  const clickManage = (animal) => {
    firstClick ? setSecondClick(animal) : setFirstClick(animal)
  }
    // kartları karşılaştırma 
  useEffect(() => {
    if(firstClick && secondClick){
      setDisabled(true)
      if (firstClick.src===secondClick.src){
        setScore(oldScore => oldScore+1);
        setAnimals(preAnimals => {
          return preAnimals.map(animal => {
            if(animal.src === firstClick.src){
              return {...animal, matched: true}
            }else{
              return animal;
            }
          })
        })
        resetClick()
      }else{
        setTimeout(()=>resetClick(), 1000) 
      }
    }
  }, [firstClick,secondClick])
  
  useEffect(() => {
    if(gridCheck && score===8){
      finishGame();
    }else if(!gridCheck && score===18){
      finishGame();
    }
  },[score])
  
  // kartları resetleme
  const resetClick = () => {
    setFirstClick(null);
    setSecondClick(null);
    setTurns(prevTurns => prevTurns +1)
    setDisabled(false)
  }

  useEffect(()=>{
    mixImages()
  },[])

  return (
    <div className="App">
      {gameStatus ?    
      gridCheck ? <div className='animal-grid'>
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} clickManage={clickManage} 
          backSide={animal===firstClick || animal===secondClick || animal.matched}
          disabled={disabled}
          />
        ))}

      </div> : <div className='animal-grid-six'>
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} clickManage={clickManage} 
          backSide={animal===firstClick || animal===secondClick || animal.matched}
          disabled={disabled}
          />
        ))}
      </div> : <Result gameStats={gameStats}/>}
      
      <p>Turns: {turns}</p>
      <p>Score: {score}</p>
      
    </div>
  );
}
export default Game;
