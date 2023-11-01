
import './App.css'
import Carousel from './Header/Carousel'
import Header from './Header/Header'

function App() {

  return (
    <>
      <div className='background'>
        <section className='w-9/12 mx-auto px-1'>
        <Header></Header>
        <Carousel></Carousel>
        </section>

      </div>
    </>
  )
}

export default App
