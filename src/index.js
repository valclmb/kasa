import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App.jsx'
import './index.css'
import {Home} from "./containers/Home/Home.jsx";
import {PageNotFound} from "./containers/PageNotFound/PageNotFound.jsx";
import {About} from "./containers/About/About";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Housing} from "./containers/Housing/Housing";

const router = createBrowserRouter([
    {path: "/", element:<App/>,
    children : [
        {path: "/home",
        element : <Home/>,
    },
        {path: "/about",
            element : <About/>,
        },
        {path: "/housing/:id",
            element : <Housing/>,
        },
        // 404 Page not found
        {path: "*", element : <PageNotFound/>}]},

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
