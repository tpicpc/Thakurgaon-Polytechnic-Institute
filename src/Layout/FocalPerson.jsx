import img1 from '../../public/img/Focalpr Person/viceprinciple.jpg'
import img2 from '../../public/img/Focalpr Person/ariful_islam.jpg'
import img3 from '../../public/img/Focalpr Person/shajahan.jpg'
import img4 from '../../public/img/Focalpr Person/shamim_sultan.jpg'
import img5 from '../../public/img/Focalpr Person/sonjoy_bonik.jpg'

export default function FocalPerson() {
  return (
        <>
            <FocalPersonData
            Responsibility={'e-Government Procurement (e-GP)'}
            name={'MD.Khorshed Alam'}
            positions={'Vice Principal'}
            phone={'Mobile No: 01712000199'}
            email={'E-mail: engr.khorshed@gmail.com'}
            img={img1}
            ></FocalPersonData>
            
            <FocalPersonData
            Responsibility={'Disability Inclusion Service'}
            name={'MD. Ariful Alam'}
            positions={'Instructor(Tech) Food'}
            phone={'Mobile No: 01729458508'}
            email={'E-mail:ArifulAlam@gmail.com'}
            img={img2}
            ></FocalPersonData>

            <FocalPersonData
            Responsibility={'Annual Progress Report(APA) & National Integrity Strategy'}
            name={'MD. Shahajahan Ali'}
            positions={'Instructor(Non-Tech) Mathematics'}
            phone={'Mobile No: 01721149100'}
            email={'E-mail: shahajahan.math78@gmail.com'}
            img={img3}
            ></FocalPersonData>

            <FocalPersonData
            Responsibility={'IT Cell'}
            name={'MD. Shamim Sultan'}
            positions={'Instructor(Tech) Computer'}
            phone={'Mobile No: 01718256174'}
            email={'E-mail: shamim.st@gmail.com'}
            img={img4}
            ></FocalPersonData>

            <FocalPersonData
            Responsibility={'Job Placement Cell'}
            name={'Sanjay Banik'}
            positions={'Junior Instructor(Tech), RAC'}
            phone={'Mobile No: 01711378635'}
            email={'E-mail: bsanjaytpi@gmail.com'}
            img={img5}
            ></FocalPersonData>

        </>
  )
}
function FocalPersonData({Responsibility,name,positions,phone,email,img}) {
  return (
    <div className=" md:flex gap-5 rounded-lg bg-base-100 border-[1px] border-slate-300 shadow-lg shadow-slate-400 overflow-hidden p-1 md:p-0 mb-5">
      <figure className='w-auto'>
        <img
            className='md:w-64 w-full md:h-56 rounded-lg '
          src={img}
          alt="Teacher"
        />
      </figure>
      <div className='p-3 w-full'>
        <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-4 py-2 text-white border-l-[4px] border-red-600 pl-3">{Responsibility}</h2>
        <h2 className='text-xl text-green-700 font-bold py-2'>{name}</h2>
        <p className='text-sm text-slate-600 font-semibold py-1'>{positions}</p>
        <p className='text-sm text-slate-600 font-semibold py-1'>{phone}</p>
        <p className='text-sm text-slate-600 font-semibold py-1'>{email}</p>
      </div>
    </div>
  );
}
