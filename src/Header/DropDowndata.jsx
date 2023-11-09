import { Link } from "react-router-dom";

export default function DropDowndata() {
  

  return (
    <>
                    <li className="border-b-[2px] border-[#1B8119]  py-3">
                    <details>
                        <summary className="text-red-500  w-full h-full">TPI সম্পর্কে</summary>
                        <ul className="">
                            <li className="border-y-[1px] border-slate-300 flex items-center py-3"><Link to={"/Introduction"} className="text-red-500 w-full h-full px-3">পরিচিতি</Link></li>
                            <li className="flex items-center py-3"><Link to={"/OurVision"} className="text-red-500 w-full h-full px-3">আমাদের লক্ষ্য ও উদ্দেশ্য</Link></li>
                        </ul>
                    </details>
                    </li>
                    
                    <li  className="border-b-[2px] border-[#1B8119] flex items-center py-3"><Link to={"/FocalPerson"} className=" text-purple-500 w-full h-full px-3">ফোকাল ব্যক্তি </Link></li>
                        
                    <li className="border-b-[2px] border-[#1B8119] py-3"><Link to={"/Facilities"} className="  text-cyan-500 w-full h-full px-3">সু্যোগ - সুবিধা </Link></li>
                        
                    <li  className="border-b-[2px] border-[#1B8119] py-3"><Link to={"/Notice"} className="text-[#84154D]  w-full h-full px-3 ">নোটিশ</Link></li>
                        
                    <li  className="border-b-[2px] border-[#1B8119] py-3"><Link to={"/ContactPage"} className="text-[#84154D]  w-full h-full px-3 ">যোগাযোগ</Link></li>
                        
                    <li  className="border-b-[2px] border-[#1B8119] py-3"><Link to={"/Result"} className="text-[#000000]  w-full h-full px-3 ">ফলাফল</Link></li>

                    <li  className="border-b-[2px] border-[#1B8119] py-3"><Link to={"/Technolodgy"} className="text-green-600  w-full h-full px-3 h">টেকনোলজি</Link></li>
    </>
        
  )
}
