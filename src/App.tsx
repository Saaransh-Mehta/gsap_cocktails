import gsap from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
// import React from 'react'

gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>

    </main>
  )
}

export default App
