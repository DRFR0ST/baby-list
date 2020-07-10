import React from "react";
import { useParams } from "react-router-dom";
import { useCommand } from "../../api/hooks";
import { ProductInfo } from "../../api/commands";
import { useForkedState } from "../../utils/hooks/general";
import { isLoaded } from "../../api/utils";
// @ts-ignore
import Loader from 'react-loader-spinner'
import { useTheme, createUseStyles } from "react-jss";
import Button from "../shared/Button";

const useStyles = createUseStyles(theme => ({
    root: {
        position: "relative",
        marginTop: "110px",
        marginBottom: "60px",
    },
    imageWrapper: {
        position: "relative",
        width: "40%",
        height: "300px",
        overflow: "hidden",
        //backgroundColor: "rgba(123, 198, 159, 0.2)",
        background: `linear-gradient(to top left, rgba(123, 198, 159, 0.2), rgba(123, 198, 159, 0.8))`,
        //background: `radial-gradient(rgba(123, 198, 159, 0.6), rgba(123, 198, 159, 0.0))`,
        marginRight: "5%",
        borderRadius: "8px",
        "@media (max-width: 920px)": {
            marginRight: 0,
            width: "100%",
            borderRadius: 0
        }
    },
    image: {
        position: "absolute",
        width: "auto",
        height: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    contentWrapper: {
        width: "50%",
        "@media (max-width: 500px)": {
            width: "80%",
        }
    },
    head: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        maxWidth: "1280px",
        margin: "0 auto",

        "@media (max-width: 920px)": {
            flexDirection: "column",
            alignItems: "center"
        }
    },
    contentHeadWrapper: {
        background: "#fbfcfe",
        padding: "12px 16px",
        borderRadius: "8px"
    }
}));

const ProductPage = () => {
    const classes = useStyles();
    const { token } = useParams();
    const productRq = useCommand(ProductInfo, token);
    const [product] = useForkedState((rq: any) => isLoaded(rq) ? rq.data : null, productRq);
    const theme: any = useTheme();

    if(!product) return <Loader color={theme?.palette?.primary?.main}
    type="TailSpin"
    height={100}
    width={100}
    timeout={999999} //3 secs
    // @ts-ignore
    style={{position: "absolute",left: "50%",right: "50%",zIndex: 999}}
    />
    
    if(productRq && productRq.status !== 200) return <p>Product not found</p>
    
    const handleClick = () => {
        window.open(product.url, "_blank")
    }

    return <div className={classes.root}>
        <div className={classes.head}>
            <div className={classes.imageWrapper}>
                <img src={product.media_url} alt="product" className={classes.image} />
            </div>
            <div className={classes.contentWrapper}>
                <div className={classes.contentHeadWrapper}>
                    <h1>{product.name}</h1>
                    <p style={{opacity: 0.6}}>{product.description}</p>
                </div>
                <br/>
                <Button onClick={handleClick}>Przejdź do produktu</Button>
            </div>
        </div>
    </div>
}

export default ProductPage