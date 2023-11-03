import React, {useRef, useState} from "react";

// @ts-ignore
const SiteVisitTimer = () => {
    const [secs, setSecs] = useState(0);
    const reference = useRef(0);
    const time = useRef();

    const startTime = () => {
        // @ts-ignore
        time.current = setInterval(() => {
            reference.current++;
            setSecs(prevSeconds => prevSeconds + 1);
        }, 1000)
    }

    const stopTime = () => {
        clearInterval(time.current);
        // @ts-ignore
        time.current = 0;
    }

    const resetTime = () => {
        stopTime();
        if (seconds) {
            reference.current++;
            setSecs(0);
        }
    }

    const hours = Math.floor(secs / 3600);
    const remainingSecs = secs % 3600;
    const minutes = Math.floor(remainingSecs / 60);
    const seconds = remainingSecs % 60;

        return (
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Time spent on a website</div>
                    <div className="stat-value">
                        <span>{String(hours).padStart(2, '0')}:</span>
                        <span>{String(minutes).padStart(2, '0')}:</span>
                        <span>{String(seconds).padStart(2, '0')}</span>
                    </div>
                    <div className="stat-desc">
                        <span onClick={startTime} style={{marginRight: 5}}>Start</span>
                        <span onClick={stopTime} style={{marginRight: 5}}>Stop</span>
                        <span onClick={resetTime} style={{marginRight: 5}}>Reset</span>
                    </div>
                </div>
            </div>
        );
}

export default SiteVisitTimer;