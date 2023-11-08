import Integrityimg from '../../../img/Integrity.png'

export default function NationalIntrigrity() {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full'>
        <h2 className=' font-semibold'>জাতীয় অখণ্ডতা</h2>
        <div className='flex  gap-5 items-center ' >
            <img className='w-20 h-32' src={Integrityimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px] px-3'>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>জাতীয় অখণ্ডতা কৌশল বাংলাদেশ</a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> আমাদের পরিকল্পনা</a></li>
            </ul>
        </div>
    </div>
  )
}
