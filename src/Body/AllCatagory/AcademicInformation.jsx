import { Link } from 'react-router-dom'
import Academicimg from '../../../public/img/acadamic.png'
export default function AcademicInformation() {

  const handleLinkClick = () => {
    window.scrollTo({ top: 450, behavior: 'smooth' });
  };
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3'>
        <h2 className=' font-semibold'>একাডেমিক তথ্য</h2>
        <div className='flex flex-wrap gap-1 justify-start items-center '>
            <img className='md:w-32 p-3 md:p-0 md:h-32' src={Academicimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px] mb-3 px-3 md:px-0'>
                
                <li className='flex items-center -mb-2'><Link onClick={handleLinkClick} to={"/ClassRoutine"}><span className=" text-2xl pr-1">▸</span>ক্লাশ রুটিন</Link></li>

                <li className='flex items-center -mb-2'><Link  onClick={handleLinkClick} to={"/ExamRoutine"}><span className=" text-2xl pr-1">▸</span>পরীক্ষার রুটিন</Link></li>

                <li className='flex items-center -mb-2'><Link onClick={handleLinkClick} to={"/DigitalClassContent"}><span className=" text-2xl pr-1">▸</span>ডিজিটাল ক্লাশ কনটেন্ট</Link></li>
                
                <li className='flex items-center -mb-2'><Link onClick={handleLinkClick} to={"/SemesterPlan"}><span className=" text-2xl pr-1">▸</span>সেমিস্টার প্ল্যান</Link></li>
                
                <li className='flex items-center -mb-2'><Link onClick={handleLinkClick} to={"/Syllabus"}><span className=" text-2xl pr-1">▸</span>সিলেবাস</Link></li>
                
                <li className='flex items-center -mb-2'><Link onClick={handleLinkClick} to={"/Result"}><span className=" text-2xl pr-1">▸</span>পরীক্ষার ফলাফল</Link></li>
                

            </ul>
        </div>
    </div>
  )
}
