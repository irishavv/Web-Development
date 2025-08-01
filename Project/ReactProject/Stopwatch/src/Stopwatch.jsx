import React, { useState, useEffect, useRef } from 'react'

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(intervalIdRef.current);
        }

        return () => clearInterval(intervalIdRef.current);
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        const hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, '0');
        const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, '0'); // shows hundredths

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    return (
        <div className='stopwatch'>
            <div className='display'>{formatTime()}</div>
            <div className='controls'>
                <button onClick={start} className='start-button'>Start</button>
                <button onClick={stop} className='stop-button'>Stop</button>
                <button onClick={reset} className='reset-button'>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch
