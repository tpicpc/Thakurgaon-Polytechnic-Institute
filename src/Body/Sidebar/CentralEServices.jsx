
export default function CentralEServices() {
  return (
    <div className="my-4">
         <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-4 py-2 text-white border-l-[4px] border-red-600 pl-3"> কেন্দ্রীয় ই-সেবা</h2>
         <div>
            <ul className="text-[13px] ">
                <ListItem data=" জন্ম ও মৃত্যু নিবন্ধন" link={"https://orgbdr.gov.bd/"}></ListItem>
                <ListItem data=" অনলাইনে পাসপোর্টের আবেদন" link="http://www.passport.gov.bd/"></ListItem>
                <ListItem data=" জাতীয় পরিচয়পত্রের তথ্য" link={"https://nidbd.org/voter-id-card-onusondhan/"}></ListItem>
                <ListItem data=" অনলাইন আয়কর পরিশোধ" link={"https://nbr.gov.bd/faq/income-tax-faq/ban"}></ListItem>
            </ul>
        </div>
        
    </div>
  )
}
function ListItem({data,link}){
    return(
        <>
            <li className="flex items-center border-b-[1px] py-2 border-slate-300"><a target="_blanck" href={link}><i className='bx bxs-chevron-right text-white rounded-full bg-[#1B8119]'></i> {data}</a></li>
        </>
    )
}

