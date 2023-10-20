import React, { useState } from 'react';
import { useEffect } from 'react';

const Timer = ({ initalTimeAmount, callBack }) => {
    const [timeAmount, setTimeAmount] = useState(initalTimeAmount);
    const minutes = Math.floor(timeAmount / 60);
    const seconds = timeAmount % 60;
    useEffect(() => {
        setTimeout(() => setTimeAmount((prev) => prev - 1), 1000);
        // Here, callback means the function that will end the quiz when the time is over
        // The callback need the parameter timeAmount for a silly joke in the result screen
        return callBack(timeAmount);
    }, [timeAmount]);

    return (
        <div className="inline-block m-2 fixed bottom-0 lg:right-0 md:right-0 sm:opacity-95 opacity-25 hover:opacity-50">
            {minutes === 0 && seconds === 0 ? (
                <h2>Timeup</h2>
            ) : (
                <span className="bg-[#4D6B73] text-[#FFFEF2] p-2 rounded-md font-semibold text-xl border-2 border-black flex ">
                    <span className="flex gap-1 bg-[#4D6B73]">
                        ⏰
                        {minutes > 0 && (
                            <h2 className="bg-[#4D6B73]">
                                {minutes + ' Minutes'}
                            </h2>
                        )}
                        {seconds > 0 && (
                            <h2 className="bg-[#4D6B73]">
                                {seconds.toString().padStart(2, 0) + ' seconds'}
                            </h2>
                        )}
                    </span>
                    <span className="flex"></span>
                </span>
            )}
        </div>
    );
};

export default Timer;
