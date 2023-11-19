
import NasirUddin  from '../../../../public/img/TeacherAndSTaff/Computer/nasirUddin.jpg'
import SanjayBanik  from '../../../../public/img/TeacherAndSTaff/Computer/sonjoy_bonik.jpg'
export default function RAC() {
  return (
    <div className='md:grid gap-5 grid-cols-2'>
               <Teacherdata 
                name ="মোঃ জায়েদ হাসান"
                position="চিফ ইন্সট্রাক্টর (টেক) আর এস সি"
                img={NasirUddin}
                phone="01747676595"
                email="zayedhassanme50@gmail.com"
                
            ></Teacherdata>
            {/* teacher 02 */}
            
            <Teacherdata 
                name ="সঞ্জয় বানিক"
                position="ইন্সট্রাক্টর (টেক) আর এস সি "
                img={SanjayBanik}
                phone="01711378635"
                email="bsanjaytpi@gmail.com"
                
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