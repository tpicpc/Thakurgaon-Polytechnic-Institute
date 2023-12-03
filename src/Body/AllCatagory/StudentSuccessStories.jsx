import person from "../../../public/img/icons8-person-100.png";

export default function StudentSuccessStories() {

  return (
    <div>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  )
}
function Card(){
  return(
    <div className="border-[1px] border-slate-200 w-full p-3 md:flex gap-10 items-center rounded-lg shadow-md shadow-slate-400 mb-5">
      <aside className=" flex items-center justify-center md:w-44 w-full p-4 mb-5 md:mb-0">
        <img className=" w-full border-[1px] border-slate-400 rounded-full" src={person} alt={person} />
      </aside>
      <div className=" md:flex gap-2 justify-evenly w-full capitalize font-semibold text-sm ">
        <div className=" flex flex-col gap-1 mb-3 md:mb-0">
          <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] py-1 text-white border-l-[4px] border-red-600 pl-3">identity</h2>
          <p>name : mujahid</p>
          <p>department : computer</p>
          <p>session : 2019/20</p>
          <p>passing year : 2024</p>
          <p>CGPA : 3.75</p>
        </div>
        <div className=" flex flex-col gap-1 mb-3 md:mb-0">
          <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] py-1 text-white border-l-[4px] border-red-600 pl-3">designation</h2>
          <p>position : junior frontend developer</p>
          <p>Mobail : 01737705511</p>
          <p>email : mujahidislam400301@gmail.com</p>
        </div>
      </div>
    </div>
  )
}