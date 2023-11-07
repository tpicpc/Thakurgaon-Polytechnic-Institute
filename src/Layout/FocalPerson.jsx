import img1 from '../../img/Focalpr Person/viceprinciple.jpg'
import img2 from '../../img/Focalpr Person/ariful_islam.jpg'
import img4 from '../../img/Focalpr Person/shajahan.jpg'
import img5 from '../../img/Focalpr Person/shamim_sultan.jpg'
import img6 from '../../img/Focalpr Person/sonjoy_bonik.jpg'

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
            Responsibility={'e-Government Procurement (e-GP)'}
            name={'MD.Khorshed Alam'}
            positions={'Vice Principal'}
            phone={'Mobile No: 01712000199'}
            email={'E-mail: engr.khorshed@gmail.com'}
            img={img1}
            ></FocalPersonData>

            <FocalPersonData
            Responsibility={'e-Government Procurement (e-GP)'}
            name={'MD.Khorshed Alam'}
            positions={'Vice Principal'}
            phone={'Mobile No: 01712000199'}
            email={'E-mail: engr.khorshed@gmail.com'}
            img={img1}
            ></FocalPersonData>

            <FocalPersonData
            Responsibility={'e-Government Procurement (e-GP)'}
            name={'MD.Khorshed Alam'}
            positions={'Vice Principal'}
            phone={'Mobile No: 01712000199'}
            email={'E-mail: engr.khorshed@gmail.com'}
            img={img1}
            ></FocalPersonData>
            
            <FocalPersonData
            Responsibility={'e-Government Procurement (e-GP)'}
            name={'MD.Khorshed Alam'}
            positions={'Vice Principal'}
            phone={'Mobile No: 01712000199'}
            email={'E-mail: engr.khorshed@gmail.com'}
            img={img1}
            ></FocalPersonData>

        </>
  )
}
function FocalPersonData({Responsibility,name,positions,phone,email,img}) {
  return (
    <div className="card card-side bg-base-100 shadow-md shadow-black mb-5">
      <figure>
        <img
          src={img}
          alt="Teacher"
        />
      </figure>
      <div className='p-3 w-full'>
        <h2 className="w-full text-center text-2xl font-semibold mb-5">{Responsibility}</h2>
        <h2 className='text-xl font-bold py-2'>{name}</h2>
        <p className='text-sm font-semibold py-1'>{positions}</p>
        <p className='text-sm font-semibold py-1'>{phone}</p>
        <p className='text-sm font-semibold py-1'>{email}</p>
      </div>
    </div>
  );
}
