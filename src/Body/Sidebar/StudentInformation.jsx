
export default function StudentInformation() {
  return (
    <div className="my-5">
        <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-6 py-2 text-white border-l-[4px] border-red-600 pl-3">শিক্ষার্থীদের তথ্য</h2>

        <div className="flex w-full gap-2">
            <input className="w-full outline-sky-500 py-1 outline-[1px] border-[1px] border-slate-400 rounded px-2 text-sm font-semibold" type="number" placeholder="Bord Roll"/>
            <button className="flex items-center gap-2 bg-[#008000] px-[8px] py-[2px] rounded-sm shadow shadow-[#294d29] hover:shadow-md hover:shadow-[#294d29] text-white font-semibold"><i className='bx bx-search' ></i>Search</button>
        </div>
    </div>
  )
}
