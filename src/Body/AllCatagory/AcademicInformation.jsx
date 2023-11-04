import Academicimg from '../../../img/Academicimg.png'
export default function AcademicInformation() {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3'>
        <h2 className=' font-semibold'>একাডেমিক তথ্য</h2>
        <div className='flex  flex-wrap gap-5 items-center'>
            <img className='w-auto h-32' src={Academicimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px]'>
                <li className='flex items-center'><a href="#"><span className=" text-2xl pr-1">▸</span>ক্লাশ রুটিন</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-2xl pr-1">▸</span>পরীক্ষার রুটিন</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-2xl pr-1">▸</span>ডিজিটাল ক্লাশ কনটেন্ট</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-2xl pr-1">▸</span>সেমিস্টার প্ল্যান</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-2xl pr-1">▸</span>সিলেবাস</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-2xl pr-1">▸</span>পরীক্ষার ফলাফল</a></li>
            </ul>
        </div>
    </div>
  )
}
