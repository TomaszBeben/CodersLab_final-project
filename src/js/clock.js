import React from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';

const Clock = () => {
    const now = new Date(); 
    const mins = now.getMinutes() * 60;
    const hours = now.getHours() * 3600;
    
    
    return (
    <>
    <div className="clock-container">
        <div className="clock">
        <span className="hour_hand hand animation" style={{animationDelay:'-'+ hours + 's'}}></span>
        <span className="minutes_hand hand animation" style={{animationDelay:'-'+ mins + 's'}}></span>
        </div>
    </div>
    
    </>
    )
}
export default Clock; 