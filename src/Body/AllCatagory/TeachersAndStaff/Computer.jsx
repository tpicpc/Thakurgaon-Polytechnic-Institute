import alamgirSir from '../../../../img/TeacherAndSTaff/Computer/alamgirSir.jpg'
import anik from '../../../../img/TeacherAndSTaff/Computer/anik.jpg'
import arzina from '../../../../img/TeacherAndSTaff/Computer/arzina.jpg'
import bikash from '../../../../img/TeacherAndSTaff/Computer/bikash.jpg'
import faisal from '../../../../img/TeacherAndSTaff/Computer/bikash.jpg'
import maminulIslam from '../../../../img/TeacherAndSTaff/Computer/maminulIslam.jpg'
import romjan from '../../../../img/TeacherAndSTaff/Computer/romjan.jpg'
import shafic from '../../../../img/TeacherAndSTaff/Computer/shafiq.png'


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
              
            <TableData
                sl="01" 
                name ="মোঃ মমিনুল ইসলাম"
                position="চিফ ইন্সট্রাক্টর ও বিভাগীয় প্রধান (টেক/কম্পিউটার)"
                img={maminulIslam}
                phone="01716514614"
                officePhone="05555555555"
                email="maminulins@gmail.com"
                PIMC="-"
            ></TableData>
            {/* teacher 02 */}
            
            <TableData
                sl="02" 
                name ="মোঃ আলমগীর"
                position="ইন্সট্রাক্টর / কম্পিউটার (প্রসিড টু রেভিনিউ )"
                img={alamgirSir}
                phone="01724334828"
                officePhone="-"
                email="alamgircse13@gmail.com"
                PIMC="-"
            ></TableData>
            {/* teacher 03 */}
            <TableData
                sl="3" 
                name="মোঃ শফিকুল ইসলাম"
                position="ইন্সট্রাক্টর / কম্পিউটার (প্রসিড টু রেভিনিউ )"
                img={shafic}
                phone="01736507993"
                officePhone="-"
                email="shafiqwish@gmail.com"
                pimc="-"
            ></TableData>
            {/* teacher 4 */}
            <TableData
                sl="4" 
                name="সানোয়ার হোসেন অনিক"
                position="ইন্সট্রাক্টর(টেক) কম্পিউটার"
                img={anik}
                phone="01723349089"
                officePhone="-"
                email="sanowar235@gmail.com"
                pimc="-"
            ></TableData>
            {/* teacher 05 */}
            <TableData
                sl="5" 
                name="বিকাশ চন্দ্র বর্মন"
                position="জুনিয়র ইন্সট্রাক্টর / কম্পিউটার (প্রসিড টু রেভিনিউ ) "
                img={bikash}
                phone="01745294743"
                officePhone="-"
                email=" bikash.r24@gmail.com"
                pimc="-"
            ></TableData>
            {/* teacher 06 */}
            <TableData
                sl="6" 
                name="মিসেস আরজিনা আক্তার"
                position="ইন্সট্রাক্টর / কম্পিউটার (প্রসিড টু রেভিনিউ ) "
                img={arzina}
                phone="01718863848"
                officePhone="-"
                email="arzinatpi@yahoo.com"
                pimc="-"
            ></TableData>
            {/* teacher 7 */}
            <TableData
                sl="7" 
                name="মোঃ রমজান আলী"
                position="জুনিয়র ইন্সট্রাক্টর / কম্পিউটার (প্রসিড টু রেভিনিউ ) "
                img={romjan}
                phone="01767277767"
                officePhone="-"
                email="ramjan.duet@gmail.com"
                pimc="-"
            ></TableData>
            {/* teacher 8 */}
            <TableData
                sl="" 
                name="মোঃ ফয়সাল ইসলাম"
                position="01738280814 "
                img={faisal}
                phone="01767277767"
                officePhone="-"
                email="cse14th@gmail.com"
                pimc="-"
            ></TableData>
        </table>
          
      </div>
    )
}


function TableData({sl,name,position,img,phone,officePhone,email,pimc}){
    const style='border border-slate-300 p-4'
    return(
        <tr>
                  <td className={`${style}`}>{sl}</td>
                  <td className={`${style}`}>
                    <table className="border-collapse border border-slate-400 text-[13px] w-full">
                        <tr>
                            <th className={`${style} w-36 p-[5px]`}> <img  src={img} alt="Computer" /></th>
                            <td className='p-3'>
                                <table className="border-collapse border border-slate-400 text-[13px] w-full p-3">
                                        <tr>
                                            <td className={`${style} font-semibold w-20`} colSpan={"1"}> নাম</td>
                                            <td className={`${style} font-semibold w-20`} colSpan={"3"}> {name}</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>পদবি</td>
                                            <td className={`${style}`} colSpan={"3"}>{position}</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>মোবাইল</td>
                                            <td className={`${style}`}>{phone}</td>
                                            <td className={`${style}`}>ফোন ( অফিস )</td>
                                            <td className={`${style}`}>{officePhone}</td>
                                        </tr>
                                        <tr>
                                            <td className={`${style}`}>ই-মেইল</td>
                                            <td className={`${style}`}>{email}</td>
                                            <td className={`${style}`}>পি. আই. এম. এস.</td>
                                            <td className={`${style}`}>{pimc}</td>
                                        </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
    )
}