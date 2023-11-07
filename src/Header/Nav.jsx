import { Link } from "react-router-dom";
import DropDown from "./DropDown";

export default function Nav() {
  return (
    <div className="w-full flex items-center justify-between h-auto shadow-md -mt-[6px] shadow-slate-300 px-3 py-1">
        <ul className="flex items-center lg:text-sm xl:text-base">
            <li className="px-2"><Link to={"/"}> <i className='bx bx-home-alt text-3xl text-orange-500'></i></Link></li>

            <div className=" hidden lg:block">
                <div className="flex">
                    <li className="dropdown dropdown-hover"><Link tabIndex={0} className="text-red-500 py-[11px] w-full h-full px-3 hover:bg-red-500 hover:text-white" to={"/log"}>TPI সম্পর্কে ▾</Link>
                        <ul tabIndex={0} className="dropdown-content text-black w-56 hover:  z-[1] mt-3 menu p-2 shadow bg-base-100">
                            <li><Link className="hover:text-red-500">পরিচিতি</Link></li>
                            <li><Link className="hover:text-red-500">আমাদের লক্ষ্য ও উদ্দেশ্য</Link></li>
                        </ul>

                    </li>
                    
                    <li><Link className="py-[11px] text-purple-500 w-full h-full px-3 hover:bg-purple-500 hover:text-white" to={"/log"}>ফোকাল ব্যক্তি ▾</Link></li>
                        
                    <li><Link className=" py-[11px] text-cyan-500 w-full h-full px-3 hover:bg-cyan-500 hover:text-white" to={"/log"}>সু্যোগ - সুবিধা </Link></li>
                        
                    <li><Link className="text-[#84154D] py-[11px] w-full h-full px-3 hover:bg-[#84154D]  hover:text-white" to={"/log"}>নোটিশ</Link></li>
                        
                    <li><Link className="text-[#098346] py-[11px] w-full h-full px-3 hover:bg-[#098346] hover:text-white" to={"/log"}>বার্তা</Link></li>
                        
                    <li><Link className="text-[#84154D] py-[11px] w-full h-full px-3 hover:bg-[#84154D] hover:text-white" to={"/log"}>যোগাযোগ</Link></li>
                        
                    <li><Link className="text-[#000000] py-[11px] w-full h-full px-3 hover:bg-[#000000] hover:text-white" to={"/log"}>ফলাফল ▾</Link></li>
                    </div>
            </div>
        </ul>

        <DropDown></DropDown>
    </div>
  )
}
