export default function NumberOfVisitors() {
  return (
      <div className="my-4">
        <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-4 py-2 text-white border-l-[4px] border-red-600 pl-3">
        দর্শক সংখ্যা
        </h2>
        <div>
          <ul className="text-black shadow-md shadow-slate-400 my-6">
           <ListItem data="সক্রিয়" style="bg-[#4285F4]" count="10"></ListItem>
           <ListItem data="আজকে" style="bg-[#00C851]" count="100" ></ListItem>
           <ListItem data="গতকাল" style="bg-[#33B5E5]" count="200"></ListItem>
           <ListItem data="এই সপ্তাহে" style="bg-[#AA66CC]" count="300"></ListItem>
           <ListItem data="এই মাসে" style="bg-[#4285F4]" count="500"></ListItem>
           <ListItem data="এই বছরে" style="bg-[#4285F4]" count="1000"></ListItem>
           <ListItem data="সর্বমোট" style="bg-[#00C851]" count="10"></ListItem>
          </ul>
        </div>
      </div>

  );
}

function ListItem({data,style,count}){
    return(
        <>
            <li className="flex flex-wrap justify-between border-b-[1px] border-slate-300 py-3 px-4">
                <span>{data}</span>
                <span className={`text-white font-semibold px-3 flex items-center text-[12px] rounded-lg ${style}`}>{count}</span>
            </li>
        </>
    )
}
