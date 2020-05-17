import React, { useRef } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Theme } from "../../../types";

let useStyles = createUseStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        flexBasis: (props: any) => props.fluid ? "100%" : "40%",
        width: (props: any) => props.fluid ? "100%" : "40%",
        position: "relative",
        marginBottom: "10px",
        padding: "0 6px",
    },
    input: {
        width: "calc(100% - 14px)",
        background: "transparent",
        outline: 0,
        padding: "12px 6px",
        border: "1px solid #eee",
        borderRadius: "4px",
        "&:focus": {
            borderColor: theme.palette.primary.main
        }
    }
}));

const useTimeout = () => {
    const ref = useRef(null as unknown as [number|undefined, Function]);

    if(ref.current === null) {
        const createTimeout = (fn: Function, ms: number) => {
            if(ref.current[0]) clearTimeout(ref.current[0]);
            const timeout = setTimeout(fn, ms);
            ref.current[0] = timeout;
        }

        ref.current = [ undefined, createTimeout ];
    }

    return ref.current;
}

const Input = ({initialValue, onChange, InputProps, fluid=false}: { fluid?: boolean, initialValue?: string, onChange?: (value: string) => void, InputProps: React.HTMLProps<HTMLInputElement> }) => {
    //const [value, setValue] = useState(initialValue || "");
    const ref = useRef(null);

    const theme = useTheme();
    const classes = useStyles({theme, fluid});

    const [, doTimeout] = useTimeout();

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();

        //setValue(event.currentTarget.value);
        doTimeout(() => onChange && onChange(event.currentTarget.value), 2000);
    }

    return <div className={classes.root}><input className={classes.input} onChange={handleChange} ref={ref} {...InputProps} /></div>
}

export default Input;