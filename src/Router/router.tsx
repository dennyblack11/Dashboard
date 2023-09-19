import { createBrowserRouter } from "react-router-dom";
import Body from "../Pages/Body";
import Layout from "../components/Dash/Layout"

export const mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Body/>
            }
        ]
    }
])