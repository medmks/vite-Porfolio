import { styles } from "../styles"
import  { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utility/motion"
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from "../constances";
type Experpro={
  title:string,
  company_name: string,
  icon:string,
  iconBg:string,
  date:string,
  points:string[]
}
// eslint-disable-next-line react-refresh/only-export-components
const ExperienceCard=({experience}:{experience:Experpro})=>{  
return<>
<VerticalTimelineElement 
contentStyle={{background:'#1d1386',color:'#fff'}}
contentArrowStyle={{borderRight:'10px solid #232631'}}
date={experience.date}
iconClassName={experience.icon}
icon={ 
  <div className="flex justify-center items-center w-full h-full bg-white rounded-full" >
    <img src={experience.icon}
    alt="icon" className="w-[67%] h-[60%] object-contain"/>
  </div>
}

>
  <div>
    <h3 className="font-bold text-[24px] text-white">{experience.title}</h3>
    <p className="font-semibold text-secondary text-[16px]" >{experience.company_name}</p>
  </div>
  <ul className=" list-disc ml-5 mt-5  space-y-2" > 
    {
      experience.points.map((point,i)=>
        <li key={i} className=" mb-2 pl-1 text-[14px] -tracking-wider ">
          {point}
        </li>
      )
    }
  </ul>
    
</VerticalTimelineElement>
</>
}
// eslint-disable-next-line react-refresh/only-export-components
const Experience = () => {
  return (
    <>

    <motion.div
    variants={textVariant(0.5)}>
          <p className={`${styles.heroSubText}`} >What I Have Done so far</p>
    <h1 className={`${styles.heroHeadText}`}>Work Experience </h1>
    </motion.div>
    <div className=" mt-20 flex flex-col ">
      <VerticalTimeline>
           {
        experiences.map((exp,i)=>{return(
          <ExperienceCard key={i} experience={exp} />
        )
      
         })
      }
      </VerticalTimeline>
   
    </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper({Component:Experience,idName:'exprience'})