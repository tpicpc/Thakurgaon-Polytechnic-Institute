
export default function Eservices() {
  return (
    <div className="my-4">
         <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-4 py-2 text-white border-l-[4px] border-red-600 pl-3"> ই-সেবা</h2>
         <div>
            <ul className="text-[13px] ">
                <ListItem data=" ওয়েবমেইল"></ListItem>
                <ListItem data=" অনলাইনে অভিযোগ/মতামত প্রেরণ"></ListItem>
                <ListItem data=" বোর্ড চ্যালেঞ্জ"></ListItem>
            </ul>
        </div>
        
    </div>
  )
}
function ListItem({data}){
    return(
        <>
            <li className="flex items-center border-b-[1px] border-slate-300 py-2"><a href="#"><i className='bx bxs-chevron-right text-white rounded-full bg-[#1B8119]'></i> {data}</a></li>
        </>
    )
}