import { Link } from 'react-router-dom'
import Academicimg from '../../../img/Academicimg.png'
export default function AcademicInformation() {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3'>
        <h2 className=' font-semibold'>একাডেমিক তথ্য</h2>
        <div className='flex flex-wrap gap-5 items-center'>
            <img className='w-20 h-32' src={Academicimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px]'>
                
                <li className='flex items-center'><Link to={"/ClassRoutine"}><span className=" text-2xl pr-1">▸</span>ক্লাশ রুটিন</Link></li>

                <li className='flex items-center'><Link to={"/ExamRoutine"}><span className=" text-2xl pr-1">▸</span>পরীক্ষার রুটিন</Link></li>

                <li className='flex items-center'><Link to={"/DigitalClassContent"}><span className=" text-2xl pr-1">▸</span>ডিজিটাল ক্লাশ কনটেন্ট</Link></li>
                
                <li className='flex items-center'><Link to={"/SemesterPlan"}><span className=" text-2xl pr-1">▸</span>সেমিস্টার প্ল্যান</Link></li>
                
                <li className='flex items-center'><Link to={"/Syllabus"}><span className=" text-2xl pr-1">▸</span>সিলেবাস</Link></li>
                
                <li className='flex items-center'><Link to={"/Result"}><span className=" text-2xl pr-1">▸</span>পরীক্ষার ফলাফল</Link></li>
                

            </ul>
        </div>
    </div>
  )
}
