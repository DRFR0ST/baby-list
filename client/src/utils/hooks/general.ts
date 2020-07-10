import { useState, useRef, useEffect } from "react";

export const useForkedState = <T extends any[], R>(fn: (...args: T) => R, ...args: T) => {
    const ref = useRef(null as unknown as [R, (value: R) => void]);
    const signal = useSignal();

    if(ref.current === null) {
        const value: R = fn(...args);
        const setState = (val: R) => { ref.current[0] = val; signal(); }

        ref.current = [ value, setState ];
    }

    useEffect(() => { 
        const value = fn(...args);

        if(ref.current[0] !== value) 
            ref.current[1](value); 
    }, [fn, args]);

    return ref.current;
}

export const useSignal = () => {
   const [, setState] = useState();

    return () => setState({});
}
