import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Theme } from "../../../types";
import Input from "./Input";

let useStyles = createUseStyles((theme: Theme) => ({
    root: {
        
    },
}));

const Form = ({children, onSubmit}: { children: React.ReactNode, onSubmit: (event: React.FormEvent<HTMLFormElement>) => void }) => {
    const theme = useTheme();
    const classes = useStyles({theme});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onSubmit && onSubmit(event);
    }

    return <form className={classes.root} onSubmit={handleSubmit}>
            {children}
        </form>
}

Form.Input = Input;

export default Form;