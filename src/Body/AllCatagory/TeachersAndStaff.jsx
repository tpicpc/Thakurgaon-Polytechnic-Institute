import TeachersAndStaffimg from '../../../img/teacher-staffs.png'
export default function TeachersAndStaff() {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3'>
        <h2 className=' font-semibold'>শিক্ষক ও কর্মচারীবৃন্দ</h2>
        <div className='flex gap-5 items-center ' >
            <img className='w-20 h-32' src={TeachersAndStaffimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px] px-3'>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>আইএমসি সদস্যরা</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> প্রধান সময়কাল</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>শিক্ষক</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> কর্মী</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>প্রাক্তন শিক্ষক</a></li>
            </ul>
        </div>
    </div>
  )
}
