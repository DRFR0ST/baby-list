import React from "react";
import { useParams } from "react-router-dom";
import { useCommand } from "../../api/hooks";
import { ProductInfo } from "../../api/commands";
import { useForkedState } from "../../utils/hooks/general";
import { isLoaded } from "../../api/utils";
// @ts-ignore
import Loader from 'react-loader-spinner'
import { useTheme } from "react-jss";

const ProductPage = () => {
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
    
    return <div>
        <h2>{product.name}</h2>
        <p style={{opacity: 0.6}}>{product.description}</p>
    </div>
}

export default ProductPage