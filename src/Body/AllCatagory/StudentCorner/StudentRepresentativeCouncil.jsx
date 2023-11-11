import { Link } from "react-router-dom"

export default function StudentRepresentativeCouncil() {
    const style='border border-slate-300 p-5'

    return (
      <div>
          <table className="border-collapse border border-slate-400 text-[13px] w-full">
              <tr>
                  <th className={`${style}`}>প্রকাশের তারিখ</th>
                  <th className={`${style}`}>শিরোনাম</th>
              </tr>
  
              <tr>
                  <td className={`${style}`}><p>24 May, 2022 11:05 AM</p> 
                    <p>Views - 262</p></td>
                  <td className={`${style} `}><Link>শিক্ষার্থী প্রতিনিধি পরিষদ-২০২২</Link></td>
              </tr>
              
              
          </table>
      </div>
    )
}
