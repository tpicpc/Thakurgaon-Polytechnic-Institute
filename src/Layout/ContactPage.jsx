
function ContactPage() {
  return (
    <>
      <HeroSection></HeroSection>
      <Contact></Contact>
    </>
  );
}

export default ContactPage;

import img from "../../public/img/1.jpg";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <section className="text-gray-600 body-font border-[1px] border-slate-300 rounded-lg shadow-md shadow-slate-400 mb-5">
      <div className="container mx-auto w-full flex p-5 md:flex-row flex-col items-center">
        <div className="w-56 h-full">
          <img
            className="object-cover object-center rounded mb-5 md:mb-0"
            alt="hero"
            src={img}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className=" text-gray-900"></h1>
          <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-4 py-2 text-white border-l-[4px] border-red-600 pl-3 title-font w-full sm:text-3xl text-2xl font-medium">
            {" "}
            Conatact Information
          </h2>
          <h2 className="card-title mb-1">
            {" "}
            <i className="bx bxs-institution"></i>Thakugaon Polytechnic
            Institute
          </h2>
          <small className=" mb-1">
            <i className="bx bxs-location-plus text-blue-600"></i>{" "}
            <Link
              target="_blank"
              to={"https://maps.app.goo.gl/xi8kUSHienCtAUQt7"}
            >
              (Gobindra Nogor, Thakurgaon Road , Thakurgaon)
            </Link>
          </small>
          <p className=" font-medium text-sm">
            <i className="bx bxs-phone"></i> Phone:0561-61400
          </p>
          <p className=" font-medium text-sm">
            {" "}
            <i className="bx bxs-envelope"></i> Email:principal@tpi.edu.bd
          </p>
        </div>
      </div>
    </section>
  );
}

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative mx-auto shadow-md shadow-slate-400 rounded-lg mb-5">
      <div className="container p-4 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden md:mr-3 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.252142292276!2d88.44041167568027!3d26.038951497092828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4eb618da025ab%3A0x95cf23c7ca0cb9e3!2sThakurgaon%20Polytechnic%20Institute!5e1!3m2!1sen!2sbd!4v1701368182606!5m2!1sen!2sbd"
          ></iframe>

          <div className=" bg-slate-100 md:opacity-90 opacity-0  relative flex flex-wrap py-6 rounded shadow-md">
            <div className="w-auto px-6">
              <h2 className="title-font capitalize font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-sm font-semibold text-justify">
              Gobindra Nogor, Thakurgaon Road ,
              <br /> Thakurgaon
              </p>
            </div>
          </div>
        </div>
        {/* massage section */}
        <div className="lg:w-1/3 md:w-1/2 p-4 font-semibold rounded-md flex flex-col md:ml-auto w-full mt-8 md:mt-0 border-[1px] border-slate-200  shadow-md shadow-slate-400">
          <h2 className="text-gray-900 text-lg font-medium title-font">
            Contact me{" "}
          </h2>

          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-[#46A20D] focus:border-[#1B8119] focus:ring-2 focus:ring-[#1B8119] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-[#46A20D] focus:border-[#1B8119] focus:ring-2 focus:ring-[#1B8119] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-[#46A20D] focus:border-[#1B8119] focus:ring-2 focus:ring-[#1B8119] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            submit
          </button>
        </div>
      </div>
    </section>
  );
};
