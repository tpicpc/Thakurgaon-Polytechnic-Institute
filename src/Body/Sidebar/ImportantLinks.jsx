
export default function ImportantLinks() {
  return (

        <div className="my-4">
         <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-4 py-2 text-white border-l-[4px] border-red-600 pl-3"> কেন্দ্রীয় ই-সেবা</h2>
         <div>
            <ul className="text-[13px] ">
                <ListItem data=" শিক্ষা মন্ত্রণালয়" link={"https://moedu.gov.bd/"}></ListItem>
                <ListItem data=" কারিগরি শিক্ষা অধিদপ্তর" link={"https://techedu.gov.bd/"}></ListItem>
                <ListItem data=" বাংলাদেশ কারিগরি শিক্ষা বোর্ড" link={"https://bteb.gov.bd/"}></ListItem>
                <ListItem data=" স্কীলস এন্ড ট্রেনিং এনহ্যান্সমেন্ট প্রজেক্ট" link={"http://www.step-dte.gov.bd/"}></ListItem>
                <ListItem data=" এনএসডিসি" link={"https://nsda.gov.bd/"}></ListItem>
                <ListItem data=" আইএলও" link={"https://www.ilo.org/dhaka/lang--en/index.htm"}></ListItem>
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