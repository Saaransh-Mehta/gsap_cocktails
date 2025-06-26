import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"
const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const isMobile = useMediaQuery({maxWidth:768})
    useGSAP(()=>{
        const splittext = new SplitText('.title',{
            type:"words,chars"
        })
        const timeline = gsap.timeline({delay:1})

        splittext.chars.forEach((char:any)=>{ char.classList.add('text-gradient')})
        gsap.from(splittext.chars,{
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.2,
        })

        timeline.fromTo('.title',{
            y:100,
            opacity:0,

        },{
            y:0,
            opacity:1,
            duration:1,
            ease:"power1.inOut"
        })
        timeline.fromTo('.subtitle',{
            y:100,
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:1,
            ease:"power1.inOut"
        })

        gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:"top top",
                end:"bottom top",
                scrub:true
            }
                
        }).to('.left-leaf',{y:200},0)
        .to('right-leaf',{y:-200},0)

        const startValue = isMobile ? 'top 50%':'center 60%'
        const endValue = isMobile ? '120% top' : 'bottom top'
        gsap.timeline({
            scrollTrigger: {
                trigger: videoRef.current,
                start: startValue,
                end: endValue,
                scrub: true,
            }
        }).to(videoRef.current, {
            currentTime: videoRef.current?.duration || 1,
            ease: "none"
        });
    },[])
  return (
        <>  
      <section id="hero" className="noisy">
       <h1 className="title">AGENCY</h1>
       <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf"/>
       <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf"/>

       <div className="body">
        <div className="content">
            <div className="left-content space-y-5 hidden lg:block md:block">
                <p>Code.Create.Repeat</p>
                <p className="subtitle">
                    Create stunning  <br />landing Pages 
                </p>
               
            </div>
             <div className="view-cocktails">
                    <p className="subtitle">
                        We create stunning landing pages for your business. <br />
                        Our team of experts will work with you to create a page that is not only visually appealing
                        but also optimized for conversions. <br />
                        <a href="#projects" className="text-[#ffb700]">View Projects</a>
                    </p>

                </div>
        </div>
       </div>

    </section>
    <div className="video absolute inset-0">
		<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/videos/output.mp4"
		/>
	 </div>
        </>
  )
}

export default Hero
