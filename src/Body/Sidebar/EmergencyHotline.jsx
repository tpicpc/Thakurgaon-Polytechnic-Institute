import hotimg from "../../../img/999.png"
export default function EmergencyHotline() {
  return (
    <div className="my-4">
        <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-4 py-2 text-white border-l-[4px] border-red-600 pl-3">
        জরুরি হটলাইন</h2>
        <div className="border-b-[1px] border-slate-300">
          <img className="py-4" src={hotimg} alt="hotline" />  
        </div>
      </div>

  )
}
