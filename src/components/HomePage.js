export default function HomePage(){

    const startGame = () => {
        console.log("girdi")
    }
    return(
        <div className="App">
            <button onClick={startGame}>New Game</button>
        </div>
        );
}