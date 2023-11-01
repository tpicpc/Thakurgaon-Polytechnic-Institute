

export default function Header() {
  return (
    <div className="bg-[#2F9014] flex justify-center md:justify-between items-center py-4 px-2 border-b-4 border-[#8AD024]">
        <div className="md:block hidden">
        <ul className="flex gap-2 items-center text-xl font-bold text-white">
            <li><a className="px-2 py-1 rounded-full bg-[#49A91D] hover:opacity-70" href="#"> <i className='bx bx-home'></i></a></li>
            <li><a className="px-2 py-1 rounded-full bg-[#326780] hover:opacity-70" href="#"> <i className='bx bxl-facebook' ></i></a></li>
            <li><a className="px-2 py-1 rounded-full bg-blue-400 hover:opacity-70" href="#"> <i className='bx bxl-twitter' ></i></a></li>
            <li><a className="px-2 py-1 rounded-full bg-red-800 hover:opacity-70" href="#"> <i className='bx bxl-youtube' ></i></a></li>
        </ul>
        </div>

        <div className="flex gap-3">
            <input className=" outline-sky-500 outline-[1px] border-none rounded px-2 text-sm font-semibold" type="text" placeholder="Search anything..." />
            <button className="flex items-center gap-2 bg-[#008000] px-[8px] py-[2px] rounded-md shadow shadow-[#294d29] hover:shadow-md hover:shadow-[#294d29] text-white font-semibold"><i className='bx bx-search' ></i>Search</button>
        </div>
    </div>
  )
}
