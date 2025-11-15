import underImg from "../assets/images/under-img.jpg"
import check from "../assets/images/check.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

function Art() {

  const artRef = useRef<HTMLDivElement>(null)

  const leftList= [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors"
  ]

  const rightList= [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred"
  ]

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:artRef.current,
        start:"center center",
        end:"bottom 60%",
        pin:true,
        scrub:.9
      }
    })
    
    tl.to(".will-fade", {
      opacity:0,
      duration:4,
      ease:"power3.out",
      stagger: 0.04
    })

    tl.to(".maskImg", {
      maskSize:'400%',
      scale: 1.3, 
      duration:10,
      ease:"power3.out"
    })  

    tl.to(".fade-in", {
      opacity:1,
      duration:7,
      ease:"power1.inOut"
    })
  }, {scope: artRef})

  return (
    <section ref={artRef} id="art" className="min-h-screen relative radial-gradient max-w-7xl mx-auto flex flex-col justify-center items-center">

      <h2 className="mt-36 will-fade text-8xl md:text-[20vw] text-[#434343] font-negra text-center text-nowrap leading-none">The Art</h2>

      <div className="flex md:flex-row flex-col gap-10 justify-between mt-40 md:mt-10 md:w-7xl w-[85%] mx-auto font-mona">
        <ul className="space-y-4 will-fade">
          {leftList.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src={check} alt="check" />
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <ul className="space-y-4 will-fade">
          {rightList.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <img src={check} alt="check" />
              <p>{item}</p>
            </li>
          ))}
        </ul>

      </div>

      <div className="absolute  md:top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 md:w-[70%] w-[100%] rounded-4xl overflow-hidden">
        <img src={underImg} alt="under-img" className=' maskImg mask-[url(/mask-img.png)] mask-no-repeat mask-center mask-size-[50%]' />
      </div>

      <div className='w-full mb-30'>
        <p className="will-fade font-negra text-[#f7f7f7] hidden md:block md:text-5xl text-center  mt-32">Sip-Worthy Perfection</p>

        <div className="w-full font-serif text-center fade-in opacity-0 absolute md:bottom-5 bottom-50 -translate-x-1/2  left-1/2 space-y-5">
          <h3 className="font-semibold text-2xl md:text-5xl max-w-4xl mx-auto">Made with Craft, Poured with Passion</h3>
          <p className="text-lg">This isn't just a drink. It's a carefully crafted moment made just for you.</p>
        </div>
      </div>
      
    </section>
  )

  // return (
  //   <section ref={artRef} id="art" className="min-h-screen relative radial-gradient max-w-7xl mx-auto flex flex-col justify-center items-center pt-20">

  //     <h2 className="will-fade text-[20vw] text-[#434343] font-negra text-center text-nowrap leading-none mt-26">The Art</h2>

  //     <div className="flex justify-between  w-7xl font-mona mt-10">
  //       <ul className="space-y-4 will-fade">
  //         {leftList.map((item, index) => (
  //           <li key={index} className="flex items-center gap-2">
  //             <img src={check} alt="check" />
  //             <p>{item}</p>
  //           </li>
  //         ))}
  //       </ul>

  //       <ul className="space-y-4 will-fade">
  //         {rightList.map((item, index) => (
  //           <li key={index} className="flex items-center gap-2">
  //             <img src={check} alt="check" />
  //             <p>{item}</p>
  //           </li>
  //         ))}
  //       </ul>

  //     </div>

  //     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[73%] h-[59%] rounded-4xl overflow-hidden">
  //       <img src={underImg} alt="under-img" className=' maskImg mask-[url(/mask-img.png)] mask-no-repeat mask-center mask-size-[50%]' />
  //     </div>

  //     <div className=''>
  //       <p className="will-fade font-negra text-[#f7f7f7] text-5xl text-center mb-36 mt-32">Sip-Worthy Perfection</p>

  //       <div className="font-serif text-center fade-in opacity-0 absolute bottom-5 -translate-x-1/2  left-1/2 space-y-5">
  //         <h3 className="font-semibold text-5xl">Made with Craft, Poured with Passion</h3>
  //         <p>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
  //       </div>
  //     </div>
      
  //   </section>
  // )

}

export default Art


// mask-[url(/mask-img.png)]