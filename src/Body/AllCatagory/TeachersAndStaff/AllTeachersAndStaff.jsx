import Computer from "../../../../public/img/TeacherAndSTaff/Computer.png";
import architecture from "../../../../public/img/TeacherAndSTaff/architecture.png";
import Food from "../../../../public/img/TeacherAndSTaff/Food.png";
import Mechatronics from "../../../../public/img/TeacherAndSTaff/Mechatronics.png";
import RAC from "../../../../public/img/TeacherAndSTaff/RAC.png";
import NonTech from "../../../../public/img/TeacherAndSTaff/NonTech.png";
import Staff from "../../../../public/img/TeacherAndSTaff/Staff.png";
import { Link } from "react-router-dom";

export default function AllTeachersAndStaff() {
  return (
    <div className="md:grid grid-cols-2 gap-5 ">
      {/* computer */}
      <div className="flex flex-col items-center rounded-lg shadow-md shadow-green-400 mb-5">
        <figure className="w-56 h-56 flex items-center">
          <img src={Computer} alt="Computer" className="rounded-xl" />
        </figure>
        <div className="card-body justify-end items-center w-full text-center">
          <h2 className="card-title">Computer Science Technology (CST)</h2>
            <Link className=" w-full py-2 hover:text-white bg-green-400 font-semibold rounded-lg hover:bg-green-500" to={"/Computer"}>Teacher</Link>
        </div>
      </div>
      {/* architecture */}
      <div className="flex flex-col justify-between items-center rounded-lg shadow-md shadow-green-400 mb-5">
        <figure className="w-56 h-56 flex items-center">
          <img src={architecture} alt="architecture" className="rounded-xl" />
        </figure>
        <div className="card-body justify-end items-center w-full text-center">
          <h2 className="card-title">Architecture And Interior Design (AIDT)</h2>
          <Link className=" w-full py-2 hover:text-white bg-green-400 font-semibold rounded-lg hover:bg-green-500" to={"/AIDT"}>Teacher</Link>
        </div>
      </div>
      {/* Food */}
      <div className="flex flex-col justify-between items-center rounded-lg shadow-md shadow-green-400 mb-5">
        <figure className="w-56 h-56 flex items-center">
          <img src={Food} alt="Food" className="rounded-xl" />
        </figure>
        <div className="card-body justify-end items-center w-full text-center">
          <h2 className="card-title">Food Technology</h2>
          <Link className=" w-full py-2 hover:text-white bg-green-400 font-semibold rounded-lg hover:bg-green-500" to={"/Food"}>Teacher</Link>
        </div>
      </div>
      {/* Mechatronics */}
      <div className="flex flex-col justify-between items-center rounded-lg shadow-md shadow-green-400 mb-5">
        <figure className="w-56 h-56 flex items-center">
          <img src={Mechatronics} alt="Mechatronics" className="rounded-xl" />
        </figure>
        <div className="card-body justify-end items-center w-full text-center">
          <h2 className="card-title">Mechatronics Technology</h2>
          <Link className=" w-full py-2 hover:text-white bg-green-400 font-semibold rounded-lg hover:bg-green-500" to={"/Mechatronics"}>Teacher</Link>
        </div>
      </div>
      {/* RAC */}
      <div className="flex flex-col justify-between items-center rounded-lg shadow-md shadow-green-400 mb-5">
        <figure className="w-56 h-56 flex items-center">
          <img src={RAC} alt="RAC" className="rounded-xl" />
        </figure>
        <div className="card-body justify-end items-center w-full text-center">
          <h2 className="card-title">Refrigeration and Air Conditioning (RAC)</h2>
          <Link className=" w-full py-2 hover:text-white bg-green-400 font-semibold rounded-lg hover:bg-green-500" to={"/RAC"}>Teacher</Link>
        </div>
      </div>
      {/* NonTech */}
      <div className="flex flex-col justify-between items-center rounded-lg shadow-md shadow-green-400 mb-5">
        <figure className="w-56 h-56 flex items-center">
          <img src={NonTech} alt="NonTech" className="rounded-xl" />
        </figure>
        <div className="card-body justify-end items-center w-full text-center">
          <h2 className="card-title">NonTech</h2>
          <Link className=" w-full py-2 hover:text-white bg-green-400 font-semibold rounded-lg hover:bg-green-500" to={"/NonTech"}>Teacher</Link>
        </div>
      </div>
      {/* Staff */}
      <div className="flex flex-col justify-between items-center rounded-lg shadow-md shadow-green-400 mb-5">
        <figure className="w-56 h-56 flex items-center">
          <img src={Staff} alt="Staff" className="rounded-xl" />
        </figure>
        <div className="card-body justify-end items-center w-full text-center">
          <h2 className="card-title">Academic Staffs</h2>
          <Link className=" w-full py-2 hover:text-white bg-green-400 font-semibold rounded-lg hover:bg-green-500" to={"/staffes"}>Members</Link>
        </div>

      </div>
    </div>
  );
}
