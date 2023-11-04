import eduMenester1 from "../../../img/Dipu magi.jpg"
import eduMenester2 from "../../../img/মাননীয় উপমন্ত্রী.jpg"
import eduMenester3 from "../../../img/সচিব.jpg"
import eduMenester4 from "../../../img/maksudur.jpg"
import eduMenester5 from "../../../img/sonjoy_bonik.jpg"

export default function MejorPerson() {
  return (
    <div>
      <MejorP rank="মাননীয় মন্ত্রী" names="ডা. দীপু মনি ," title="এম.পি" img={eduMenester1}></MejorP>
      <MejorP rank="মাননীয় উপমন্ত্রী" names="মহিবুল হাসান চৌধুরী ," title="এম.পি" img={eduMenester2}></MejorP>
      <MejorP rank="সচিব" names="মোঃ কামাল হোসেন ," title="এম.পি" img={eduMenester3}></MejorP>
      <MejorP rank="অধ্যক্ষ" names="ইঞ্জি. মোঃ মাকসুদুর রহমান" img={eduMenester4}></MejorP>
      <MejorP rank="তথ্য কর্মকর্তা ও অভিযোগ সমাধান কর্মকর্তা" names="ইঞ্জি. সঞ্জয় বণিক" img={eduMenester5}></MejorP>
    </div>
  )
}
function MejorP({rank,names,title,img}){
  return(
    <div className="w-full">
      <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-5 py-2 text-white border-l-[4px] border-red-600 pl-3">{rank}</h2>
      <img className="w-full flex border-2 border-black" src={img} alt="img" />
      <h2 className="text-center text-xl font-semibold py-3">{names}  <span className="text-sm font-semibold">{title}</span></h2>
    </div>
  )
}

