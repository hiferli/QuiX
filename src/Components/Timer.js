import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({ minutes , setMinutes , seconds , setSeconds }) => {
    
    useEffect(() => {
        // console.log(initialMinute)
        // console.log(initialSeconds)
        // console.log("Start")
        let myInterval = setInterval(() => {
            // console.log(minutes);
            // console.log(seconds)
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            {minutes === 0 && seconds === 0
                ? <h1>Timeup</h1>
                : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            }
        </div>
    )
}

export default Timer;
