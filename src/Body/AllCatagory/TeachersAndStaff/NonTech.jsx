
import AltafHossain  from '../../../../img/TeacherAndSTaff/Computer/altaf.jpg'
import Shahajahan  from '../../../../img/TeacherAndSTaff/Computer/shajahan.jpg'
export default function RAC() {
  return (
    <div className='md:grid gap-5 grid-cols-2'>
               <Teacherdata 
                name ="মোঃ আলতাফ হোসেন"
                position="চিফ ইন্সট্রাক্টর / (নন-টেক)"
                img={AltafHossain}
                phone="01747676595"
                email="zayedhassanme50@gmail.com"
                
            ></Teacherdata>
            {/* teacher 02 */}
            
            <Teacherdata 
                name ="মোঃ শাহাজাহান আলী"
                position="ইন্সট্রাক্টর / নন-টেক (গণিত) "
                img={Shahajahan}
                phone="01721149100"
                email="shahajahan.math78@gmail.com"
                
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