import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Theme } from "../../types";
import { Form } from "../shared/Form";
import { Client } from "../../api/client";
import config from "../../config";
import { ProductCreate } from "../../api/commands";

let useStyles = createUseStyles((theme: Theme) => ({
    root: {
        padding: "0 15px"
    },
    flex: {
        display: "flex",
        alignItems: "baseline",
        flexWrap: "wrap",
    }
}));

type InputProperties = {
    name: string;
    description: string;
    url: string;
    media_url: string;
}

const makeDataFromInput = (target: any) => {
    const properties = ["name", "description", "url", "media_url"];
    const data: {[key: string]: string} = {};

    properties.forEach((property) => {
        data[property] = target.querySelector(`input[name="product_${property}"]`).value as string;
    })

    return data as InputProperties;
}

const AdminPage = () => {
    const theme = useTheme();
    const classes = useStyles({theme});

    const handleSubmit = (e: any) => { // e: React.FormEvent<HTMLFormElement>
        e.preventDefault();

        const data = makeDataFromInput(e.target);

        const cli = new Client(config.host_url);
        cli.execute(new ProductCreate(data));
    }

    return <div className={classes.root}>
        <h4>Dodaj nowy produkt do wyprawki</h4>
        <Form onSubmit={handleSubmit}>
            <div className={classes.flex}>
                <Form.Input fluid={true} InputProps={{placeholder: "Nazwa produktu", name: "product_name"}} onChange={console.log} />
                <Form.Input fluid={true} InputProps={{placeholder: "Opis produktu", name: "product_description"}} onChange={console.log} />
                <Form.Input InputProps={{placeholder: " Link do produktu", name: "product_url"}} onChange={console.log} />
                <Form.Input InputProps={{placeholder: "Zdjęcie produktu", name: "product_media_url"}} onChange={console.log} />
            </div>
            <button style={{margin: "0 6px"}}>Dodaj</button>
        </Form>
    </div>
}

export default AdminPage;