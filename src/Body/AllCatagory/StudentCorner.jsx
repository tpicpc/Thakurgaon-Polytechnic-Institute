import { Link } from "react-router-dom";
import StudentCornerimg from "../../../public/img/Student Corner.png";
export default function StudentCorner() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 450, behavior: "smooth" });
  };
  return (
    <div className="bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full">
      <h2 className=" font-semibold">শিক্ষার্থী</h2>
      <div className='flex flex-wrap gap-1 justify-start items-center '>
        <img  className='md:w-32 p-3 md:p-0 md:h-36' src={StudentCornerimg} alt="Academicimg" />
        <ul className="text-slate-500 text-[13px] px-3 mb-3 md:px-0">
          <li className="flex items-center -mb-2">
            <Link
             onClick={handleLinkClick}
              target="_blank"
              to={"https://www.google.com/drive/"}
            >
              <span className=" text-2xl pr-1">▸</span> নিয়ম এবং প্রবিধান
            </Link>
          </li>

          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-2xl pr-1">▸</span> বিধ্যমান শিক্ষার্থীর
              সংখ্যা
            </Link>
          </li>

          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-2xl pr-1">▸</span> শিক্ষার্থী ইউনিফর্ম
            </Link>
          </li>

          <li className="flex items-center -mb-2">
            <Link onClick={handleLinkClick} to={"/UnderConstraction"}>
              <span className=" text-2xl pr-1">▸</span> প্রতিষ্ঠানের শিক্ষার্থী
            </Link>
          </li>

          <li className="flex items-center -mb-2">
            <Link
             onClick={handleLinkClick}
              to={"/StudentRepresentativeCouncil"}
            >
              <span className=" text-2xl pr-1">▸</span> শিক্ষার্থী প্রতিনিধি
              পরিষদ
            </Link>
          </li>

          <li className="flex items-center -mb-2">
            <Link
               onClick={handleLinkClick}
              to={"/StudentSuccessStories"}
            >
              <span className=" text-2xl pr-1">▸</span>শিক্ষার্থীদের সাফল্যের
              গল্প
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
