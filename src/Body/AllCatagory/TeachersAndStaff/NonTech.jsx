import AltafHossain from "../../../../public/img/TeacherAndSTaff/Computer/altaf.jpg";
import Shahajahan from "../../../../public/img/TeacherAndSTaff/Computer/shajahan.jpg";
export default function NonTech() {
  return (
    <div>
      <h2 className="text-base md:text-xl font-semibold bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-3 py-2 text-white border-l-[4px] border-red-600 pl-3">
      NonTech (NT) Teacher's' :-
      </h2>
      <div className="md:grid gap-5 grid-cols-2">
        <Teacherdata
          name="মোঃ আলতাফ হোসেন"
          position="চিফ ইন্সট্রাক্টর / (নন-টেক)"
          img={AltafHossain}
          phone="01712602084"
          email="mdaltafhossain79@gmail.com"
        ></Teacherdata>
        {/* teacher 02 */}

        <Teacherdata
          name="মোঃ শাহাজাহান আলী"
          position="ইন্সট্রাক্টর / নন-টেক (গণিত) "
          img={Shahajahan}
          phone="01721149100"
          email="shahajahan.math78@gmail.com"
        ></Teacherdata>
      </div>
    </div>
  );
}
function Teacherdata({ name, position, img, phone, email }) {
  return (
    <div className="flex flex-col border-[1px] border-slate-200 items-center gap-4 justify-between shadow-slate-500 shadow-lg p-6 mb-5 md:mb-0 rounded-lg">
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
