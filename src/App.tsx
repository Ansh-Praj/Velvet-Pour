import { ScrollTrigger, SplitText } from 'gsap/all';
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Cocktails from './Components/Cocktails'
import About from './Components/About'
import Art from './Components/Art'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import gsap from 'gsap';



gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {

  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
      </main>
      <Footer />
    </>
  )
}

export default App
