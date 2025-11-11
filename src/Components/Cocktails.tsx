import { useGSAP } from '@gsap/react'
import left from '../assets/images/cocktail-left-leaf.png'
import right from '../assets/images/cocktail-right-leaf.png'
import gsap from 'gsap'

function Cocktails() {

  const mostPopularCocktails=[
    {
      name: 'Chapel Hill Shiraz',
      quantity: 'AU | Battle',
      price: 10
    }
    ,
    {
      name: 'Caten Malbee',
      quantity: 'AU | Battle',
      price: 49
    },
    {
      name: 'Rhino Pale Ale',
      quantity: 'CA | 750 ml',
      price: 20
    },
    {
      name: 'Irish Guinness',
      quantity: 'IE | 600 ml',
      price: 29
    }
  ]

  const mostLovedMocktails = [
    {
      name: 'Tropical Bloom',
      quantity: 'US | Battle',
      price: 10
    },
    {
      name: 'Passionfruit Mint',
      quantity: 'US | Battle',
      price: 49
    },
    {
      name: 'Citrus Glow',
      quantity: 'CA | 750 ml',
      price: 20
    },
    {
      name: 'Lavender Fizz',
      quantity: 'IE | 600 ml',
      price: 29
    }
  ]

  useGSAP(()=>{
    gsap.timeline({
      scrollTrigger: {
        trigger: '.left-leaf',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      }
    })
	 .from('.left-leaf', {
      x: -100, y: 100
    })
    .from('.right-leaf', {
      x: 100, y: 100
    })
  })

  return (
    <section id='cocktails' className='min-h-screen noisy relative overflow-hidden pb-30 md:pb-0'>
      <div className="flex-col gap-20 md:gap-0 md:flex-row flex justify-between pt-36 max-w-2xl md:max-w-7xl mx-auto font-mona p-4">

        <div className="md:w-xs">
          <h2 className="text-xl font-medium mb-8">Most Popular Cocktails</h2> 
          <ul className="space-y-8">
            {mostPopularCocktails.map((item,index)=>{
              return(
                <li key={index}
                className="font-mona  flex justify-between">
                  <div>
                    <h3 className="text-myYellow font-negra text-xl">{item.name}</h3>
                    <p className="text-sm">{item.quantity}</p>
                  </div>
                  <span className="text-white font-semibold text-xl">- ${item.price} -</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="md:w-xs">
          <h2 className="text-xl font-medium mb-8">Most Loved Mocktails</h2> 
          <ul className="space-y-8">
            {mostLovedMocktails.map((item,index)=>{
              return(
                <li key={index}
                className="font-mona  flex justify-between">
                  <div>
                    <h3 className="text-myYellow font-negra text-xl">{item.name}</h3>
                    <p className="text-sm">{item.quantity}</p>
                  </div>
                  <span className="text-white font-semibold text-xl">- ${item.price} -</span>
                </li>
              )
            })}
          </ul>
        </div>

      </div>

      <img className="hidden md:block left-leaf absolute bottom-0 left-0" src={left} alt="left-leaf" />
      <img className="hidden md:block right-leaf absolute bottom-0 right-0" src={right} alt="right-leaf" />

    </section>
  )
}

export default Cocktails