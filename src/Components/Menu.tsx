import leftArrow from '../assets/images/left-arrow.png'
import rightArrow from '../assets/images/right-arrow.png'
import drink1 from '../assets/images/drink1.png'
import drink2 from '../assets/images/drink2.png'
import drink3 from '../assets/images/drink3.png'
import drink4 from '../assets/images/drink4.png'
import sliderLeftLeafImage from '../assets/images/slider-left-leaf.png'
import sliderRightLeafImage from '../assets/images/slider-right-leaf.png'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Menu() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const MenuList = [
      {
          name: "Classic Mojito",
          heading: 'Simple Ingredients, Bold Flavor',
          description: "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
          image: drink1
      },
      {
          name: 'Raspberry Mojito',
          heading: 'A Zesty Classic That Never Fails',
          description: "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
          image: drink2
      },
      {
          name: 'Violet Breeze',
          heading: 'Simple Ingredients, Bold Flavor',
          description: "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
          image: drink3
      },
      {
          name: 'Curacao Mojito',
          heading: 'Crafted With Care, Poured With Love',
          description: "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
          image: drink4
      }
  ]

  useGSAP(()=>{
    gsap.from('#cocktail-img', {
      opacity: 0,
      x: -400,
      duration: 1,
      ease: 'power1.inOut'
    })

    gsap.from('#cocktail-heading', {
      opacity: 0,
      y: 100,
      duration: 0.4,
      ease: 'power1.inOut'
    })

    gsap.from('#cocktail-description', {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: 'power1.inOut'
    })
  }, {dependencies: [currentIndex]})

  function changeIndex(idx: number){
    const checkedIndex = (idx+4) % 4
    setCurrentIndex(checkedIndex)
  }

  function getCocktailAt(indexOffset: number){
    return MenuList[(currentIndex + indexOffset + 4) % 4]
  }

  const nextCocktail = getCocktailAt(1)
  const prevCocktail = getCocktailAt(-1)

  return (
    <section id="menu" className="relative radial-gradient py-20 pb-40 px-5 md:px-0 md:mt-27">

      <img src={sliderRightLeafImage} alt="right-leaf" className='hidden md:block absolute -top-30 right-0' />
      <img src={sliderLeftLeafImage} alt="left-leaf" className='hidden md:block absolute bottom-20 translate-y-20 left-0 object-contain w-fit' /> 

      <div className=" font-negra grid grid-cols-2 md:grid-cols-4 md:text-3xl text-xl md:gap-20 gap-10 max-w-6xl w-full mx-auto md:mb-30 mb-20">
        {MenuList.map((item, idx) => (
            <button onClick={()=> setCurrentIndex(idx)} className={`border-b cursor-pointer pb-2 ${currentIndex !== idx ? "text-white/50" : ""}`} key={item.name}>{item.name}</button>
        ))}
      </div>
      <div className="relative border border-transparent max-w-7xl mx-auto">

        <div className="absolute w-full flex justify-between items-center">
          <button 
          onClick={() => changeIndex(currentIndex - 1)}
          className='font-negra text-3xl md:w-36 w-fit text-left cursor-pointer hover:text-myYellow'>
            <span className='leading-none md:block hidden'>{prevCocktail.name}</span>
            <img src={leftArrow} alt="left-arrow" />
          </button>

          <button 
          onClick={() => changeIndex(currentIndex + 1)}
          className='font-negra text-3xl md:w-36 w-fit text-left cursor-pointer hover:text-myYellow'>
            <span className='md:block hidden'>{nextCocktail.name}</span>
            <img src={rightArrow} alt="right-arrow" />
          </button>
        </div>

        <div className='flex justify-center items-center mt-12'>
          <img src={MenuList[currentIndex].image} id='cocktail-img' alt={MenuList[currentIndex].name} className='h-[60vh] object-contain' />
        </div>

        <div className='static md:absolute bottom-0 flex md:flex-row flex-col justify-between md:items-center w-full gap-10'>
            <div className='space-y-4 md:translate-y-20'>
              <p className='font-mona'>Recipe For:</p>
              <p className='font-negra text-myYellow md:text-6xl text-3xl md:w-20'>{MenuList[currentIndex].name}</p>
            </div>

            <div className='md:max-w-md'>
              <h2 id='cocktail-heading' className='md:text-5xl text-3xl font-medium font-serif mb-5'>{MenuList[currentIndex].heading}</h2>
              <p id='cocktail-description' className='md:w-[27rem] pe-5 text-lg font-mona'>{MenuList[currentIndex].description}</p>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Menu