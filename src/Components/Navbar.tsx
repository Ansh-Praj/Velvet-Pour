import { useGSAP } from '@gsap/react'
import logo from '../assets/images/logo.png'
import gsap from 'gsap'
function Navbar() {

  const NavList= [
    {
      id: 'cocktails',
      title: 'Cocktails'
    },
    {
      id: 'about',
      title: 'About Us'
    },
    {
      id: 'art',
      title: 'The Art'
    },
    {
      id: 'contact',
      title: 'Contact'
    }
  ]

  useGSAP(()=>{
    gsap.to('header', {
      backgroundColor: 'rgba(0,0,0, 0.314)',
      backdropFilter: 'blur(10px)',
      duration: 1,
      scrollTrigger: {
        trigger: 'header',
        start: 'top top',
        toggleActions: 'play none none reverse',
      },
    })
  })

  return (
    <header className="w-full fixed z-10  top-0">
      <nav className="max-w-7xl mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-5">
        <a href='#' className='flex items-center gap-x-2'>
          <img className='' src={logo} alt="logo" />
          <p className='text-3xl font-negra -mb-2'>Velvet Pour</p>
        </a>

        <ul className='flex gap-6 text-sm md:gap-12 md:text-base font-mona'>
          {NavList.map((item)=>(
               
            <li key={item.id}>
              <a className='tracking-wide' href={`#${item.id}`}>{item.title}</a>
            </li>

          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar