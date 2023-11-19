
import Mossarrof  from '../../../../public/img/TeacherAndSTaff/Computer/mossarof_food.jpg'
import Safeuzzaman  from '../../../../public/img/TeacherAndSTaff/Computer/safivai.jpg'
export default function Food() {
  return (
    <div className='md:grid gap-5 grid-cols-2'>
               <Teacherdata 
                name ="মোঃ মোশাররফ হোসেন"
                position="ইন্সট্রাক্টর / ফুড (প্রসিড টু রেভিনিউ)"
                img={Mossarrof}
                phone="01738553515"
                email="mossarrofhstu07@gmail.com"
                
            ></Teacherdata>
            {/* teacher 02 */}
            
            <Teacherdata
                name ="শাফিউজ্জামান"
                position="ইন্সট্রাক্টর / ফুড (প্রসিড টু রেভিনিউ)"
                img={Safeuzzaman}
                phone="01722774807"
                email="safefoodtpi@gmail.com"
                
            ></Teacherdata>
                      
      </div>
  )
}
function Teacherdata({name,position,img,phone,email}){
    return(
        <div className="flex flex-col items-center gap-4 justify-between shadow-slate-500 shadow-lg p-6 mb-5 md:mb-0 rounded-lg">
            <figure>
                <img src={img} alt="Computer" className="rounded-full w-48 h-48 border-4 border-black" />
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