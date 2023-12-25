import alamgirSir from "../../../../public/img/TeacherAndSTaff/Computer/alamgirSir.jpg";
import maminulIslam from "../../../../public/img/TeacherAndSTaff/Computer/maminulIslam.jpg";

export default function Computer() {
  return (
    <div>
      <h2 className="text-base md:text-xl font-semibold bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-3 py-2 text-white border-l-[4px] border-red-600 pl-3">
        Computer Science and Technology (CST) Teacher's :-
      </h2>
      <div className="md:grid gap-5 grid-cols-2">
        <Teacherdata
          name="মোঃ মমিনুল ইসলাম"
          position="চিফ ইন্সট্রাক্টর ও বিভাগীয় প্রধান (টেক/কম্পিউটার)"
          img={maminulIslam}
          phone="01716514614"
          email="maminulins@gmail.com"
        ></Teacherdata>
        {/* teacher 02 */}

        <Teacherdata
          name="মোঃ আলমগীর"
          position="ইন্সট্রাক্টর / কম্পিউটার (প্রসিড টু রেভিনিউ )"
          img={alamgirSir}
          phone="01724334828"
          email="alamgircse13@gmail.com"
        ></Teacherdata>
      </div>
    </div>
  );
}

function Teacherdata({ name, position, img, phone, email }) {
  return (
    <div className="flex flex-col items-center border-[1px] border-slate-200 gap-4 justify-between shadow-slate-500 shadow-lg p-6 mb-5 md:mb-0 rounded-lg">
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
