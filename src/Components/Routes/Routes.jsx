import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Services from "../Pages/Services/Services";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/services',
            element:<Services/>,
            
        },

      ]
    },
  ]);
const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;