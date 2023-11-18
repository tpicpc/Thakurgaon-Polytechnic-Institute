import { Link } from "react-router-dom";

export default function DropDowndata({isOpen,setIsOpen}) {
  

  return (
    <>
    <ul className=" text-center ">
      <li className="border-b-[2px] border-[#1B8119]  py-3">
        <details>
        <summary className="text-red-500  w-full h-full">TPI সম্পর্কে</summary>
          <ul className=" pt-3">
            <li className="border-y-[1px] border-slate-300 flex items-center py-3"><Link onClick={()=> setIsOpen(!isOpen)} to={"/Introduction"} className="text-red-500 w-full h-full px-3">পরিচিতি</Link></li>

            <li className=" flex items-center pt-3"><Link onClick={()=> setIsOpen(!isOpen)} to={"/Introduction"} className="text-red-500 w-full h-full">আমাদের লক্ষ্য ও উদ্দেশ্য</Link></li>
            
          </ul>
        </details>
      </li>
                    
      <li  className="border-b-[2px] border-[#1B8119] flex items-center py-3"><Link onClick={()=> setIsOpen(!isOpen)} to={"/FocalPerson"} className=" text-purple-500 w-full h-full px-3">ফোকাল ব্যক্তি </Link></li>
                        
      <li className="border-b-[2px] border-[#1B8119] py-3"><Link onClick={()=> setIsOpen(!isOpen)} to={"/Facilities"} className="  text-cyan-500 w-full h-full px-3">সু্যোগ - সুবিধা </Link></li>
                        
      <li  className="border-b-[2px] border-[#1B8119] py-3"><Link onClick={()=> setIsOpen(!isOpen)} to={"/Notice"} className="text-[#84154D]  w-full h-full px-3 ">নোটিশ</Link></li>
                        
      <li  className="border-b-[2px] border-[#1B8119] py-3"><Link onClick={()=> setIsOpen(!isOpen)} to={"/ContactPage"} className="text-[#84154D]  w-full h-full px-3 ">যোগাযোগ</Link></li>
                        
      <li  className="border-b-[2px] border-[#1B8119] py-3"><Link onClick={()=> setIsOpen(!isOpen)} to={"/Result"} className="text-[#000000]  w-full h-full px-3 ">ফলাফল</Link></li>

      <li  className="border-b-[2px] border-[#1B8119] py-3"><Link onClick={()=> setIsOpen(!isOpen)} to={"/Technolodgy"} className="text-green-600  w-full h-full px-3 h">টেকনোলজি</Link></li>
    </ul>
    </>
        
  )
}
