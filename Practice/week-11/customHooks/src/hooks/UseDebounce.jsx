
import { useEffect, useRef, useState } from "react";

export default function useDebounce2 (value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};



function useDebounce(originalFn) {
    const currentClock = useRef();
    const fn = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalFn, 400);
    }
    return fn
}


