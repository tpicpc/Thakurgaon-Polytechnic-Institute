import { Link } from "react-router-dom"

export default function StudentSuccessStories() {
    const style='border border-slate-300 p-5'

    return (
      <div>
          <table className="border-collapse border border-slate-400 text-[13px] w-full">
              <tr>
                  <th className={`${style}`}>Identity</th>
                  <th className={`${style}`}>Office</th>
                  <th className={`${style}`}>Contact</th>
              </tr>
  
              <tr>
                  <td className={`${style}`}>Full Name : Abdur Rahim
                    Roll Number : 707242
                    Technology : 66-COMPUTER
                    Passing Year : 2017</td>
                  <td className={`${style} w-60`}><Link>Designation : <span className="bg-[#00C851] px-2 text-white rounded-md">Branch Manager</span><br />
                    Name Of Office : Paltan, Dhaka-1000
                    Office Address : Eastern Arzoo Tower, Level 5; Suite #05-261 Bijoy Nagar Road, Dhaka-1000</Link></td>
                  <td className={`${style} `}><Link>Email : arahim.ict.bd@gmail.com
                    Facebook Link : https://www.facebook.com/Abdur.Rahim.tech/</Link></td>
              </tr>
              
              <tr>
                  <td className={`${style}`}>Full Name : Abdur Rahim
                    Roll Number : 707242
                    Technology : 66-COMPUTER
                    Passing Year : 2017</td>
                  <td className={`${style} w-60`}><Link>Designation : <span className="bg-[#00C851] px-2 text-white ">Branch Manager</span><br />
                    Name Of Office : Paltan, Dhaka-1000
                    Office Address : Eastern Arzoo Tower, Level 5; Suite #05-261 Bijoy Nagar Road, Dhaka-1000</Link></td>
                  <td className={`${style} `}><Link>Email : arahim.ict.bd@gmail.com
                    Facebook Link : https://www.facebook.com/Abdur.Rahim.tech/</Link></td>
              </tr>


              <tr>
                  <td className={`${style}`}>Full Name : Abdur Rahim
                    Roll Number : 707242
                    Technology : 66-COMPUTER
                    Passing Year : 2017</td>
                  <td className={`${style} w-60`}><Link>Designation : <span className="bg-[#00C851] px-2 text-white ">Branch Manager</span><br />
                    Name Of Office : Paltan, Dhaka-1000
                    Office Address : Eastern Arzoo Tower, Level 5; Suite #05-261 Bijoy Nagar Road, Dhaka-1000</Link></td>
                  <td className={`${style} `}><Link>Email : arahim.ict.bd@gmail.com
                    Facebook Link : https://www.facebook.com/Abdur.Rahim.tech/</Link></td>
              </tr>

              
              
          </table>
      </div>
    )
}
