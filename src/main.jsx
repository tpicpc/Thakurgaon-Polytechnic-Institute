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
import FocalPerson from './Layout/FocalPerson.jsx';
import MainCategories from './Layout/MainCategories.jsx';
import AllNotice from './Layout/AllNotice.jsx';
import ContactPage from './Layout/ContactPage.jsx';
import Result from './Layout/Result.jsx';

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
      },
      {
        path:"/FocalPerson",
        element: <FocalPerson></FocalPerson>
      },
      {
        path:"/Notice",
        element: <Notice></Notice>
      },
      {
        path:"/Facilities",
        element: <MainCategories></MainCategories>
      },
      {
        path:"/AllNotice",
        element: <AllNotice></AllNotice>
      },
      {
        path:"/ContactPage",
        element: <ContactPage></ContactPage>
      },
      {
        path:"/Result",
        element: <Result></Result>
      },
    ]
  },
]);











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
