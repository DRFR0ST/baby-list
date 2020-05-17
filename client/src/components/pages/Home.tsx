import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Theme, Product } from "../../types";
import { useCommand } from "../../api/hooks";
import { ProductList } from "../../api/commands";
import { useForkedState } from "../../utils/hooks/general";
import { isLoaded } from "../../api/utils";
import Loader from 'react-loader-spinner'
import ListItem from "../shared/ListItem";

let useStyles = createUseStyles((theme: Theme) => ({
    root: {
        flex: 1,
        minHeight: "calc(100vh - 110px)"
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "base-line",
        justifyContent: "flex-start",
        maxWidth: "1250px",
        margin: "120px auto 0"
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
    const classes = useStyles({theme});

    // @ts-ignore
    return <div className={classes.root}>{list === null && <Loader color={theme?.palette?.primary?.main}
                                type="TailSpin"
                                height={100}
                                width={100}
                                timeout={999999} //3 secs
                                // @ts-ignore
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    right: "50%",
                                    zIndex: 999
                                }}
                                />}
        {/* <div className={classes.bgWrapper}><img src={backgroundImg} alt="bg" /></div> */}
        {list !== null && <div className={classes.list}>
            {
                list.map((e: Product) => <ListItem key={e.token + e.name} data={e} />)
            }
        </div>}
    </div>
}

export default Home;