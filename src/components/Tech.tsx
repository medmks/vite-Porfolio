import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"
import { technologies } from "../constances"

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gab-10">
      {
        technologies.map((tech,i)=>(
          <div key={i} className="w-28 h-28" >
              <BallCanvas icon={tech.icon}/>
          </div>
        ))
      }
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper({Component:Tech,idName:'tech'})