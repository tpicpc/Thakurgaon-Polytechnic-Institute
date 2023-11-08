import { Link } from "react-router-dom";

export default function UpdateNews() {
  return (
    <div className="h-16 border-[1px] border-slate-300 bg-slate-300 flex items-center px-2 text-base">
      <div className="marquee-container overflow-hidden hover:bg-slate-200 w-full h-8 " direction="up">
        <div className="marquee-content flex flex-col">
          <UpdateNewsData news="২য়, ৪র্থ, ৬ষ্ঠ ও ৮ম পর্বের শিক্ষার্থীদের ফরম ফিলাপ নোটিশ (অক্টোবর ২০২৩)"></UpdateNewsData>
          <UpdateNewsData news="e-Tender Notice of Thakurgaon Polytechnic Ins. Date: 27/09/2023"></UpdateNewsData>

          <UpdateNewsData news="ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট এর মেধাবী ছাত্রের অকাল মৃত্যুতে শোকবার্তা -2023"></UpdateNewsData>

          <UpdateNewsData news="APP 2023-24 Thakurgaon Polytechnic Institute"></UpdateNewsData>
          
          <UpdateNewsData news="২০২৩-২৪ শিক্ষাবর্ষের নতুন ভর্তিকৃত শিক্ষার্থীদের প্রযোজনীয় কাগজপত্রের তালিকা"></UpdateNewsData>
        </div>
      </div>
    </div>
  );
}
function UpdateNewsData({news}){
  return(
    <div className="flex flex-wrap md:flex-nowrap w-full justify-between mb-10 px-2">
        <div className="flex flex-wrap w-full">
        <a href="#">আপডেটঃ- {news}</a>
        </div>
        <button className="bg-gradient-to-b from-slate-600 to-slate-400 py-[2px] px-2 text-white"><Link to={"/AllNotice"}>পড়ুন</Link></button>
    </div>
  )
}