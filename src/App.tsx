// import { useState } from 'react'
import { Hero, Navbar,About,Contact,Experience,Tech,Works,StarsCanvas} from './components';
// import './App.css'
import { BrowserRouter } from 'react-router-dom';
const  App=()=> {
  // const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/> 
      <Hero/>
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
</div>
</BrowserRouter>

    </>
  )
}

export default App
