

import { Link } from "react-router-dom"

export default function Computer() {
    const style='border border-slate-300 p-5'

    return (
      <div>
          <table className="border-collapse border border-slate-400 text-[13px]">
              <tr>
                  <th className={`${style} w-2`}>#</th>
                  <th className={`${style}`}>বিস্তারিত</th>
              </tr>
  
              <tr>
                  <td className={`${style}`}>1</td>
                  <td className={`${style}`}><Link>পর্ব সমাপনী পরীক্ষা ২২ এর ২৩/০৭/২৩ ইং তারিখ বিকাল ২.০০ টার নিয়মিত এবং রেফার্ড আসন বিন্যাস।</Link></td>
              </tr>
              
          </table>
      </div>
    )
}
