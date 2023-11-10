import { Link } from "react-router-dom"

export default function ClassRoutine() {
    const style='border border-slate-300 p-5'

  return (
    <div>
    <table className="border-collapse border border-slate-400 text-[13px] w-full">
        <tr>
            <th className={`${style}`}>প্রকাশের তারিখ</th>
            <th className={`${style}`}>শিরোনাম</th>
        </tr>

        <tr>
            <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
            <p>Views - 262</p></td>
            <td className={`${style}`}><Link>ক্লাস রুটিন ২য় শিফট ২য়, ৪র্থ ও ৬ষ্ঠ পর্ব সকল টেকনোলজি।</Link></td>
        </tr>
        
        <tr>
            <td className={`${style}`}><p>22 Jan, 2023 09:07 PM</p> 
            <p>Views - 262</p></td>
            <td className={`${style}`}><Link>ক্লাস রুটিন ১ম শিফট ২য়, ৪র্থ ও ৬ষ্ঠ পর্ব সকল টেকনোলজি।</Link></td>
        </tr>
        
        <tr>
            <td className={`${style}`}><p>22 Jul, 2022 09:07 PM</p> 
            <p>Views - 262</p></td>
            <td className={`${style}`}><Link>ক্লাস রুটিন ১ম শিফট ২য়, ৪র্থ ও ৬ষ্ঠ পর্ব সকল টেকনোলজি।</Link></td>
        </tr>
        
        
    </table>
</div>
  )
}
