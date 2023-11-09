import { useState } from "react";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import gov from "../../img/bangladesh-government-removebg-preview.png";
import Nav from "./Nav";

function Carousel({setIsOpen,isOpen}) {
  
  return (
    <div>
      <div className="carousel w-full max-h-64 relative">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full opacity-90" />
          <div className="absolute flex items-center justify-between transform opacity-80 -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="text-orange-700 text-[12px] hover:text-orange-500">
              ❮
            </a>
            <Data></Data>
            <a href="#slide2" className="text-orange-700 text-[12px] hover:text-orange-500">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full opacity-90" />
          <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-orange-700 text-[12px] hover:text-orange-500">
              ❮
            </a>
            <Data></Data>
            <a href="#slide3" className="text-orange-700 text-[12px] hover:text-orange-500">
              ❯
            </a>

          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full opacity-90" />
          <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-orange-700 hover:text-orange-500 ">
              ❮
            </a>
            <Data></Data>
            <a href="#slide4" className="text-orange-700 hover:text-orange-500">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full opacity-90" />
          <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-orange-700 hover:text-orange-500">
              ❮
            </a>
            <Data></Data>
            <a href="#slide1" className="text-orange-700 hover:text-orange-500">
              ❯
            </a>
            
          </div>
        </div>
      </div>
      <Nav setIsOpen={setIsOpen} isOpen={isOpen}></Nav>
    </div>
    
  );
}

function Data(){
    return(
        <div className="w-9/12 mx-auto items-center justify-center h-40 md:justify-start flex flex-wrap gap-3">
              <img className="max-w-24 max-h-24 " src={gov} alt="GovLogo" />
              <h2 className="text-[16px] text-center md:text-2xl font-semibold text-white">
                ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট
              </h2>
        </div>
    )
}

export default Carousel;
