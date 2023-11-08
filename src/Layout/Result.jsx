import { Link } from "react-router-dom"


export default function Result() {
    const style='border border-slate-300 p-5'

  return (
    <div>
        <table className="border-collapse border border-slate-400 text-[13px]">
            <tr>
                <th className={`${style}`}>ফলাফল প্রকাশের তারিখ</th>
                <th className={`${style}`}>শিরোনাম</th>
            </tr>

            <tr>
                <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                <p>Views - 262</p></td>
                <td className={`${style}`}><Link>২য় পর্ব ১ম শিফট ও ২য় শিফট সমাপনী পরীক্ষা-২০২১ এর চুড়ান্ত ফলাফল।</Link></td>
            </tr>
            
            <tr>
                <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                <p>Views - 262</p></td>
                <td className={`${style}`}><Link>২য় পর্ব ১ম শিফট ও ২য় শিফট সমাপনী পরীক্ষা-২০২১ এর চুড়ান্ত ফলাফল।</Link></td>
            </tr>
            
            <tr>
                <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                <p>Views - 262</p></td>
                <td className={`${style}`}><Link>পর্ব সমাপনী পরীক্ষা ২২ এর ২৩/০৭/২৩ ইং তারিখ বিকাল ২.০০ টার নিয়মিত এবং রেফার্ড আসন বিন্যাস।</Link></td>
            </tr>
            
            
        </table>
    </div>
  )
}
