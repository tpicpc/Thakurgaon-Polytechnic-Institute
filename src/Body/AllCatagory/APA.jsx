import apaimg from '../../../img/APA.png'

export default function APA() {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full'>
        <h2 className=' font-semibold'>বার্ষিক কর্মক্ষমতা চুক্তি (APA)</h2>
        <div className='flex  gap-5 items-center ' >
            <img className='w-20 h-32' src={apaimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px] px-3'>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>বার্ষিক অগ্রগতি প্রতিবেদন</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> ১ম ত্রৈমাসিক আপডেট</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>২য় ত্রৈমাসিক আপডেট</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> ৩য় ত্রৈমাসিক আপডেট</a></li>
            </ul>
        </div>
    </div>
  )
}
