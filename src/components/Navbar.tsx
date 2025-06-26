import { useGSAP } from '@gsap/react'
import '../constants/index.ts'
import { navLinks } from '../constants/index.ts'
import gsap from 'gsap'

const Navbar = () => {
    useGSAP(()=>{
        const navTwean = gsap.timeline({
            scrollTrigger:{
                trigger:"nav",
                start:"bottom top"
            }
        })

        navTwean.fromTo('nav',{
            backgroundColor:'transparent',
        },{
            backgroundColor:'#00000050',
            backgroundFilter:'blur(10px)',
            duration:1,
            ease:'power1.inOut'
        })
    },[])

    return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="" />
                <p>AGENCY</p>
            </a>
            <ul>
               {navLinks.map((link) => (
                 <li key={link.id}>
                   <a href={link.id}>{link.title}</a>
                 </li>
               ))}
                </ul>
        </div>
    </nav>
  )
}

export default Navbar
