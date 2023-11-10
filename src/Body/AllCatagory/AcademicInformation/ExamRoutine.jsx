import React from 'react'
import { Link } from 'react-router-dom'

export default function ExamRoutine() {
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
                  <td className={`${style}`}><Link>২০২১ সনের ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের ২০২২ প্রবিধানের ১ম পর্বের পর্ব মধ্য পরীক্ষার সময়সূচি। (সংশোধিত কপি)</Link></td>
              </tr>
              
              <tr>
                  <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                  <p>Views - 262</p></td>
                  <td className={`${style}`}><Link>২০২১ সনের ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের ২০২২ প্রবিধানের ১ম পর্বের পর্ব মধ্য পরীক্ষার সময়সূচি।</Link></td>
              </tr>
              
              <tr>
                  <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                  <p>Views - 262</p></td>
                  <td className={`${style}`}><Link>ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং ও ডিপ্লোমা-ইন-ট্যুরিজম এন্ড হসপিটালিটি পরীক্ষা-২০২১ এর সময়সূচি</Link></td>
              </tr>
              
              
          </table>
      </div>
    )
}
