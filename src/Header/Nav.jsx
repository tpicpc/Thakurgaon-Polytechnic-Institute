import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import Navbar from "./DropDown";

export default function Nav({setIsOpen,isOpen}) {
  return (
    // <div className="w-full flex items-center justify-between h-auto shadow-md -mt-[6px] shadow-slate-300 px-3 py-1">
    <div className="w-full flex items-center justify-between h-auto shadow-md -mt-[6px] shadow-slate-300  py-1">
        <ul className="flex items-center lg:text-sm xl:text-base">
            <li className="px-2"><Link to={"/"}> <i className='bx bx-home-alt text-3xl text-orange-500'></i></Link></li>

            <div className=" hidden lg:block">
                <div className="flex">
                    <li className="dropdown dropdown-hover"><Link tabIndex={0} className="text-red-500 py-[11px] w-full h-full px-3 hover:bg-red-500 hover:text-white">TPI সম্পর্কে ▾</Link>
                        <ul tabIndex={0} className="dropdown-content text-black w-56 hover:  z-[1] mt-3 menu p-2 shadow bg-base-100">
                            <li><Link to={"/Introduction"} className="hover:text-red-500">পরিচিতি</Link></li>
                            <li><Link to={"/OurVision"} className="hover:text-red-500">আমাদের লক্ষ্য ও উদ্দেশ্য</Link></li>
                        </ul>

                    </li>
                    
                    <li><Link to={"/FocalPerson"} className="py-[11px] text-purple-500 w-full h-full px-3 hover:bg-purple-500 hover:text-white">ফোকাল ব্যক্তি </Link></li>
                        
                    <li><Link to={"/Facilities"} className=" py-[11px] text-cyan-500 w-full h-full px-3 hover:bg-cyan-500 hover:text-white">সু্যোগ - সুবিধা </Link></li>
                        
                    <li><Link to={"/Notice"} className="text-[#84154D] py-[11px] w-full h-full px-3 hover:bg-[#84154D]  hover:text-white">নোটিশ</Link></li>
                        
                    <li><Link to={"/ContactPage"} className="text-[#84154D] py-[11px] w-full h-full px-3 hover:bg-[#84154D] hover:text-white">যোগাযোগ</Link></li>
                        
                    <li><Link to={"/Result"} className="text-[#000000] py-[11px] w-full h-full px-3 hover:bg-[#000000] hover:text-white">ফলাফল</Link></li>

                    <li><Link to={"/Technolodgy"} className="text-green-600 py-[11px] w-full h-full px-3 hover:bg-green-600 hover:text-white">টেকনোলজি</Link></li>

                    </div>
            </div>
        </ul>

        <DropDown setIsOpen={setIsOpen} isOpen={isOpen}></DropDown>
    </div>
  )
}
