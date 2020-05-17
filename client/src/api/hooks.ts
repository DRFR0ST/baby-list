import { useRef } from 'react';
import { Client } from './client';
import { useSignal } from '../utils/hooks/general';
import config from '../config';

const HOST_URL = config.host_url;
const cli = new Client(HOST_URL);

export const useCommand = (command: any, ...args: any[]) => {
    const ref = useRef(null as unknown as { status: number, data?: any, message?: string });
    const signal = useSignal();
    
    if(ref.current === null) {
        ref.current = { status: 102 };
        
        const fn = async () => {
            const _args = args || [];
            
            const rq = await cli.execute(new command(..._args))
            ref.current = rq;
            signal();
        }
        fn();
    }
    
    return ref.current;
}