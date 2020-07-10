import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(theme => ({
    root: {
        position: "relative",
        width: "48px",
        height: "48px",
        lineHeight: "42px",
        fontSize: "28px",
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center",
        cursor: "pointer",
        background: "linear-gradient(to bottom right, #bbeda8, #64a39e)",
        borderRadius: "100px",
        color: "#FFF",
        boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)"
    }
}));

const IconButton = ({ children, onClick, style={} }: { children: React.ReactNode, onClick: () => void, style: any }) => {

    const classes = useStyles();

    const handleClick = () => {
        onClick && onClick();
    }

    return <div className={classes.root} onClick={handleClick} style={style}>{children}</div>
}

export default IconButton;