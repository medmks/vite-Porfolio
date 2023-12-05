import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utility/motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { testimonials } from "../constances"


type testprop={
testimonial:string,
name:string,
designation:string,
company:string,
image:string,
}
// eslint-disable-next-line react-refresh/only-export-components
const TestmonaiCard =({testimonial,index}:{testimonial:testprop,index:number})=>{
return(
  <motion.div
  variants={fadeIn("","spring",0.5*index,0.75)}
   className="bg-black-200 sm:w-[280px] w-full rounded-3xl p-10 ">
     
      <p className="text-[50px] font-black text-blue-50">"</p>
      <p>{testimonial.testimonial}</p>
      <div className="flex flex-row justify-between text-[16px] ">
        <div className=" mt-5 flex flex-col">
          <p className=" text-white  font-medium "  ><span className="blue-text-gradient" >@</span>{testimonial.name}</p>
          <p className="text-secondary text-[12px]">{testimonial.designation} of {testimonial.company}</p>
        </div>
        <div className="h-10 w-10 mt-7 ">
          <img src={testimonial.image}alt="" className="rounded-full object-cover" />
        </div>

      </div>
    
  </motion.div>
)
}
// eslint-disable-next-line react-refresh/only-export-components
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding}bg-tertiary min-h-[250px] rounded-2xl  `} >
      <motion.div variants={textVariant(0.3)} >
        <p className={`${styles.sectionSubText}`}>what others say </p>
        <h1 className={`${styles.sectionHeadText}`}>Testimonials.</h1>
      </motion.div>
      <div className={`${styles.paddingX} mt-10 flex flex-wrap gap-7  flex-row pb-13`}>
          {
            testimonials.map((feed,i)=>(<TestmonaiCard key={i} testimonial={feed} index={i}/>
              ) 
            )
          }
      </div>
      </div>
    </div>

  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper({Component:Feedbacks,idName:"feedback"})