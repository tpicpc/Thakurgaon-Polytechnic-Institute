import { Link } from "react-router-dom";
import TeachersAndStaffimg from "../../../public/img/teacher and staffs.png";
export default function TeachersAndStaff() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 450, behavior: "smooth" });
  };
  return (
    <div className="bg-[#FCFCFC] shadow-md shadow-slate-400 p-3">
      <h2 className=" font-semibold">শিক্ষক ও কর্মচারীবৃন্দ</h2>
      <div className='flex flex-wrap gap-1 justify-start items-center '>
        <img
           className='md:w-32 p-3 md:p-0 md:h-32'
          src={TeachersAndStaffimg}
          alt="Academicimg"
        />
        <ul className="text-slate-500 text-[13px] px-3 mb-3 md:px-0">
          <li onClick={handleLinkClick} className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span>আইএমসি সদস্যরা
            </Link>
          </li>
          <li onClick={handleLinkClick} className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span>প্রধান সময়কাল
            </Link>
          </li>
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/AllTeachersAndStaff"}>
              <span className=" text-xl pr-1">▸</span>শিক্ষক মন্ডলী
            </Link>
          </li>
          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/Staffes"}>
              <span className=" text-xl pr-1">▸</span> স্টাফস{" "}
            </Link>
          </li>
          <li onClick={handleLinkClick} className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-xl pr-1">▸</span>প্রাক্তন শিক্ষক
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
