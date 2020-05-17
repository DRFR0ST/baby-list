export type Dictionary<T> = { [key: string]: T };

type PaletteColor = { main: string, dark?: string, light?: string };
export interface ThemePalette {
    primary: PaletteColor
}

export interface Theme {
    palette: ThemePalette
}


export interface Product {
    name: string;
    description: string;
    url: string;
    media_url: string;
    available: boolean;
    token: string;
}