import {useRef, useState} from "react";

export const useSiteVisitTimer = () => {
    const [secs, setSecs] = useState(0);
    const reference = useRef(0);
    const time = useRef<ReturnType<typeof setInterval>>();

    const startTime = () => {
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

    return { hours, minutes, seconds, startTime, stopTime, resetTime }
}
