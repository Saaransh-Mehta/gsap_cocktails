import { cocktailLists,mockTailLists } from '../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Cocktails = () => {
    useGSAP(()=>{
      const t1 =  gsap.timeline({
            scrollTrigger:{
                trigger:"#cocktails",
                start:"top top",
                end:"bottom top",
                scrub:true,
            }
        })
        t1.to('.c-left-leaf',{
            y:100,
            duration:1,
            ease:'power1.inOut',
        })
        .to('.c-right-leaf',{
            y:-100,
            duration:1,
            ease:'power1.inOut',        
        })
    },[])

    return (
    <section id='cocktails' className='noisy'>
      <img src="/images/cocktail-left-leaf.png" alt="cocktails" id='c-left-leaf' />
      <img src="/images/cocktail-right-leaf.png" alt="cocktails" id='c-right-leaf' />
      <div className='list'>
        <div className='popular'>
            <h3 className='lg:text-3xl sm:text-lg md:text-2xl'>Most Loved Cocktails:</h3>
            <ul>
                {
                    cocktailLists.map((cocktail)=>(
                        <li key={cocktail.name}>
                                <div className='md:me-28'>
                                    <h3>{cocktail.name}</h3>
                                    <p>{cocktail.detail} | {cocktail.country}</p>
                                </div>
                                <span>- {cocktail.price}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="loved">
            <h3 className='lg:text-3xl sm:text-lg md:text-2xl'>Best Loved Mocktails:</h3>
                <ul>
                      {
                    mockTailLists.map((cocktail)=>(
                        <li key={cocktail.name}>
                                <div className='md:me-28'>
                                    <h3>{cocktail.name}</h3>
                                    <p>{cocktail.detail} | {cocktail.country}</p>
                                </div>
                                <span>- {cocktail.price}</span>
                        </li>
                    ))
                }
                </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails
