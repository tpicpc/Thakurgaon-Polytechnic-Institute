import { Link } from "react-router-dom";
import apaimg from "../../../public/img/APA.png";

export default function APA() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 450, behavior: "smooth" });
  };
  return (
    <div className="bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full">
      <h2 className=" font-semibold">বার্ষিক কর্মক্ষমতা চুক্তি (APA)</h2>
      <div className="flex flex-wrap gap-1 justify-start items-center ">
        <img
          className="md:w-32 p-3 md:p-0 md:h-32"
          src={apaimg}
          alt="Academicimg"
        />
        <ul className="text-slate-500 text-[13px] mb-3 px-3 md:px-0">
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span>বার্ষিক অগ্রগতি প্রতিবেদন
            </Link>
          </li>
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span> ১ম ত্রৈমাসিক আপডেট
            </Link>
          </li>
         
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span> ২য় ত্রৈমাসিক আপডেট
            </Link>
          </li>
         
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span> ৩য় ত্রৈমাসিক আপডেট
            </Link>
          </li>
         
          
        </ul>
      </div>
    </div>
  );
}
