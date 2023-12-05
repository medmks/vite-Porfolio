// import { Link } from "react-router-dom"
import {menu,close} from "../assets/";
import { motion } from "framer-motion";
import { navLinks } from "../constances"
import { styles } from "../styles"
import { useState } from "react"


const Navbar = () => {
  const [active, setactive] = useState<string>('');
  const [Toggle,setToggle]=useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex justify-center  py-5 fixed top-0 z-20 bg-transparent `}>
      <div style={{backgroundColor:" rgba( 193, 174, 252, 0.15 )",border: "1px solid rgba( 255, 255, 255, 0.18 )"}} className=" flex justify-between items-center max-w-full mx-auto  p-2 rounded-full backdrop-filter backdrop-blur-md opacity-100    ">
        {/* <Link to='/' className="flex items-center gab-2">
        <img alt="LOgo" src={logo} className="w-9 h-9 object-contain"/>
        <p className="text-white text-[18px] font-bold cursor-pointer flex">Mohamed &nbsp;<span className="sm:block hidden">|&nbsp; React Guernaoui</span></p>
        </Link> */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((tab) => (
        <li
          key={tab.id}
          
          className={`${
            active === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-light tracking-wider  text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {active === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute bg-fourtary backdrop-blur-lg  inset-0 z-10  mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
            />
          )}
          <a onClick={() => setactive(tab.id)} href={`#${tab.id}`}>{tab.title}</a>
          
        </li>
      ))}
          {/* {
            navLinks.map((link)=>(
              <li key={link.id} style={{backgroundColor:`${active===link.title ? '':''}`}} className={`${active===link.title? "text-white      rounded-full  ": "text-secondary"} hover:text-white  tracking-wider text-[18px] p-2 pl-5 pr-5 font-light cursor-pointer`}  >
                <a href={`#${link.id}`} onClick={()=>setactive(link.title)}>
                {active === link.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 backdrop-blur-md mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {link.title}
                  </a>
              </li>
            ))
          } */}
          
        </ul> 
        <div className="sm:hidden flex flex-1 justify-end item-center">
          <img src={Toggle?close:menu} alt="" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>setToggle(!Toggle)} />
        </div>
        <div className={`${!Toggle?"hidden":"flex" } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[178px] z-10 rounded-xl `}>
        <ul className="list-none flex  flex-row gap-4 ">
          {
            navLinks.map((link)=>(
              <li key={link.id} className={`${active===link.title? "text-white": "text-secondary"} font-poppins font-medium text-[16px] cursor-pointer`} onClick={()=>{setToggle(!Toggle)}}  >
                <a href={`#${link.id}`} onClick={()=>setactive(link.title)}>
                  {link.title}
                </a>
              </li>
            ))
          }
          
        </ul> 
        </div>
      </div>
    </nav>
  )
}

export default Navbar 