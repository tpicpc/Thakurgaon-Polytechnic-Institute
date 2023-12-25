import ZayedHassan from "../../../../public/img/TeacherAndSTaff/Computer/zayed.jpg";
export default function Mechatronics() {
  return (
    <div>
      <h2 className="text-base md:text-xl font-semibold bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-3 py-2 text-white border-l-[4px] border-red-600 pl-3">
      Mechatronics Technology (MNT) Teacher's' :-
      </h2>
      <div className="md:grid gap-5 grid-cols-2">
        <Teacherdata
          name="মোঃ জায়েদ হাসান"
          position="ইন্সট্রাক্টর (টেক) মেকাট্রনিক্স"
          img={ZayedHassan}
          phone="01747676595"
          email="zayedhassanme50@gmail.com"
        ></Teacherdata>
        {/* teacher 02 */}

        <Teacherdata
          name="মোঃ জায়েদ হাসান"
          position="ইন্সট্রাক্টর (টেক) মেকাট্রনিক্স"
          img={ZayedHassan}
          phone="01747676595"
          email="zayedhassanme50@gmail.com"
        ></Teacherdata>
      </div>
    </div>
  );
}
function Teacherdata({ name, position, img, phone, email }) {
  return (
    <div className="flex flex-col border-[1px] border-slate-200 items-center gap-4 justify-between shadow-slate-500 shadow-lg p-6 mb-5 md:mb-0 rounded-lg">
      <figure>
        <img
          src={img}
          alt="Computer"
          className="rounded-full w-48 h-48 border-4 border-black"
        />
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
