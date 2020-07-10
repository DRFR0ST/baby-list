import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Theme, Product } from "../../types";
import { useCommand } from "../../api/hooks";
import { ProductList } from "../../api/commands";
import { useForkedState } from "../../utils/hooks/general";
import { isLoaded } from "../../api/utils";
import Loader from 'react-loader-spinner'
import ListItem from "../shared/ListItem";
import Masonry from 'react-masonry-component';

let useStyles = createUseStyles((theme: Theme) => ({
    root: {
        flex: 1,
        minHeight: "calc(100vh - 110px)"
    },
    list: {
        // display: "flex",
        // flexWrap: "wrap",
        // flexDirection: "row",
        // alignItems: "base-line",
        // justifyContent: "flex-start",
        //maxWidth: "1250px",
        // maxWidth: "1250px",
        // marginTop: "120px",
        // maxWidth: "1250px",
        // padding: "0 15px",
    },
    bgWrapper: {
        position: "absolute",
        width: "100vw",
        maxWidth: "100%",
        maxHeight: "100%",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: -1,
        overflow: "hidden"
    }
}))

const Home = () => {
    const listRq = useCommand(ProductList);
    const [list] = useForkedState((rq: any) => isLoaded(rq) ? rq.data : null, listRq);

    const theme = useTheme();
    const classes = useStyles({ theme });

    // @ts-ignore
    const primaryMain = theme?.palette?.primary.main;

    return <div className={classes.root}>
        {list === null && <div style={{
            position: "absolute",
            left: "50%",
            right: "50%",
            zIndex: 999,
            width: "100px",
            height: "100px"
        }}>
            <Loader color={primaryMain}
                type="TailSpin"
                height={100}
                width={100}
                timeout={999999} //3 secs

            /></div>}
        {/* <div className={classes.bgWrapper}><img src={backgroundImg} alt="bg" /></div> */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", padding: "0 25px" }}>
            {list !== null && <Masonry className={classes.list} options={{ fitWidth: true }}>
                {
                    list.map((e: Product) => <ListItem key={e.token + e.name} product={e} />)
                }
            </Masonry>}
        </div>
    </div>
}

export default Home;