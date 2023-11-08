import Computer from '../../img/Technolodgy/Computer.png'
import architecture from '../../img/Technolodgy/architecture.png'
import Mechatronics from '../../img/Technolodgy/Mechatronics.png'
import Food from '../../img/Technolodgy/Food.png'
import RAC from '../../img/Technolodgy/RAC.png'

export default function Technolodgy() {
  return (
    <div>
        <TechnolodgyData 
        name="Computer Science and Technology (CST)"
        img={Computer}
        TotalSeat="২০০ জন"
        First="১০০ জন"
        Second="১০০ জন"
        ></TechnolodgyData>

        <TechnolodgyData 
        name="Architecture And Interior Design (AIDT)"
        img={architecture}
        TotalSeat="১০০ জন"
        First="৫০ জন"
        Second="৫০ জন"
        ></TechnolodgyData>
        
        <TechnolodgyData 
        name="Mechatronics"
        img={Mechatronics}
        TotalSeat="১০০ জন"
        First="৫০ জন"
        Second="৫০ জন"
        ></TechnolodgyData>

        <TechnolodgyData 
        name="Food"
        img={Food}
        TotalSeat="২০০ জন"
        First="১০০ জন"
        Second="১০০ জন"
        ></TechnolodgyData>

        <TechnolodgyData 
        name="Refrigeration & Air Conditioning (RAC)"
        img={RAC}
        TotalSeat="১০০ জন"
        First="৫০ জন"
        Second="৫০ জন"
        ></TechnolodgyData>


    </div>
  )
}
function TechnolodgyData({name,img,TotalSeat,First,Second}){
    const style='border border-slate-300 p-1 text-center font-semibold text-[12px]'

    return(
    <div className="md:flex items-center justify-center bg-base-100 rounded-md shadow-xl border-[1px] border-slate-200 mb-5">
        <figure><img className='md:w-56 w-full' src={img} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title text-center">{name}</h2>
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
                <button className="py-2 w-full bg-green-600 text-white hover:bg-green-700 rounded-md font-semibold">Teachers</button>
            </div>
        </div>
    </div>
    )
}