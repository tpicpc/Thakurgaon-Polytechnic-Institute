
import './App.css'
import Carousel from './Header/Carousel'
import Header from './Header/Header'
import HotNews from './Header/HotNews'

function App() {

  return (
    <>
      <div className='background'>
        <section className='md:w-9/12 mx-auto md:px-1 px-4 '>
        <Header></Header>
        <Carousel></Carousel>
        <HotNews></HotNews>
        </section>
      </div>
    </>
  )
}

export default App
