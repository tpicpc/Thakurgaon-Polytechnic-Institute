import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layuot from './Layout/Layuot.jsx';
import Introduction from './Body/Introduction.jsx';
import Notice from './Body/Notice.jsx';
import UpdateNews from './Body/UpdateNews.jsx';
import Home from './Layout/Home.jsx';
import OurVision from './Body/OurVision.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layuot></Layuot>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/Introduction",
        element: <Introduction></Introduction>
      },
      {
        path:"/OurVision",
        element: <OurVision></OurVision>
      }
    ]
  },
]);











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
