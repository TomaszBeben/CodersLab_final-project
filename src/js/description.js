import React from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';

const Clock = () => {
    const now = new Date(); 
    const setMinutes = ()=>{
        const minutes = now.getMinutes()*60;
        console.log(minutes);
        
       // const hours = now.getHours();
    }
    console.log(setMinutes);
    
    return (
    <>
    <div className="clock-container">
        <div className="clock">
    <span className="hour_hand hand animation">{setMinutes}</span>
        <span className="minutes_hand hand animation"></span>
        </div>
    </div>
    
    </>
    )
}
export default Clock; 