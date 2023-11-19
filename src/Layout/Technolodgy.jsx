import Computer from '../../public/img/Technolodgy/Computer.png'
import architecture from '../../public/img/Technolodgy/architecture.png'
import Mechatronics from '../../public/img/Technolodgy/Mechatronics.png'
import Food from '../../public/img/Technolodgy/Food.png'
import RAC from '../../public/img/Technolodgy/RAC.png'
import { Link } from 'react-router-dom'

export default function Technolodgy() {
  return (
    <div>
        <TechnolodgyData 
        name="Computer Science and Technology (CST)"
        img={Computer}
        TotalSeat="২০০ জন"
        First="১০০ জন"
        Second="১০০ জন"
        link="/Computer"
        ></TechnolodgyData>

        <TechnolodgyData 
        name="Architecture And Interior Design (AIDT)"
        img={architecture}
        TotalSeat="১০০ জন"
        First="৫০ জন"
        Second="৫০ জন"
        link="/AIDT"

        ></TechnolodgyData>
        
        <TechnolodgyData 
        name="Mechatronics"
        img={Mechatronics}
        TotalSeat="১০০ জন"
        First="৫০ জন"
        Second="৫০ জন"
        link="/Mechatronics"

        ></TechnolodgyData>

        <TechnolodgyData 
        name="Food"
        img={Food}
        TotalSeat="২০০ জন"
        First="১০০ জন"
        Second="১০০ জন"
        link="/Food"

        ></TechnolodgyData>

        <TechnolodgyData 
        name="Refrigeration & Air Conditioning (RAC)"
        img={RAC}
        TotalSeat="১০০ জন"
        First="৫০ জন"
        Second="৫০ জন"
        link="/RAC"

        ></TechnolodgyData>


    </div>
  )
}
function TechnolodgyData({name,img,TotalSeat,First,Second,link}){
    const style='border border-slate-300 p-1 text-center font-semibold text-[12px]'

    return(
    <div className="md:flex items-center justify-center bg-base-100 rounded-md shadow-xl border-[1px] border-slate-200 mb-5">
        <figure><img className='md:w-56 w-full' src={img} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="text-base md:text-xl font-semibold bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-3 py-2 text-white border-l-[4px] border-red-600 pl-3">{name}</h2>
            <table className="border-collapse border border-slate-400 text-[13px]">
                <tr>
                    <th className={`${style} text-[15px]`}>সর্বমোট আসন</th>
                    <th className={`${style} text-[15px]`}>শিফট</th>
                    <th className={`${style} text-[15px]`}>ধারণক্ষমতা </th>
                </tr>
                <tr>
                    <td className={`${style}`} rowSpan="2">{TotalSeat}</td>
                    <td className={`${style}`}>১ম শিফট </td>
                    <td className={`${style}`}>{First}</td>
                </tr>
                <tr>
                    <td className={`${style}`}>২য় শিফট</td>
                    <td className={`${style}`}>{Second}</td>
                </tr>

            </table>
            <div className="card-actions justify-end">
                <Link className="py-2 w-full text-center bg-green-600 text-white hover:bg-green-700 rounded-md font-semibold" to={`${link}`}>Teachers</Link>
            </div>
        </div>
    </div>
    )
}