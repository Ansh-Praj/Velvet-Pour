import footerRightLeafImage from "../assets/images/footer-right-leaf.png"
import footerLeftLeafImage from "../assets/images/footer-left-leaf.png"
import insta from "../assets/images/insta.png"
import twitter from "../assets/images/x.png"
import facebook from "../assets/images/fb.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { SplitText } from "gsap/all"


function Footer() {
    const footerRef = useRef(null)
    const [isFontsReady, setIsFontsReady] = useState(false)
    
    useGSAP(()=>{
        if(!isFontsReady) return
        
        const headingSpilt = SplitText.create("h2", {type: "chars"})

        const tl = gsap.timeline({
            ease: "power1.inOut",
            scrollTrigger:{
                start: "top 45%",
                trigger: footerRef.current,
            }
        })
        tl.from(headingSpilt.chars, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: .009
        })
        tl.from('p:first-child', {
            opacity: 0,
            y: 50,
            duration: 1,
        }, '-=0.5')
        tl.from('.footer-right-leaf', {
            y: 50,
            duration: 1,
        })
        tl.from('.footer-left-leaf', {
            y: -100,
            duration: 1,
        })
    }, {scope: footerRef, dependencies: [isFontsReady]})

    useEffect(() => {
        document.fonts.ready.then(() => {
            setIsFontsReady(true)
        })
    }, [])

  return (
    <footer id="contact" ref={footerRef} className="relative overflow-hidden min-h-screen radial-gradient ">
        <img src={footerRightLeafImage} alt="right-leaf" className="footer-right-leaf absolute -top-12 right-0" />
        <img src={footerLeftLeafImage} alt="left-leaf" className="footer-left-leaf absolute -bottom-25 left-0" />

        <div className="py-14 flex flex-col justify-between h-screen items-center gap-10 text-center text-2xl font-mona">
            <h2 className="font-negra text-6xl">Where To Find Us</h2>

            <div>
                <p className="text-base uppercase mb-2">Visit Bur Bar</p>
                <p>Lebanon, Beirut, Downtown</p>
            </div>

            <div>
                <p className="text-base uppercase mb-2">Contact Us</p>
                <p>01/005009 </p>
                <p>velvetpour@gmail.com</p>
            </div>

            <div>
                <p className="text-base uppercase mb-2">Open Every Day</p>
                <p>Mon–Thu : 11:00am – 12am</p>
                <p>Fri : 11:00am – 2am</p>
                <p>Sat : 9:00am – 2am</p>
                <p>Sun : 9:00am – 1am</p>
            </div>

            <div className="flex justify-center items-center gap-5">
                <p className="text-base uppercase mb-2">SOCIALS</p>
                <img src={insta} alt="insta" />
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
            </div>
        </div>
    </footer>
  )
}

export default Footer