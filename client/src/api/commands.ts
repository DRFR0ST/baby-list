import { Command } from "./client";
import { Product } from "../types";

export class ProductInfo extends Command {
    constructor(token: string) {
        super(["productInfo", { token }]);
    }

    parse(status: number, data: Product) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class ProductList extends Command {
    constructor(volume?: number) {
        super(["productList", { volume }]);
    }

    parse(status: number, data: Product) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class ProductCreate extends Command {
    constructor(data: {name: string, description: string, url: string, media_url: string, available?: boolean}) {
        super(["productCreate", data]);
    }

    parse(status: number, data: Product) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}