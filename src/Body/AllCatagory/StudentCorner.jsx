import StudentCornerimg from '../../../img/studentcorner.png'
export default function StudentCorner() {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full'>
        <h2 className=' font-semibold'>শিক্ষার্থী</h2>
        <div className='flex flex-wrap gap-5 items-center ' >
            <img className='w-20 h-32' src={StudentCornerimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px] px-3'>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>নিয়ম এবং প্রবিধান</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> বিধ্যমান শিক্ষার্থীর সংখ্যা</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>ডিজিটাল ক্লাশ কনটেন্ট</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> শিক্ষার্থী ইউনিফর্ম</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>প্রতিষ্ঠানের শিক্ষার্থী</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>শিক্ষার্থী প্রতিনিধি পরিষদ</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>শিক্ষার্থীদের সাফল্যের গল্প</a></li>
            </ul>
        </div>
    </div>
  )
}
