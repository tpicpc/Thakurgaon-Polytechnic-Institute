import { Link } from "react-router-dom"

export default function DigitalClassContent() {
    const style='border border-slate-300 p-5'

    return (
      <div>
          <table className="border-collapse border border-slate-400 text-[13px] w-full">
              <tr>
                  <th className={`${style}`}>ক্রমিক নং</th>
                  <th className={`${style}`}>টেকনোলজি</th>
              </tr>
  
              <tr>
                  <td className={`${style}`}>০১</td>
                  <td className={`${style} text-blue-600`}><Link>মাল্টিমিডিয়া কন্টেন্ট</Link></td>
              </tr>
              
              <tr>
                  <td className={`${style}`}>০২</td>
                  <td className={`${style} text-blue-600`}><Link>টিউটোরিয়াল</Link></td>
              </tr>
              
              <tr>
                  <td className={`${style}`}>০৩</td>
                  <td className={`${style} text-blue-600`}><Link>ই-বুক</Link></td>
              </tr>
              
              
          </table>
      </div>
    )
}
