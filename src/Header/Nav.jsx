
export default function Nav() {
  return (
    <div className="w-full h-auto shadow-md shadow-slate-300 py-1 -mt-2">
        <ul className="flex gap-5 items-center px-3">
            <li><a className="text-3xl" href="#"><i className='bx bx-home'></i></a></li>
            <li><a href="#">TPI সম্পর্কে</a></li>
            <li><a href="#">ফোকাল ব্যক্তি</a></li>
            <li><a href="#">সু্যোগ - সুবিধা</a></li>
            <li><a href="#">লক্ষ্য করুন</a></li>
            <li><a href="#">বার্তা</a></li>
            <li><a href="#">যোগাযোগ করুন</a></li>
            <li><a href="#">ফলাফল</a></li>
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn m-1">Hover</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </ul>
    </div>
  )
}
