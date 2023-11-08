import Computer from '../../img/Technolodgy/Computer.png'

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
    </div>
  )
}
function TechnolodgyData({name,img,TotalSeat,First,Second}){
    const style='border border-slate-300 p-1 text-center font-semibold text-[12px]'

    return(
    <div className="card card-side bg-base-100 shadow-xl border-[1px] border-slate-200">
        <figure><img className='w-56 ' src={img} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
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