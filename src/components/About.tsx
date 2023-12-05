import { services } from "../constances"
import { styles } from "../styles"
import { motion } from "framer-motion"
import { fadeIn ,textVariant} from "../utility/motion"
import { Tilt } from "react-tilt"
import { SectionWrapper } from "../hoc"
// import { DetailedHTMLProps, HTMLAttributes } from "react"
type cardProp={
title:string,
icon:string,
}

// eslint-disable-next-line react-refresh/only-export-components
const ServicesCard=({entry,index}:{entry:cardProp, index:number})=>{
  return<>
    <Tilt className="xs:w-[250px] w-full ">
        <motion.div
                  variants={fadeIn("right","spring",0.5*index,0.75)}
                  className="w-full green-pink-gradient p-[1px]  rounded-[20px] shadow-card">

                    <div className="bg-tertiary h-[280px] rounded-[20px] flex justify-center items-center flex-col gap-8 p-8"
                      // options={{
                      //   scale:1,
                      //   speed:1040,
                      //   max:66
                      // }}     
                             >
                        <img src={entry.icon} className=" object-contain w-20 h-20  "/>

                          <h3 className="font-bold text-[20px] text-center">{entry.title}</h3>
                    </div>
                      
        </motion.div>
                   
    </Tilt>
  </>
}
// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return <>
  <motion.div
  variants={textVariant(0.5)}
  >
    <p className={`${styles.sectionSubText}`}>Introduction</p>
    <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
  </motion.div>
  <motion.p
  variants={fadeIn("","",0.1,1)}
  className="text-secondary text-[18px] max-w-13xl leading-[33px] ">
    
  </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {
        services.map((service,i)=>{
          
          return(
            <ServicesCard key={service.title} entry={service} index={i} />

          )
        })
      }
    </div>
  </>
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper({Component:About ,idName:'about'})