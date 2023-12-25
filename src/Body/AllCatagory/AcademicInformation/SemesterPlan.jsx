import { Link } from "react-router-dom"

export default function SemesterPlan() {
    const style='border border-slate-300 p-5'

    return (
      <div>
          <table className="border-collapse border border-slate-400 text-[13px] w-full">
              <tr>
                  <th className={`${style}`}>ক্রমিক নং</th>
                  <th className={`${style}`}>টেকনোলজি</th>
              </tr>
  
              <tr>
                  <td className={`${style}`}><p>22 Jul, 2023 09:07 PM</p> 
                    <p>Views - 262</p></td>
                  <td className={`${style} `}><Link>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের পর্ব-পরিকল্পনা-২০২৩ (আগস্ট থেকে জানুয়ারী)</Link></td>
              </tr>
              
              <tr>
              <td className={`${style}`}><p>22 Jan, 2023 09:07 PM</p> 
                    <p>Views - 262</p></td>
                  <td className={`${style} 00`}><Link>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের পর্ব-পরিকল্পনা-২০২৩ (মার্চ থেকে জুলাই)</Link></td>
              </tr>
              
              <tr>
              <td className={`${style}`}><p>22 Jul, 2022 09:07 PM</p> 
                    <p>Views - 262</p></td>
                  <td className={`${style} `}><Link>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং শিক্ষাক্রমের পর্ব-পরিকল্পনা (অক্টোবর, ২০২২ থেকে মার্চ, ২০২৩)</Link></td>
              </tr>
              
              
          </table>
      </div>
    )
}
