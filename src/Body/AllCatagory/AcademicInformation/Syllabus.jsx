import { Link } from "react-router-dom"

export default function Syllabus() {
    const style='border border-slate-300 p-5'

    return (
      <div>
          <table className="border-collapse border border-slate-400 text-[15px] w-full">
              
              <tr>
                  <th className={`${style}`}>০১</th>
                  <td className={`${style} `}><Link>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং কোর্স স্ট্রাকচার, সিলেবাস এবং বিধান 2016</Link></td>
              </tr>
              
              <tr>
                <th className={`${style}`}>০২</th>
                  <td className={`${style} `}><Link>ডিপ্লোমা ইন ইঞ্জিনিয়ারিং কোর্স স্ট্রাকচার বিধান 2022</Link></td>
              </tr>
              
          </table>
      </div>
    )
}
