import { Link } from "react-router-dom";
export default function AllNotice() {
    const style='border border-slate-300 p-5'

  return (
    <div>
        <table className="border-collapse border border-slate-400 text-[13px]">
            <tr>
                <th className={`${style}`}>প্রকাশের তারিখ</th>
                <th className={`${style}`}>শিরোনাম</th>
            </tr>

            <tr>
                <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                <p>Views - 262</p></td>
                <td className={`${style}`}><Link>পর্ব সমাপনী পরীক্ষা ২২ এর ২৩/০৭/২৩ ইং তারিখ বিকাল ২.০০ টার নিয়মিত এবং রেফার্ড আসন বিন্যাস।</Link></td>
            </tr>
            
            <tr>
                <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                <p>Views - 262</p></td>
                <td className={`${style}`}><Link>e-Tender Notice of Thakurgaon Polytechnic Ins. Date: 27/09/2023</Link></td>
            </tr>
            
            <tr>
                <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                <p>Views - 262</p></td>
                <td className={`${style}`}><Link>ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট এর মেধাবী ছাত্রের অকাল মৃত্যুতে শোকবার্তা -2023</Link></td>
            </tr>
            
            <tr>
                <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                <p>Views - 262</p></td>
                <td className={`${style}`}><Link>২য়, ৪র্থ ও ৬ষ্ঠ পর্বের পর্বমধ্য পরীক্ষার নোটিশ, অক্টোবর-২০২৩</Link></td>
            </tr>
            
            <tr>
                <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                <p>Views - 262</p></td>
                <td className={`${style}`}><Link>২০২৩-২৪ শিক্ষাবর্ষের নতুন ভর্তিকৃত শিক্ষার্থীদের প্রযোজনীয় কাগজপত্রের তালিকা</Link></td>
            </tr>
            
            <tr>
                <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                <p>Views - 262</p></td>
                <td className={`${style}`}><Link>সেশন ফি নোটিশ</Link></td>
            </tr>
            
            


        </table>
    </div>
  )
}
