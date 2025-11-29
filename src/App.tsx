import { ScrollTrigger, SplitText } from 'gsap/all';
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Cocktails from './Components/Cocktails'
import About from './Components/About'
import Art from './Components/Art'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import gsap from 'gsap';
import Lenis from 'lenis';



gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});

gsap.ticker.lagSmoothing(0);


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
