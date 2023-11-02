
import './App.css'
import Notice from './Body/Notice'
import UpdateNews from './Body/UpdateNews'
import Carousel from './Header/Carousel'
import Header from './Header/Header'
import HotNews from './Header/HotNews'
import MejorPerson from './Body/MejorPerson'
import OurVision from './Body/OurVision'
import Introduction from './Body/Introduction'
import StudentInformation from './Body/StudentInformation'
import Gallery from './Body/Gallery'

function App() {

  return (
    <>
      <div className='background'>
        <section className='md:w-9/12 mx-auto md:px-1 px-4 '>
          <Header></Header>
          <Carousel></Carousel>
          <HotNews></HotNews>
        </section>


        <section className='md:grid grid-cols-4 gap-8 md:w-9/12 mx-auto justify-between p-5'>
          <section className=' col-span-3 gap-3'>
              <Notice></Notice>
              <UpdateNews></UpdateNews>
              <OurVision></OurVision>
              <Introduction></Introduction>
          </section>

          <section className='col-span-1'>
          <MejorPerson></MejorPerson>
          <StudentInformation></StudentInformation>
          <Gallery></Gallery>

          </section>
        </section>
      </div>
    </>
  )
}

export default App
