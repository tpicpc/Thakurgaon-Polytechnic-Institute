
export default function Nav() {
  return (
    <div className="w-full flex items-center h-auto shadow-md -mt-[6px] shadow-slate-300 px-3 py-1">
        <ul className="flex items-center">
            <li className="px-2"><a className="text-3xl" href="#"><i className='bx bx-home'></i></a></li>
            <Buttons name='TPI সম্পর্কে ▾' color='text-red-500 hover:bg-red-500 hover:text-white'></Buttons>
            <Buttons name='ফোকাল ব্যক্তি ▾' color='text-green-500 hover:bg-green-500 hover:text-white'></Buttons>
            <Buttons name='সু্যোগ - সুবিধা ▾' color='text-blue-500 hover:bg-blue-500 hover:text-white'></Buttons>
            <Buttons name='লক্ষ্য করুন ▾' color='text-yellow-500 hover:bg-yellow-500 hover:text-white'></Buttons>
            <Buttons name='বার্তা ▾' color='text-orange-500 hover:bg-orange-500 hover:text-white'></Buttons>
            <Buttons name='যোগাযোগ করুন ▾' color='text-black hover:bg-black hover:text-white'></Buttons>
            <Buttons name='ফলাফল ▾' color='text-indigo-500 hover:bg-indigo-500 hover:text-white'></Buttons>
            
        </ul>
    </div>
  )
}
function Buttons({name,color}){
    return(
        <div className="dropdown dropdown-hover">
                <label tabIndex={0} className={`py-[10px] w-full h-full px-3 ease-in duration-300 ${color}`}>{name}</label>
                <ul tabIndex={0} className="dropdown-content mt-3 z-[1] menu p-2 shadow bg-base-100 w-52">
                    <li><a>সাবমেনু ১ </a></li>
                    <li><a>সাবমেনু ২ </a></li>
                    <li><a>সাবমেনু ৩</a></li>
                </ul>
            </div>
    )
}