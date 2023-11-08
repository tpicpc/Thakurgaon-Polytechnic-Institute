
export default function Footer() {
  return (
    <div className="mx-auto md:w-full xl:w-9/12 lg:w-9/12 w-full flex flex-col gap-4 text-[13px] text-slate-500 mb-6 p-3 lg:p-0">
        <div className="lg:flex justify-between flex-wrap ">
            <ul className="flex gap-3 flex-wrap mb-3">
                <li><a className="hover:bg-slate-400 hover:text-white px-2 py-1" href="#">অভিযোগ </a></li>
                <li><a className="hover:bg-slate-400 hover:text-white px-2 py-1" href="#">যোগাযোগ</a></li>
                <li><a className="hover:bg-slate-400 hover:text-white px-2 py-1" href="#">পরামর্শ</a></li>
            </ul>

            <ul>
                <li><a className="hover:text-black" href="#"> <span className="font-semibold">পরিকল্পনা ও বাস্তবায়নেঃ-</span>অধ্যক্ষ ( টি.পি.আই. ) </a></li>
            </ul>
        </div>
        <h2 className=" text-justify px-3"><a className="hover:text-black" href="#"><span className="font-semibold">ডিজাইন ও ডেভেলপমেন্টঃ-</span> মোঃ মমিনুল ইসলাম। ( বিভাগীয় প্রধানঃ- কম্পিউটার, টি.পি.আই ) ।</a></h2>
        <small className="font-semibold text-black text-justify px-3">কপিরাইট © 2023 ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট ( Version: 0.0.1 )</small>
        <h2 className="text-center hover:text-black">( কারিগরি সহায়তায়: সানোয়ার হোসেন অনিক )</h2>
    </div>
  )
}
