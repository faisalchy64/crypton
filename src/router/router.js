import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
    {
        path: "*",
    },
]);

export default router;
