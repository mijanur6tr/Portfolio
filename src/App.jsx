import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Technologies } from './components/Technologies'
import { Education } from './components/Education'
import Projects from './components/Project'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='overflow-x-hidden text-white selection:text-cyan-900 selection:bg-cyan-300'>
        <div className='fixed top-0 -z-10 h-fit w-full'><div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div></div>
        
        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero/>
          <About/>
          <Technologies/>
          <Education/>
          <Projects/>
        </div>
      </div>
    </>
  )
}

export default App
