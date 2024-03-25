import { motion } from "framer-motion"
import { styles } from "../styles"
import { Tilt } from "react-tilt"
import { fadeIn, staggerContainer, textVariant, zoomIn } from "../utility/motion"
import  BlobComponent  from "./blobComponent"
import { profile } from "../assets"
// import Animation from "../../public/Animation.json"
const Hero = () => {

  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once:true,amount:0.25}}
    className={`z-max-w-7xl mx-auto relative z-0`}
    >
    <section className="relative w-full h-screen mx-auto">
      <BlobComponent/>
      <div className={`${styles.paddingX}  absolute inset-0  top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="bg-[#915eff] w-7 h-7 rounded-full shadow shadow-black "/>
          <div className="w-1 sm:h-96  h-96 violet-gradient  shadow shadow-black"/>
        </div>     
        <div className=""> 
            {/* <h1 className={`${styles.heroHeadText}`}>I'm <span className="text-[#915eff]">Mohamed</span></h1> */}
          <Tilt className=" w-fit">
              <motion.div
                variants={fadeIn("right","spring",0.5*1,0.75)}
                className=" green-pink-gradient   rounded-[100px] p-1 shadow-card">
                  <div className="rounded-full flex justify-center ">
                    <img className=" rounded-full w-32 h-32 lg:w-52 lg:h-52 object-cover shadow-lg shadow-black border border-gray-700" src={profile} alt="" />
                  </div>        
              </motion.div>
          </Tilt>&nbsp;
          <motion.div
            variants={textVariant(0.9)}>
                <h1 className={` ${styles.heroSubText}   font-light`}>I'm <span style={{
                          background: "-webkit-linear-gradient(#3c98b3, #34d399)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}className={`text-emerald-400   underline underline-offset-4  font-normal`} >Mohamed</span> Full-Stack developer </h1>
          </motion.div>
          <motion.div
            variants={textVariant(1.3)}>
        <p className={` ${styles.sectionSubText} mt-3 w-fit min-w-64 whitespace-normal    `} >
       
          Passionate Moroccan full-stack developer enthusiastic about technology,
          Committed to creating innovative applications and systems that address challenges and contribute to the success of businesses. 
       </p></motion.div>
      <motion.div variants={zoomIn(0.5, 0.5)}>
        <div className=" ">
            <button className=" w-36 text-center  bg-emerald-400 hover:bg-emerald-500 drop-shadow-lg shadow-xl shadow-emerald-900   mt-7  font-normal   text-primary rounded  p-2 ">
             <a href="#contact"> Get in touche</a>
            </button>
            <a className=" w-36 ml-7 p-2 text-center sm:inline  hidden text-white underline underline-offset-4  font-light" href={`#work`}>My works</a>
        </div>
  
  </motion.div>
  <div className="mt-4">
  <div className="flex items-center space-x-2 text-base">
    <h4 className={`sm:text-[15px] text-[14px] text-secondary  tracking-wider uppercase  mt-3 w-fit min-w-64 whitespace-normal`}>worked with</h4>
    {/* <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">10</span> */}
  </div>
  <div className="mt-3 flex -space-x-2 overflow-hidden py-1 px-1">
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://avatars.githubusercontent.com/u/71933266?v=4" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://avatars.githubusercontent.com/u/39573679?v=4" alt=""/>
    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>

  </div>
  <div className="mt-3 text-sm font-medium">
    <a href="#" className="text-blue-500">+ 5 others</a>
  </div>
</div>
            {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}> I'm Full-stack  <br className="sm:block hidden" /> and cross platform Apps developer </p> */}
        </div>
        <div className="w-full flex justify-end  ">
            {/* <Lottie animationData={Animation} loop={false} /> */}
        </div>
      </div>   
    {/* <ComputersCanvas/> */}
    <div className=" absolute xs:bottom-10 bottom-10 w-full h-9 hidden sm:flex  justify-center items-center" >
      <a href="#about"  className="text-black"><div className="w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-center p-2 ">
        <motion.div
        animate={{
          y:[0,21,0]
        }}
        transition={
          {
            duration:1.5,
            repeat:Infinity,
            repeatType:"loop"
          }
        }
        className="bg-white w-3 h-3 rounded-full mb-1" />
        </div>
      </a>
    </div>
    </section> 
    </motion.section>
  )
}

export default Hero
// max-w-7xl mx-auto flex flex-row items-start gap-5