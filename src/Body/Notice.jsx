import { Link } from "react-router-dom"
import noticelogo from "../../img/bg-notice-board.png"
export default function Notice() {
  return (
    <div className=" w-auto md:flex border-[1px] border-slate-300 bg-[#FCFCFC] h-auto mb-5">
        <img className="w-24 h-24" src={noticelogo} alt="logo" />
        <ul className="md:m-6 w-full text-sm text-slate-600 p-5">
            <h2 className="text-lg">নোটিশ বোর্ড</h2>
            <ListItem notice="২য়, ৪র্থ, ৬ষ্ঠ ও ৮ম পর্বের শিক্ষার্থীদের ফরম ফিলাপ নোটিশ (অক্টোবর ২০২৩)" link="#"></ListItem>
            
            <ListItem notice="e-Tender Notice of Thakurgaon Polytechnic Ins. Date: 27/09/2023" link="#"></ListItem>
            
            <ListItem notice="ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট এর মেধাবী ছাত্রের অকাল মৃত্যুতে শোকবার্তা -2023" link="#"></ListItem>
            
            <ListItem notice="APP 2023-24 Thakurgaon Polytechnic Institute" link="#"></ListItem>
            
            <ListItem notice="SQL Injection Testing,Not For Any BAD PURPOSE." link="#"></ListItem>

            <li className="text-right pt-5 "> <Link to={"/AllNotice"}><span><u>সকল</u></span></Link></li>
            
        </ul>
    </div>
  )
}


function ListItem({notice,link}){
    return(
        <li><a className=" flex items-center"  href={link}><span className="text-[#619811] text-2xl">▸</span><span className="border-b-[1px] border-dotted border-black hover:border-solid" >{notice}</span></a></li>
    )
}