import '../App.css'
import { Outlet } from "react-router-dom";
import FooterImg from "../Body/FooterImg";
import CentralEServices from "../Body/Sidebar/CentralEServices";
import EmergencyHotline from "../Body/Sidebar/EmergencyHotline";
import Eservices from "../Body/Sidebar/Eservices";
import Gallery from "../Body/Sidebar/Gallery";
import ImportantLinks from "../Body/Sidebar/ImportantLinks";
import MejorPerson from "../Body/Sidebar/MejorPerson";
import NationalAnthem from "../Body/Sidebar/NationalAnthem";
import NumberOfVisitors from "../Body/Sidebar/NumberOfVisitors";
import StudentInformation from "../Body/Sidebar/StudentInformation";
import YourIPAddress from "../Body/Sidebar/YourIPAddress";
import Carousel from "../Header/Carousel";
import Footer from "../Header/Footer";
import Header from "../Header/Header";
import HotNews from "../Header/HotNews";
import { useState } from "react";
import DropDowndata from "../Header/DropDowndata";
import Nav from '../Header/Nav';

export default function Layuot ()  {
  const [isOpen,setIsOpen]=useState(false)
    return (
        <div className='background'>
        {/* header section */}
        <section className='xl:w-9/12 px-5 lg:px-0 lg:w-9/12 md:w-full mx-auto  '>
          <Header></Header>
          <Carousel></Carousel>
          <Nav setIsOpen={setIsOpen} isOpen={isOpen}></Nav>
          {/* this is drop down section */}
          <div className={`${isOpen ? "block transition-all duration-500" : " duration-500 transition-all hidden"} w-full`}>
          <DropDowndata></DropDowndata>
          </div>
          {/* --------------------- drop down */}
        </section>


        <div className={`${isOpen ? "mt-50 duration-700" :""} w-full `}>
          <div className="xl:w-9/12 px-5 lg:px-0 lg:w-9/12 mx-auto ">

        <HotNews></HotNews>
          </div>
        <section className={`lg:grid px-5 lg:px-0 grid-cols-4 gap-7 w-full lg:w-9/12 xl:w-9/12 mx-auto justify-between py-5`}>
          <section className=' col-span-3 gap-3'>
              {/* <Notice></Notice>
              <UpdateNews></UpdateNews>
              <OurVision></OurVision>
              <Introduction></Introduction>
              <MainCategories></MainCategories> */}

              <Outlet></Outlet>

          </section>
          {/* sidebar section */}
          <section className='col-span-1'>
          <MejorPerson></MejorPerson>
          <StudentInformation></StudentInformation>
          <Gallery></Gallery>
          <Eservices></Eservices>
          <CentralEServices></CentralEServices>
          <ImportantLinks></ImportantLinks>
          <NumberOfVisitors></NumberOfVisitors>
          <EmergencyHotline></EmergencyHotline>
          <NationalAnthem></NationalAnthem>
          <YourIPAddress></YourIPAddress>
          </section>
        </section>
        </div>
        <FooterImg></FooterImg>
        <Footer></Footer>
      </div>
    )
}

