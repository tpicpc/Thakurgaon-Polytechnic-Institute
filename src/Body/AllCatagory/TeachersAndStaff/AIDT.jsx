import NibirSarkar from "../../../../public/img/TeacherAndSTaff/Computer/nibir.jpg";
import ShailaAkhterSharme from "../../../../public/img/TeacherAndSTaff/Computer/shaila.jpg";
export default function AIDT() {
  return (
    <div>
      <h2 className="text-base md:text-xl font-semibold bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-3 py-2 text-white border-l-[4px] border-red-600 pl-3">
        Architecture And Interior Design (AIDT) Teacher's' :-
      </h2>
      <div className="md:grid gap-5 grid-cols-2">
        <Teacherdata
          name="নিবিড় সরকার"
          position="জুনিয়র ইন্সট্রাক্টর / এ আই ডি টি (প্রসিড টু রেভিনিউ )"
          img={NibirSarkar}
          phone="01764176178"
          email="nibirarc@gmail.com"
        ></Teacherdata>
        {/* teacher 02 */}

        <Teacherdata
          name="মিসেস শায়লা আক্তার শর্মি"
          position="জুনিয়র ইন্সট্রাক্টর / এ আই ডি টি (প্রসিড টু রেভিনিউ )"
          img={ShailaAkhterSharme}
          phone="01712195697"
          email="aidt.sharme@gmail.com"
        ></Teacherdata>
      </div>
    </div>
  );
}
function Teacherdata({ name, position, img, phone, email }) {
  return (
    <div className="flex flex-col items-center gap-4 border-[1px] border-slate-200 justify-between shadow-slate-500 shadow-lg p-6 mb-5 md:mb-0 rounded-lg">
      <figure className="w-48 h-48 rounded-full overflow-hidden border-4 border-black">
        <img src={img} alt="Computer" className=" object-cover w-full" />
      </figure>
      <div className="flex flex-col gap-2 items-center font-semibold text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-[14px]">{position}</p>
        <small>Phone : {phone}</small>
        <small>Email : {email}</small>
      </div>
    </div>
  );
}
