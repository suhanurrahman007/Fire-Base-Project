import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
    ]
  },
]);

export default myCreateRouter;