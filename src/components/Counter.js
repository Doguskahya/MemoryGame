import React from "react";

const Counter = ({roundTime, onClick}) => {

    const incTime = e => {
        e.preventDefault();
        const num = roundTime + 1;
        onClick(num);
    }

    const decTime = e => {
        e.preventDefault();
        const num = roundTime - 1;
        if(num>=1)onClick(num);
    }

    return(
        <div className="animal.grid">
        <button className="sub" onClick={decTime}>-</button>
        <span className="time">{roundTime}</span>
        <button className="add" onClick={incTime}>+</button>        
    </div>
    )
}

export default Counter;