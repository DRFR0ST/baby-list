import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Theme, Product } from "../../types";
import { useHistory } from "react-router-dom";
import Flex from "./Flex";
import IconButton from "./IconButton";

let useStyles = createUseStyles((theme: Theme) => ({
    root: {
        position: "relative",
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        margin: "10px 0",
        background: "white",
        transition: "background 255ms ease",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        cursor: "pointer",

        flexDirection: "row",

        "@media (max-width: 500px)": {
            flexDirection: "column",

        },
    },
    image: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        // minWidth: "100%",
        // minHeight: "100%",
        width: "100%",
        height: "auto",
        filter: (props: {available: boolean}) => !props.available ? "grayscale(1)" : "none",
        cursor: "pointer",
        "@media (max-width: 500px)": {
            width: "auto",
            height: "100%",
        },
    },
    imageWrapper: {
        position: "relative",
        overflow: "hidden",
        width: "auto",
        minWidth: "30%",
        height: "280px",
        background: `linear-gradient(to top left, rgba(123, 198, 159, 0.2), rgba(123, 198, 159, 0.8))`,
        //backgroundColor: "rgba(123, 198, 159, 0.1)",
        borderRadius: "8px 0 0 8px",
        boxShadow: `0 1px 2px 0 rgba(${theme.palette.primary.main},.3), 0 2px 6px 2px rgba(60,64,67,.15)`,
    },
    title: {
        cursor: "pointer",
        //color: theme.palette.primary.main
    },
    textWrapper: {
        padding: "16px",
        width: "100%",
        "& p": {
            height: `calc((14px * 5) + 2em)`,
            overflow: "hidden",
            textOverflow: "ellipsis",
        }
    },
    // "@media only screen and (max-width: 600px)": {
    //     root: {
    //         flexBasis: "99%",
    //     }
    // },
    // "@media only screen and (min-width: 601px) and (max-width: 960px)": {
    //     root: {
    //         flexBasis: "45%",
    //     }
    // }
}))

const ListItem = ({product}: {product: Product}) => {
    const history = useHistory();
    const theme = useTheme();
    const classes = useStyles({available: product.available, theme});

    const handleRedirect = () => {
        history.push(`/product/${product.token}`);
    }

    const handleClick = () => {
        window.open(product.url, "_blank")
    }

    return <Flex className={classes.root} onClick={handleRedirect}>
        <div className={classes.imageWrapper}>
            <img className={classes.image} src={product.media_url} alt="media_url" />
        </div>
        <div className={classes.textWrapper}>
            <Flex flexDirection="column" alignItems="flex-start" width="100%" justifyContent="space-between">
                <div>
                    <h2 onClick={handleRedirect} className={classes.title}>{product.name}</h2>
                    <p style={{opacity: 0.5, fontSize:14}}>{product.description}</p>
                </div>

                <IconButton style={{alignSelf: "flex-end"}} onClick={handleClick}>{">"}</IconButton>
            </Flex>
        </div>
    </Flex>
}

export default ListItem;