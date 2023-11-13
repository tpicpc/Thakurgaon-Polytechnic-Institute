
import NurIslam  from '../../../../img/TeacherAndSTaff/Computer/noorIslam.png'
import BakiBillah  from '../../../../img/TeacherAndSTaff/Computer/bakiBillah.jpg'
export default function Staffes() {
  return (
    <div className='md:grid gap-5 grid-cols-2'>
               <Teacherdata 
                name ="মোঃ আলতাফ হোসেন"
                position="হেড অ্যাসিস্ট্যান্ট "
                img={NurIslam}
                phone="01742581252"
                email="chemsafiq@gmail.com"
                
            ></Teacherdata>
            {/* teacher 02 */}
            
            <Teacherdata 
                name ="মোঃ বাকী বিল্লাহ"
                position="ক্র্যাফট ইন্সট্রাক্টর (SOP) কম্পিউটার "
                img={BakiBillah}
                phone="01725740777"
                email="baki_billah@yahoo.com"
                
            ></Teacherdata>
                      
      </div>
  )
}
function Teacherdata({name,position,img,phone,email}){
    return(
        <div className="flex flex-col items-center gap-4 justify-between shadow-slate-500 shadow-lg p-6 mb-5 md:mb-0 rounded-lg">
            <figure className='w-48 h-48 rounded-full overflow-hidden border-4 border-black'>
                <img src={img} alt="Computer" className=" object-cover w-full" />
            </figure>
            <div className="flex flex-col gap-2 items-center font-semibold text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-[14px]'>{position}</p>
                <small>Phone : {phone}</small>
                <small>Email : {email}</small>
            </div>
        </div>
    )
}