import gsap from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'
// import React from 'react'

gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
    <div>
      <div className='flex text-center text-5xl justify-center items-center h-screen'>
        App it is
      </div>
    </div>
  )
}

export default App
