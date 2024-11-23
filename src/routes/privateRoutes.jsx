import { Children } from "react";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Category from "../pages/admin/Category";
import Product from "../pages/admin/Product";
import ProductAdd from "../pages/admin/ProductAdd";

const privateRoutes = [
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "category",
                element: <Category />
            }
            ,
            {
                path: "product",
                element: <Product />
            }
            ,
            {
                path: "add-product",
                element: <ProductAdd />
            }
        ]
    }
];
export default privateRoutes;