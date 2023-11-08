import serviceimg from '../../../img/service.png'
export default function Services() {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full'>
        <h2 className=' font-semibold'>সেবা</h2>
        <div className='flex flex-wrap gap-5 items-center ' >
            <img className='w-20 h-32' src={serviceimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px] px-3'>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>360 ঘন্টার শর্ট কোর্স</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> স্কাউটিং</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>বার্ষিক ক্রীড়া</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> সিটিজেন চার্টার</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>কাজের বিজ্ঞপ্তি</a></li>
                
            </ul>
        </div>
    </div>
  )
}
