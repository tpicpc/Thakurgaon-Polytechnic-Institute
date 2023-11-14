import { Link } from 'react-router-dom';
import TPICPC from '../../img/TPICPC.png'

export default function Clubs() {
  return (
    <div className='grid grid-cols-1 items-center'>
        <ClubsData
        img={TPICPC}
        name="TPICPC"
        defination="TPI Computer Programming Club"
        about="Welcome to the TPI Computer Programming Club! We are a group of students who are passionate about technology and programming. Our goal is to provide a supportive and welcoming environment for students to explore their interests in these fields and develop their skills and knowledge."
        link="https://www.tpicpc.codes/"
        >
        </ClubsData>
        
        <ClubsData
        img={TPICPC}
        name="TPICPC"
        defination="TPI Computer Programming Club"
        about="Welcome to the TPI Computer Programming Club! We are a group of students who are passionate about technology and programming. Our goal is to provide a supportive and welcoming environment for students to explore their interests in these fields and develop their skills and knowledge."
        link="https://www.tpicpc.codes/"
        >
        </ClubsData>
    </div>
  )
}
function ClubsData({img,name,defination,about,link}) {
  return (
    <div className="md:flex mb-5 justify-between items-center shadow-md rounded-lg shadow-slate-500  p-3">
      <figure>
        <img
        className='w-[600px]'
          src={img}
          alt="Clubs image"
        />
      </figure>
      <div className="flex flex-col gap-3 font-semibold">
        <h2 className="card-title">{name}</h2>
        <p>{defination}</p>
        <small className=' text-slate-500 text-justify'>{about}</small>
        <div className="card-actions justify-end">
                <Link className="py-2 w-full text-center bg-green-600 text-white hover:bg-green-700 rounded-md font-semibold" to={`${link}`} target="_blank">More Details</Link>
            </div>
      </div>
    </div>
  );
}
