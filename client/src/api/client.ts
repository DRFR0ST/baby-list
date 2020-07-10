const cors = require('cors')({origin: true});

console.log(cors);

export type TResponse = {status: number, message?: string, data: any};

export interface IClient {
    url: string
}

export class Client implements IClient {
    url: string

    constructor(url: string) {
        this.url = url;
    }

    makeArguments(args: {[key: string]: string}) {
        return Object.entries(args).map((e => `${e[0]}=${typeof e[1] === "object" ? JSON.stringify(e[1]) : e[1]}`)).join("&");
    }

    execute(command: ICommand) {
        return new Promise<{status: number, data: any}>((resolve, reject) => {
            let once = false;
            const cmd = command.exec[0];
            const args = this.makeArguments(command.exec[1]);
    
            const reqUrl = `${this.url}${cmd}?${args}`;

            const handleResolve = (response: any) => {
                if(!once) {
                    once = true;
                    
                    console.log("📶", cmd, "=>", response);
                    resolve(response);
                }
                
            }

            fetch(reqUrl, {
                method: 'POST',
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
                credentials: 'omit', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json',
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            })
                .then(response => response.json())
                .then(handleResolve)
                .catch(reject);
        })
    }
}


export interface ICommand {
    exec: [string, {[key: string]: any}];
    status: number;

    parse(status: number, data: any): any
}

export class Command implements ICommand {
    exec: [string, {[key: string]: any}];
    status: number;

    constructor(exec: [string, {[key: string]: any}]) {
        this.exec = exec;
        this.status = 0;
    }

    parse(status: number, data: any) {
        return data;
    }
}