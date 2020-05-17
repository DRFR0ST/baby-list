import Home from "./components/pages/Home";
import ProductPage from "./components/pages/ProductPage";
import { RouteProps, RouteComponentProps } from "react-router-dom";
import AdminPage from "./components/pages/AdminPage";

type Page = {
    path: string;
    exact: boolean;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;

    label: string;
    
    exactPath?: string;
    params?: string;
    pattern?: RegExp;
    pathTree: string[];

    routeProps: RouteProps;
};

export default Object.freeze([
    {
        id: "home-01",
        path: "/",
        pattern: new RegExp("/"),

        label: "Home",
        pathTree: ["Home"],

        exact: true,
        component: Home,

        get routeProps() { return { path: this.path, exact: this.exact, component: this.component }},
    },
    {
        id: "product-01",
        exactPath: "/product",
        params: ":token",
        pattern: /\/product\/[A-Z-a-z-0-9]*/,
        get path() {
            return this.exactPath + "/" + this.params;
        },

        label: "Product",
        pathTree: ["Home", "Product"],

        exact: false,
        component: ProductPage,

        get routeProps() { return { path: this.path, exact: this.exact, component: this.component }},
    },
    {
        id: "admin-01",
        path: "/admin",
        pattern: new RegExp("/admin"),
        exact: true,
        label: "Admin Dashboard",
        pathTree: ["Home", "Admin"],
        component: AdminPage,
        get routeProps() { return { path: this.path, exact: this.exact, component: this.component }},
    }
]) as Readonly<Page[]>;