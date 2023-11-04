import React from "react";
import {useSiteVisitTimer} from "@/components/layout/useSiteVisitTimer";

const SiteVisitTimer = () => {

    const { hours, minutes, seconds, startTime, stopTime, resetTime } = useSiteVisitTimer();

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