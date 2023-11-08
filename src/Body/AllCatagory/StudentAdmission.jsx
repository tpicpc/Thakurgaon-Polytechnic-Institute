import addmissionimg from '../../../img/Addmission.png'

export default function StudentAdmission() {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full'>
        <h2 className=' font-semibold'>টেকনোলজিসমূহ</h2>
        <div className='flex  gap-5 items-center ' >
            <img className='w-20 h-32' src={addmissionimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px] px-3'>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>এ আই ডি টি টেকনোলজি</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>কম্পিউটার টেকনোলজি</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>ফুড টেকনোলজি</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>আর এ  সি টেকনোলজি</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>মেকাট্রনিক্স টেকনোলজি</a></li>
            </ul>
        </div>
    </div>
  )
}
