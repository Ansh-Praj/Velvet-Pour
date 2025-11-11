import { useGSAP } from '@gsap/react'
import leftLeaf from '../assets/images/hero-left-leaf.png'
import rightLeaf from '../assets/images/hero-right-leaf.png'
import cocktail from '../assets/videos/cocktail.mp4'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'

function Hero() {

  const videoRef = useRef<HTMLVideoElement>(null)
  const videoParRef = useRef<HTMLDivElement>(null)

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isFontsReady, setIsFontsReady] = useState(false)

  useGSAP(() => {
    if(!isFontsReady) return

    const text = SplitText.create('h1', { type: 'chars' })
    const subtitle = SplitText.create('.subtitle', { type: 'lines' })

    text.chars.forEach(char => char.classList.add('bg-clip-text'))

    const tl = gsap.timeline()
    tl.from(text.chars, {
      duration: 0.5,  
      y: 150,
      opacity: 0.8,
      ease: 'power1.out',
      stagger: 0.09,
    })

    tl.from(subtitle.lines, {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: 'power3.out',
      stagger: 0.07,
    }, '-=0.1')

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    })
      .to('.h-left-leaf', {
        y: -200,
        ease: 'power3.out',
      }, 0)
      .to('.h-right-leaf', {
        y: 200,
        ease: 'power3.out',
      }, 0)

    if (videoRef.current && !isMobile) {
      videoRef.current.onloadedmetadata = () => {
        gsap.to(videoRef.current, {
          currentTime: videoRef.current?.duration,
          scrollTrigger: {
            trigger: videoParRef.current,
            start: "center 60%",
            end: "bottom top",
            pin: true,
            scrub: true,
          }
        })
      }
    }

    if (videoRef.current && isMobile) {
      videoRef.current.onloadedmetadata = () => {
        gsap.to(videoRef.current, {
          scrollTrigger: {
            trigger: videoParRef.current,
            start: "top center",
            end: "bottom top",
            pin: true,
            scrub: true,
          }
        })
      }
    }
  }, {dependencies: [isFontsReady]})

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsFontsReady(true)
    })
  }, [])

  return (
    <section id='hero' className="relative min-h-screen w-full noisy border border-transparent">
      <h1 className="font-negra text-center text-8xl md:text-[15vw] md:mt-32 mt-40 ">MOHITO'S</h1>

      <img className='h-left-leaf absolute top-[75%] md:top-[18%] left-0 w-34 md:w-fit' src={leftLeaf} alt="left-leaf" />
      <img className='h-right-leaf absolute top-[50%] md:top-0 right-0 w-24 md:w-fit' src={rightLeaf} alt="right-leaf" />

      <div className="max-w-2xl md:max-w-7xl mx-auto md:mt-50">
        <div className="flex items-center justify-between px-5">
          <div className='space-y-5 hidden md:block'>
            <p className="text-md font-mona">Cool. Crisp. Classic.</p>
            <p className='subtitle font-negra text-6xl max-w-xs text-center p-0 text-myYellow'>Sip The Spirit of Summer</p>
          </div>

          <div className=' md:max-w-2xs text-lg font-mona space-y-5 '>
            <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.</p>

            <a href="#cocktails" className='font-bold opacity-80  hover:text-myYellow transition-colors'>View Cocktails</a>
          </div>
        </div>
      </div>

      <div ref={videoParRef} className='absolute w-full -z-10 md:h-[80%] h-[50%] bottom-0 md:bottom-0 '>
        <video
          ref={videoRef}
          preload='auto'
          autoPlay={isMobile}
          loop={isMobile}
          className='h-full  mx-auto object-cover'
          muted playsInline src={cocktail} />
      </div>
    </section>
  )
}

export default Hero









