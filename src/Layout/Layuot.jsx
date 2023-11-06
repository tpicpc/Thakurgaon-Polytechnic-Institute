import { Outlet } from "react-router-dom";
import MainCategories from "../Body/AllCatagory/MainCategories";
import FooterImg from "../Body/FooterImg";
import Introduction from "../Body/Introduction";
import Notice from "../Body/Notice";
import OurVision from "../Body/OurVision";
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
import UpdateNews from "../Body/UpdateNews";
import Carousel from "../Header/Carousel";
import Footer from "../Header/Footer";
import Header from "../Header/Header";
import HotNews from "../Header/HotNews";

export default function Layuot ()  {
    return (
        <div className='background'>
        <section className='xl:w-9/12 px-5 lg:px-0 lg:w-9/12 mx-auto '>
          <Header></Header>
          <Carousel></Carousel>
          <HotNews></HotNews>
        </section>


        <section className='lg:grid px-5 lg:px-0 grid-cols-4 gap-7 w-full lg:w-9/12 xl:w-9/12 mx-auto justify-between py-5'>
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
        <FooterImg></FooterImg>
        <Footer></Footer>
      </div>
    )
}

