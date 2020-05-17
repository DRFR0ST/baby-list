import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { Theme } from "../../types";
import { useHistory } from "react-router-dom";

let useStyles = createUseStyles((theme: Theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
        height: "104px",
        marginBottom: "30px"
    },
    logo: {
        userSelect: "none",
        cursor: "pointer",
        fontSize: "56px",
        color: "#7bc69f",
        textShadow: "1px -3px #000000",
    }
}));

const PATH_MAP = {
    "/": "Home",
    "/product/": "Home > Product"
}

const mapPathname = (pathname: string) => {
    if(pathname === "/") return PATH_MAP["/"];
    if(pathname.split("/")[1] === "product") return PATH_MAP["/product/"]

    return PATH_MAP[pathname as keyof typeof PATH_MAP]
}

const AppBar = () => {
    const history = useHistory();

    const pathname = history.location.pathname;
    const pathLabel = mapPathname(pathname);

    const theme = useTheme();
    const classes = useStyles({theme});
    
    return <div className={`${classes.root} branded-background`}>
        <h1 className={`logo-font ${classes.logo}`} onClick={() => history.push("/")}>Wyprawka Melisski</h1>
    </div>
}

export default AppBar;