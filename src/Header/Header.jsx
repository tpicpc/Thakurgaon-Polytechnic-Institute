import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="bg-[#2F9014] flex justify-center md:justify-between items-center py-4 px-2 border-b-4 border-[#8AD024]">
        <div>
        <ul className="flex gap-2 items-center text-xl font-bold text-white">
            <li><Link className="px-2 py-1 rounded-full bg-[#49A91D] hover:opacity-70" to={"/"}><i className='bx bx-home'></i></Link></li>
            <li><a target=" _blank" className="px-2 py-1 rounded-full bg-[#326780] hover:opacity-70" href="https://www.facebook.com/TPIBD"> <i className='bx bxl-facebook' ></i></a></li>
            <li><a target=" _blank" className="px-2 py-1 rounded-full bg-blue-400 hover:opacity-70" href="https://twitter.com"> <i className='bx bxl-twitter' ></i></a></li>
            <li><a target=" _blank" className="px-2 py-1 rounded-full bg-red-800 hover:opacity-70" href="https://www.youtube.com/watch?v=r-dnObsTLGo"> <i className='bx bxl-youtube' ></i></a></li>
        </ul>
        </div>

    </div>
  )
}
