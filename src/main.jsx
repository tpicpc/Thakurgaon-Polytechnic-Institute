import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layuot from './Layout/Layuot.jsx';
import Introduction from './Body/Introduction.jsx';
import Notice from './Body/Notice.jsx';
import Home from './Layout/Home.jsx';
import OurVision from './Body/OurVision.jsx';
import FocalPerson from './Layout/FocalPerson.jsx';
import MainCategories from './Layout/MainCategories.jsx';
import AllNotice from './Layout/AllNotice.jsx';
import ContactPage from './Layout/ContactPage.jsx';
import Result from './Layout/Result.jsx';
import Technolodgy from './Layout/technolodgy.jsx';
import ClassRoutine from './Body/AllCatagory/AcademicInformation/ClassRoutine.jsx';
import ExamRoutine from './Body/AllCatagory/AcademicInformation/ExamRoutine.jsx';
import DigitalClassContent from './Body/AllCatagory/AcademicInformation/DigitalClassContent.jsx';
import SemesterPlan from './Body/AllCatagory/SemesterPlan.jsx';
import Syllabus from './Body/AllCatagory/Syllabus.jsx';
import StudentRepresentativeCouncil from './Body/AllCatagory/StudentCorner/StudentRepresentativeCouncil.jsx';
import StudentSuccessStories from './Body/AllCatagory/StudentSuccessStories.jsx';
import AllTeachersAndStaff from './Body/AllCatagory/TeachersAndStaff/AllTeachersAndStaff.jsx';
import Computer from './Body/AllCatagory/TeachersAndStaff/Computer.jsx';
import Food from './Body/AllCatagory/TeachersAndStaff/Food.jsx';
import Mechatronics from './Body/AllCatagory/TeachersAndStaff/Mechatronics.jsx';
import RAC from './Body/AllCatagory/TeachersAndStaff/RAC.jsx';
import AIDT from './Body/AllCatagory/TeachersAndStaff/AIDT.jsx';
import NonTech from './Body/AllCatagory/TeachersAndStaff/NonTech.jsx';
import Staffes from './Body/AllCatagory/TeachersAndStaff/Staffes.jsx';
import Clubs from './Layout/Clubs.jsx';
import TPIatAGlance from './Layout/TPIatAGlance.jsx';

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
        path:"/TPIatAGlance",
        element: <TPIatAGlance></TPIatAGlance>
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
      {
        path:"/Result",
        element: <Result></Result>
      },
      {
        path:"/Technolodgy",
        element: <Technolodgy></Technolodgy>
      },
      {
        path:"/Clubs",
        element:<Clubs></Clubs>
      },
      {
        path:"/ClassRoutine",
        element: <ClassRoutine></ClassRoutine>
      },
      {
        path:"/ExamRoutine",
        element: <ExamRoutine></ExamRoutine>
      },
      {
        path:"/DigitalClassContent",
        element: <DigitalClassContent></DigitalClassContent>
      },
      {
        path:"/SemesterPlan",
        element: <SemesterPlan></SemesterPlan>
      },
      {
        path:"/Syllabus",
        element: <Syllabus></Syllabus>
      },
      {
        path:"/StudentRepresentativeCouncil",
        element: <StudentRepresentativeCouncil></StudentRepresentativeCouncil>
      },
      {
        path:"/StudentSuccessStories",
        element: <StudentSuccessStories></StudentSuccessStories>
      },
      {
        path:"/AllTeachersAndStaff",
        element: <AllTeachersAndStaff></AllTeachersAndStaff>
      },
      {
        path:"/Computer",
        element: <Computer></Computer>
      },
      {
        path:"/Food",
        element: <Food></Food>
      },
      {
        path:"/Mechatronics",
        element: <Mechatronics></Mechatronics>
      },
      {
        path:"/RAC",
        element: <RAC></RAC>
      },
      {
        path:"/AIDT",
        element: <AIDT></AIDT>
      },
      {
        path:"/NonTech",
        element: <NonTech></NonTech>
      },
      {
        path:"/Staffes",
        element: <Staffes></Staffes>
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
