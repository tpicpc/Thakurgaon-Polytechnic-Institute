import Computer from '../../../../img/TeacherAndSTaff/Computer.png'
import architecture from '../../../../img/TeacherAndSTaff/architecture.png'
import Food from '../../../../img/TeacherAndSTaff/Food.png'
import Mechatronics from '../../../../img/TeacherAndSTaff/Mechatronics.png'
import RAC from '../../../../img/TeacherAndSTaff/RAC.png'
import NonTech from '../../../../img/TeacherAndSTaff/NonTech.png'
import Staff from '../../../../img/TeacherAndSTaff/Staff.png'

export default function AllTeachersAndStaff() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={Computer}
          alt="Computer"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Computer Science Technology (CST)</h2>
        <div className="card-actions">
          <button className="btn btn-primary">Teacher</button>
        </div>
      </div>
    </div>
  );
}
