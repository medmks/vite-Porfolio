import { github } from "../assets"
import { projects,WordpressProjects } from "../constances"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utility/motion"
type ProjectsProp={
  name:string,
  description:string,
  tags: {
    name: string;
    color: string;
  }[],
  image:string,
  source_code_link:string,
}
// eslint-disable-next-line react-refresh/only-export-components
const ProjectCard=({project,index}:{project:ProjectsProp,index:number})=>{
  return<>
    <motion.div variants={fadeIn("up","spring",0.5 * index,0.75)}
    >
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          }}     
        className=" bg-tertiary p-5 h-full sm:w-[360px] w-full rounded-2xl  ">
            <div className="relative w-full">
              <img src={project.image} alt="kk" className="w-full h-full object-full  rounded-2xl "/>
             { project.tags[0].name !== "WordPress"  &&(
                            <div className="flex justify-end absolute inset-0 m-3 card-img_hover">
                            <div className="  black-gradient h-10 w-10 rounded-full flex justify-center items-center cursor-pointer  " onClick={()=>window.open(project.source_code_link,"_blank")}>
                              
                              <img src={github} alt="" className="w-1/2 h-1/2 object-contain" />
            
                            </div>
                          </div>
                       
             ) }
              </div>
            <div className="mt-7 flex flex-col">
              <h3 className="font-bold text-[24px]">{project.name}</h3>
              <p className=" leading-[25px] text-secondary text-[14px]" >{project.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2  "> 
              {
                project.tags.map((tag)=>{
                  return(
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                  )
                })
              }
            </div>
      </Tilt>

    </motion.div>

  </>
}
// eslint-disable-next-line react-refresh/only-export-components
const Works = () => {
  return  <>
  
    <motion.div
    variants={textVariant(0.1)}>
      <p className="text-[17px] text-secondary ">My work </p>
      <h1 className={`${styles.heroHeadText} text-[24px]`} >Projects.</h1>
      <p className={`${styles.sectionSubText} mt-5 text-[16px]`}>
      In my portfolio, you'll find a diverse range of projects that showcase my skills and passion for software development.
       From web applications to mobile apps, I've taken on exciting challenges and brought innovative ideas to life.
        These projects represent my journey as a developer, each one contributing to my growth and expertise
        . Whether it's crafting intuitive user interfaces, optimizing backend performance, or creating engaging user experiences, 
        
      </p>
    </motion.div>
    <div className="mt-20 gap-7 flex flex-wrap justify-center  ">
        {
          projects.map((pro,i)=>{
            return(
            <ProjectCard key={i} project={pro} index={i} />
          )})
        }
    </div>

    <motion.div
    variants={textVariant(0.1)}>
    {/* <h1 className={`${styles.heroHeadText} text-[18px]`} >WordPress Projects.</h1> */}
    </motion.div>

    <div className="mt-20 gap-7 flex flex-wrap justify-center  ">
        {
          WordpressProjects.map((pro,i)=>{
            return(
            <ProjectCard key={i} project={pro} index={i} />
          )})
        }
    </div>

 
    </>
  
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper({Component:Works ,idName:'work'})