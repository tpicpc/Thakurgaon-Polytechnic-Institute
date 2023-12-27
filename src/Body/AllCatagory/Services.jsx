import { Link } from "react-router-dom";
export default function Services() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 450, behavior: "smooth" });
  };
  return (
    <div className="bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full">
      <h2 className=" font-semibold">সেবা</h2>
      <div className='flex flex-wrap gap-1 justify-start items-center '>
        <img className='md:w-32 p-3 md:p-0 md:h-32' src="https://i.ibb.co/yhqZ4CN/service.png" alt="Academicimg" />
        <ul className="text-slate-500 text-[13px] px-3 mb-3 md:px-0">
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span> স্কাউটিং
            </Link>
          </li>
          
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span> 360 ঘন্টার শর্ট কোর্স
            </Link>
          </li>
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span> বার্ষিক ক্রীড়া
            </Link>
          </li>
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span> সিটিজেন চার্টার
            </Link>
          </li>
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span> কাজের বিজ্ঞপ্তি
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}
