
import './App.css'
import Notice from './Body/Notice'
import UpdateNews from './Body/UpdateNews'
import Carousel from './Header/Carousel'
import Header from './Header/Header'
import HotNews from './Header/HotNews'
import OurVision from './Body/OurVision'
import Introduction from './Body/Introduction'
import MejorPerson from './Body/Sidebar/MejorPerson'
import StudentInformation from './Body/Sidebar/StudentInformation'
import Gallery from './Body/Sidebar/Gallery'
import Eservices from './Body/Sidebar/Eservices'
import CentralEServices from './Body/Sidebar/CentralEServices'
import ImportantLinks from './Body/Sidebar/ImportantLinks'
import NumberOfVisitors from './Body/Sidebar/NumberOfVisitors'
import EmergencyHotline from './Body/Sidebar/EmergencyHotline'

function App() {

  return (
    <>
      <div className='background'>
        <section className='md:w-9/12 mx-auto md:px-1 px-4 '>
          <Header></Header>
          <Carousel></Carousel>
          <HotNews></HotNews>
        </section>


        <section className='md:grid grid-cols-4 gap-7 md:w-9/12 mx-auto justify-between py-5'>
          <section className=' col-span-3 gap-3'>
              <Notice></Notice>
              <UpdateNews></UpdateNews>
              <OurVision></OurVision>
              <Introduction></Introduction>
          </section>
          {/* sidebar section */}
          <section className='col-span-1'>
          <MejorPerson></MejorPerson>
          <StudentInformation></StudentInformation>
          <Gallery></Gallery>
          <Eservices></Eservices>
          <CentralEServices></CentralEServices>
          <ImportantLinks></ImportantLinks>
          <NumberOfVisitors></NumberOfVisitors>
          <EmergencyHotline></EmergencyHotline>
          </section>
        </section>
      </div>
    </>
  )
}

export default App
