import { styles } from "../styles";
import { motion } from "framer-motion"
import { staggerContainer } from "../utility/motion";
type SectionWrapperProps={
          Component:React.ComponentType,
          idName:string
}
 const SectionWrapper = ({Component,idName}:SectionWrapperProps) => function HOC() {
  return (
          <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once:true,amount:0.25}}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
          >
                    <span className="hash-span" id={idName} >
                              &nbsp;
                              &nbsp;
                    </span>
                    <Component/>
          </motion.section>
  )
}
export default SectionWrapper;