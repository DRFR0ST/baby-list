import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Theme, Product } from "../../types";
import { useHistory } from "react-router-dom";

let useStyles = createUseStyles((theme: Theme) => ({
    root: {
        position: "relative",
        flexBasis: "30%",
        flexGrow: 1,
        minWidth: "200px",
        borderRadius: "8px",
        margin: "0 10px 15px",
        background: "white",
        transition: "background 255ms ease",
        
        "&:hover": {
            background: "#0000000a"
        }
    },
    image: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        minWidth: "100%",
        minHeight: "100%",
        width: "100%",
        height: "auto",
        filter: (props: {available: boolean}) => !props.available ? "grayscale(1)" : "none",
        cursor: "pointer"
    },
    imageWrapper: {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        minWidth: "inherit",
        height: "350px",
        background: "#eee",
        borderTopRightRadius: "8px",
        borderTopLeftRadius: "8px",
        boxShadow: `0 1px 2px 0 rgba(${theme.palette.primary.main},.3), 0 2px 6px 2px rgba(60,64,67,.15)`
    },
    title: {
        cursor: "pointer",
        color: theme.palette.primary.main
    },
    textWrapper: {
        padding: "16px"
    },
    "@media only screen and (max-width: 600px)": {
        root: {
            flexBasis: "99%",
        }
    },
    "@media only screen and (min-width: 601px) and (max-width: 960px)": {
        root: {
            flexBasis: "45%",
        }
    }
}))

const ListItem = ({data}: {data: Product}) => {
    const history = useHistory();
    const theme = useTheme();
    const classes = useStyles({available: data.available, theme});

    const handleRedirect = () => {
        history.push(`/product/${data.token}`);
    }

    return <div className={classes.root}>
        <div className={classes.imageWrapper} onClick={handleRedirect}>
            <img className={classes.image} src={data.media_url} alt="media_url" />
        </div>
        <div className={classes.textWrapper}>
        <h2 onClick={handleRedirect} className={classes.title}>{data.name}</h2>
        <p style={{opacity: 0.5, fontSize:14}}>{data.description}</p>
        </div>
    </div>
}

export default ListItem;