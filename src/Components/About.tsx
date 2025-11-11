import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import ab1 from "../assets/images/abt1.png"
import ab2 from "../assets/images/abt2.png"
import ab3 from "../assets/images/abt3.png"
import ab4 from "../assets/images/abt4.png"
import ab5 from "../assets/images/abt5.png"
import gsap from "gsap"
import { useEffect, useState } from "react"

export default function About() {

  const [isFontsReady, setIsFontsReady] = useState(false)

  useGSAP(()=>{
    if(!isFontsReady) return
    
    const spiltText = SplitText.create("#about h2", {type: 'words'})

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: "#about",
        start: "top center",
      },
    })
    
    tl.from(spiltText.words, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.02,
      ease: "power3.out",
    })
    
    tl.from('#about div.grid *', {
      opacity:0,
      duration:1,
      ease:"power3.out",
    }, "-=0.5")

  }, {dependencies: [isFontsReady]})

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsFontsReady(true)
    })
  })
  
  return (
    <section id='about' className="min-h-screen p-10 md:p-28 max-w-2xl md:max-w-full mx-auto font-mona">
      <div className="max-w-7xl mx-auto">

        <div className="flex md:flex-row flex-col justify-between mb-10 gap-5 md:gap-0">
          <div className="">
            <p className="bg-white text-black w-fit px-4 py-2 rounded-full font-medium text-sm mb-6">Best Cocktails</p>

            <h2 className="md:text-6xl text-5xl font-negra md:max-w-[55%] max-w-[90%]">Where Every Detail Matters - From Muddle Too Garnish</h2>
          </div>

          <div className="w-full md:w-[45%] flex flex-col justify-between ">
            <p className="text-lg">Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
            <div>
              <p className="text-xl md:text-3xl font-bold my-4"><span className="text-myYellow text-5xl">4.5</span> / 5</p>
              <p>More Than +1000 Customers</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
          <div className="md:col-span-3 h-72 overflow-hidden rounded-3xl">
            <img className="w-full h-full object-cover" src={ab1} alt="ab1" />
          </div>

          <div className="md:col-span-6 h-72 overflow-hidden rounded-3xl">
            <img className="w-full h-full object-cover" src={ab2} alt="ab2" />
          </div>

          <div className="md:col-span-3 h-72 overflow-hidden rounded-3xl">
            <img className="w-full h-full object-cover" src={ab5} alt="ab5" />
          </div>


          <div className="md:col-span-8 h-72 overflow-hidden rounded-3xl">
            <img className="w-full h-full object-cover" src={ab3} alt="ab2" />
          </div>

          <div className="md:col-span-4 h-72 overflow-hidden rounded-3xl">
            <img className="w-full h-full object-cover" src={ab4} alt="ab5" />
          </div>
          
        </div>

      </div>
    </section>
  )
}
