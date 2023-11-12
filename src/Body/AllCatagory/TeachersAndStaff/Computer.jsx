import alamgirSir from '../../../../img/TeacherAndSTaff/Computer/alamgirSir.jpg'
import anik from '../../../../img/TeacherAndSTaff/Computer/anik.jpg'
import arzina from '../../../../img/TeacherAndSTaff/Computer/arzina.jpg'
import bikash from '../../../../img/TeacherAndSTaff/Computer/bikash.jpg'
import faisal from '../../../../img/TeacherAndSTaff/Computer/bikash.jpg'
import maminulIslam from '../../../../img/TeacherAndSTaff/Computer/maminulIslam.jpg'
import romjan from '../../../../img/TeacherAndSTaff/Computer/romjan.jpg'
import shafic from '../../../../img/TeacherAndSTaff/Computer/shafiq.png'

import { Link } from "react-router-dom"

export default function Computer() {
    const style='border border-slate-300 p-4'

    return (
      <div>
        <table className="border-collapse border border-slate-400 text-[13px]">
              <tr>
                  <th className={`${style} w-2`}>#</th>
                  <th className={`${style}`}>বিস্তারিত</th>
              </tr>
                {/* teacher 01 */}
              <tr>
                  <td className={`${style}`}>1</td>
                  <td className={`${style}`}>
                    <table className="border-collapse border border-slate-400 text-[13px]">
                        <tr>
                            <th className={`${style} w-36 p-[5px]`}> <img  src={maminulIslam} alt="Computer" /></th>
                            <td className='p-3'>
                                <table className="border-collapse border border-slate-400 text-[13px] text-start p-3">
                                        <tr>
                                            <td className={`${style} font-semibold w-20`} colSpan={"1"}> নাম</td>
                                            <td className={`${style} font-semibold w-20`} colSpan={"3"}> মোঃ মমিনুল ইসলাম</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>পদবি</td>
                                            <td className={`${style}`} colSpan={"3"}>চিফ ইন্সট্রাক্টর ও বিভাগীয় প্রধান (টেক/কম্পিউটার)</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>মোবাইল</td>
                                            <td className={`${style}`}>01716514614</td>
                                            <td className={`${style}`}>ফোন ( অফিস )</td>
                                            <td className={`${style}`}>05555555555</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>ই-মেইল</td>
                                            <td className={`${style}`}>maminulins@gmail.com</td>
                                            <td className={`${style}`}>পি. আই. এম. এস.</td>
                                            <td className={`${style}`}>-</td>
                                        </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            {/* teacher 02 */}
            <tr>
                  <td className={`${style}`}>1</td>
                  <td className={`${style}`}>
                    <table className="border-collapse border border-slate-400 text-[13px]">
                        <tr>
                            <th className={`${style} w-36 p-[5px]`}> <img  src={alamgirSir} alt="Computer" /></th>
                            <td className='p-3'>
                                <table className="border-collapse border border-slate-400 text-[13px] p-3">
                                        <tr>
                                            <td className={`${style} font-semibold w-20`} colSpan={"1"}> নাম</td>
                                            <td className={`${style} font-semibold w-20`} colSpan={"3"}> মোঃ আলমগীর</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>পদবি</td>
                                            <td className={`${style}`} colSpan={"3"}>ইন্সট্রাক্টর / কম্পিউটার (প্রসিড টু রেভিনিউ )</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>মোবাইল</td>
                                            <td className={`${style}`}>01724334828</td>
                                            <td className={`${style}`}>ফোন ( অফিস )</td>
                                            <td className={`${style}`}>05555555555</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>ই-মেইল</td>
                                            <td className={`${style}`}>alamgircse13@gmail.com</td>
                                            <td className={`${style}`}>পি. আই. এম. এস.</td>
                                            <td className={`${style}`}>-</td>
                                        </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            {/* teacher 03 */}
            <tr>
                  <td className={`${style}`}>1</td>
                  <td className={`${style}`}>
                    <table className="border-collapse border border-slate-400 text-[13px]">
                        <tr>
                            <th className={`${style} w-36 p-[5px]`}> <img  src={shafic} alt="Computer" /></th>
                            <td className='p-3'>
                                <table className="border-collapse border border-slate-400 text-[13px] p-3">
                                        <tr>
                                            <td className={`${style} font-semibold w-20`} colSpan={"1"}> নাম</td>
                                            <td className={`${style} font-semibold w-20`} colSpan={"3"}> মোঃ শফিকুল ইসলাম</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>পদবি</td>
                                            <td className={`${style}`} colSpan={"3"}>ইন্সট্রাক্টর / কম্পিউটার (প্রসিড টু রেভিনিউ )</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>মোবাইল</td>
                                            <td className={`${style}`}>01736507993</td>
                                            <td className={`${style}`}>ফোন ( অফিস )</td>
                                            <td className={`${style}`}>05555555555</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>ই-মেইল</td>
                                            <td className={`${style}`}>shafiqwish@gmail.com</td>
                                            <td className={`${style}`}>পি. আই. এম. এস.</td>
                                            <td className={`${style}`}>-</td>
                                        </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            {/* teacher 4 */}
        </table>
          
      </div>
    )
}


function TableData(){
    return(
        
    )
}