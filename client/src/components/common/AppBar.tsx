import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import MelissaLogo from "../../assets/images/logo.jpeg"

let useStyles = createUseStyles(() => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px",
        height: "104px",
        marginBottom: "30px",
        position: "relative",
    },
    logo: {
        userSelect: "none",
        cursor: "pointer",
        fontSize: "56px",
        color: "black", //"#7bc69f",
        background: "#fbfcfe"
        //textShadow: "1px -3px #000000",
    },
    logoWrapper: {
        position: "relative",
        height: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    }
}));

const AppBar = () => {
    const history = useHistory();

    const theme = useTheme();
    const classes = useStyles({theme});
    
    return <div className={`${classes.root} branded-background`}>
        <div onClick={() => history.push("/")} className={classes.logoWrapper}>
            <img src={MelissaLogo} alt="Melissa" style={{maxHeight: "100%", marginRight: "15px"}} />
            <h1 className={`logo-font ${classes.logo}`} >Wyprawka Melisski</h1>
        </div>
    </div>
}

export default AppBar;