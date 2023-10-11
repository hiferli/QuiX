import React from 'react'
import { useEffect } from 'react';

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
        <div className='inline-block m-2 fixed bottom-0 lg:right-0 md:right-0 sm:opacity-95 opacity-25 hover:opacity-50'>
            {minutes === 0 && seconds === 0
                ? <h1>Timeup</h1>
                : <h1 className='bg-[#4D6B73] text-[#FFFEF2] p-2 rounded-md font-semibold text-xl border-2 border-black'>⏰ {minutes} Minutes {seconds < 10 ? `0${seconds}` : seconds} Seconds</h1>
            }
        </div>
    )
}

export default Timer;
