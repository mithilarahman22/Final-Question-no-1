import { createBrowserRouter } from "react-router-dom";
import Layoutm from "../Layout/Layoutm";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import Card from "../Components/Card";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layoutm></Layoutm>,
      children:[
        {
            path:"/Home",
            element:<Home></Home>
        },
        {
            path:"/Product",
            element:<Card></Card>
        },
        {
            path:"/Contact",
            element:<Contact></Contact>
        }
      ]
      
    },
  ]);
  