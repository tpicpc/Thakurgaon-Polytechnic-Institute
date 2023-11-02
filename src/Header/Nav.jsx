
export default function Nav() {
  return (
    <div className="w-full flex items-center justify-between h-auto shadow-md -mt-[6px] shadow-slate-300 px-3 py-1">
        <ul className="flex items-center lg:text-sm xl:text-base">
            <li className="px-2"><a className="text-3xl" href="#"><i className='bx bx-home text-red-600'></i></a></li>
                <div className="hidden lg:block">
                    <Buttons name='TPI সম্পর্কে ▾' color='text-red-500 hover:bg-red-500 hover:text-white' submenu='hover:text-red-500'></Buttons>
                    <Buttons name='ফোকাল ব্যক্তি ▾' color='text-green-500 hover:bg-green-500 hover:text-white' submenu='hover:text-green-500'></Buttons>
                    <Buttons name='সু্যোগ - সুবিধা ▾' color='text-blue-500 hover:bg-blue-500 hover:text-white' submenu='hover:text-blue-500'></Buttons>
                    <Buttons name='লক্ষ্য ও উদ্দেশ্য ▾' color='text-yellow-500 hover:bg-yellow-500 hover:text-white' submenu='hover:text-yellow-500'></Buttons>
                    <Buttons name='বার্তা ▾' color='text-orange-500 hover:bg-orange-500 hover:text-white' submenu='hover:text-green-500'></Buttons>
                    <Buttons name='যোগাযোগ করুন ▾' color='text-black hover:bg-black hover:text-white' submenu='hover:text-black'></Buttons>
                    <Buttons name='ফলাফল ▾' color='text-indigo-500 hover:bg-indigo-500 hover:text-white' submenu='hover:text-indigo-500'></Buttons>
                </div>
        </ul>

        <div className="dropdown block lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
            </ul>
        </div>
    </div>
  )
}
function Buttons({name,color,submenu}){
    return(
        <div className="dropdown dropdown-hover">
                <label tabIndex={0} className={`py-[10px] w-full h-full px-3 ease-in duration-300 ${color}`}>{name}</label>
                <ul tabIndex={0} className="dropdown-content mt-3 z-[1] menu p-2 shadow bg-base-100 w-52">
                    <li><a className={`${submenu}`}>সাবমেনু ১ </a></li>
                    <li><a className={`${submenu}`}>সাবমেনু ২ </a></li>
                    <li><a className={`${submenu}`}>সাবমেনু ৩</a></li>
                </ul>
            </div>
    )
}