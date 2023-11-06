import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-full flex items-center justify-between h-auto shadow-md -mt-[6px] shadow-slate-300 px-3 py-1">
        <ul className="flex items-center lg:text-sm xl:text-base">
            <li className="px-2"><Link to={"home"}> <i className='bx bx-home-alt text-3xl text-orange-500'></i></Link></li>
                
        </ul>
{/* dropdown menu */}
    <div className="dropdown block lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
                <li><a>About</a></li>
                <li><a>About</a></li>
                <li><a>About</a></li>
            </ul>
        </div>
    </div>
  )
}
