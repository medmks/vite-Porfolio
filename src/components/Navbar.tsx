import { Link } from "react-router-dom"
import {logo,menu,close} from "../assets/";

import { navLinks } from "../constances"
import { styles } from "../styles"
import { useState } from "react"

const Navbar = () => {
  const [active, setactive] = useState<string>('');
  const [Toggle,setToggle]=useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex justify-center items-center py-5 fixed top-0 z-20 bg-transparent `}>
      <div className=" flex justify-between items-center max-w-full mx-auto border p-5">
        {/* <Link to='/' className="flex items-center gab-2">
        <img alt="LOgo" src={logo} className="w-9 h-9 object-contain"/>
        <p className="text-white text-[18px] font-bold cursor-pointer flex">Mohamed &nbsp;<span className="sm:block hidden">|&nbsp; React Guernaoui</span></p>
        </Link> */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {
            navLinks.map((link)=>(
              <li key={link.id} className={`${active===link.title? "text-white": "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}  >
                <a href={`#${link.id}`} onClick={()=>setactive(link.title)}>
                  {link.title}
                  </a>
              </li>
            ))
          }
          
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