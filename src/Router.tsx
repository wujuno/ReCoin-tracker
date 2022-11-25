import {createBrowserRouter,Route} from "react-router-dom";
import Home from "./screens/Home" 
import Root from "./Root"
import NotFound from "./screens/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path:"",
                element: <Home/>,
            }
        ],
        errorElement : <NotFound/>
    }
])

export default router;