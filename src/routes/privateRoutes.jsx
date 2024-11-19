import { Children } from "react";
import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Category from "../pages/admin/Category";

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
        ]
    }
];
export default privateRoutes;