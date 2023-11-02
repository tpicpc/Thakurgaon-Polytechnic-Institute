
import './App.css'
import Notice from './Body/Notice'
import UpdateNews from './Body/UpdateNews'
import Carousel from './Header/Carousel'
import Header from './Header/Header'
import HotNews from './Header/HotNews'
import MejorPerson from './Body/MejorPerson'
import OurVision from './Body/OurVision'

function App() {

  return (
    <>
      <div className='background'>
        <section className='md:w-9/12 mx-auto md:px-1 px-4 '>
          <Header></Header>
          <Carousel></Carousel>
          <HotNews></HotNews>
        </section>


        <section className='grid grid-cols-4 gap-8 md:w-9/12 mx-auto justify-between'>
          <section className=' col-span-3 gap-3'>
              <Notice></Notice>
              <UpdateNews></UpdateNews>
              <OurVision></OurVision>
          </section>

          <section className='col-span-1'>
          <MejorPerson></MejorPerson>
          </section>
        </section>
      </div>
    </>
  )
}

export default App
