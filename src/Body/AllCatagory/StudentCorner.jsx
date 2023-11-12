import { Link } from 'react-router-dom'
import StudentCornerimg from '../../../img/studentcorner.png'
export default function StudentCorner() {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full'>
        <h2 className=' font-semibold'>শিক্ষার্থী</h2>
        <div className='flex gap-3 items-center ' >
            <img className='w-20 h-28' src={StudentCornerimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px] px-3'>
                <li className='flex items-center'><Link target='_blank' to={"https://www.google.com/drive/"}><span className=" text-2xl pr-1">▸</span> নিয়ম এবং প্রবিধান</Link></li>

                <li className='flex items-center'><Link to={"/"}><span className=" text-2xl pr-1">▸</span> বিধ্যমান শিক্ষার্থীর সংখ্যা</Link></li>

                <li className='flex items-center'><Link to={"/"}><span className=" text-2xl pr-1">▸</span> শিক্ষার্থী ইউনিফর্ম</Link></li>
                
                <li className='flex items-center'><Link to={"/"}><span className=" text-2xl pr-1">▸</span> প্রতিষ্ঠানের শিক্ষার্থী</Link></li>
                
                <li className='flex items-center'><Link to={"/StudentRepresentativeCouncil"}><span className=" text-2xl pr-1">▸</span> শিক্ষার্থী প্রতিনিধি পরিষদ</Link></li>
                
                <li className='flex items-center'><Link to={"/StudentSuccessStories"}><span className=" text-2xl pr-1">▸</span>শিক্ষার্থীদের সাফল্যের গল্প</Link></li>
                
                
            </ul>
        </div>
    </div>
  )
}
