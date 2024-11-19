import LayoutIndex from "../layouts/user/LayoutIndex";
import Home from "../pages/user/Home";
import Product from "../pages/user/Product";

const publicRoutes = [
    {
        path: "/",
        element: <LayoutIndex />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "product",
                element: <Product />
            }
        ]
    }
];
export default publicRoutes;