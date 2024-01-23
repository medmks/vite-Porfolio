import {ChangeEventHandler, useRef,useState} from 'react'
import {motion} from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import EarthCanvas from './canvas/Earth'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utility/motion'
// eslint-disable-next-line react-refresh/only-export-components
const Contact = () => {
  type formT={
    name?:string,
    email?:string,
    msg?:string
  }
  const formRef=useRef<HTMLFormElement | null>(null)
  const [form ,setform]=useState<formT>()
  const [loading ,setloading ]=useState<boolean>()

  const HandelChange:ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement  >=(event)=>{
        const {name,value}=event.target
          setform({...form,[name]:value})
           
  }     


  const HandelSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();  
    if (!form?.email || !form.name || !form?.msg){
      alert("please fill all the form")
      return ;
    }
    setloading(true);
    emailjs
    .send(
        "service_y8t3m9w","template_op9nq7k",
      {
        from_name:form?.name,
        to_name:"Mohamed",
         from_email:form?.email,
         to_email:"mguernaoui03@Gmail.com",
         message:form?.msg
      },"nz71wgxeTImlqOQRm")
      .then(()=>{
        setloading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setform({
          name: "",
          email: "",
          msg: "",
        });
      },
      (error) => {
        setloading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
};

  return (
    <div className='xl:mt-12 xl:flex-row  flex-col-reverse flex gab-10 overflow-hidden '>
      <motion.div 
      variants={slideIn("left","tween",0.2,1)}
      className='flex-[0.75]  bg-fiverey backdrop-blur-sm  p-8 rounded-2xl' >
      <p className={`${styles.sectionSubText}`} >Get in touch </p>
      <h1 className={`${styles.sectionHeadText}`}>Contact.</h1>
      <form ref={formRef} className='mt-12 flex flex-col gab-8' onSubmit={HandelSubmit}  >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 '>your name</span>
          <input 
          type='text'
          name='name'
          value={form?.name}
          onChange={HandelChange}
          placeholder="Whats's your name?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary border border-gray-700 text-white rounded-lg outline-none   font-medium   '
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 '>your email</span>
          <input 
          type='text'
          name='email'
          value={form?.email}
          onChange={HandelChange}
          placeholder="Whats's your email?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700  font-medium   '
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 '>your Message</span>
          <textarea 
          rows={7}
          name='msg'
          value={form?.msg}
          onChange={HandelChange}
          placeholder="Whats's your Message?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-gray-700  font-medium   '
          />
        </label>
        <button  type='submit' className='bg-tertiary  py-3 px-8 outline-none w-fit mt-12  shadow-primary font-bold rounded-2xl shadow-md  '>
           {(loading ? 'sending': 'send')} 
        </button>
      </form>
      </motion.div>
      <motion.div
      variants={slideIn("right","tween",0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] '
      >
        <EarthCanvas/>
      </motion.div>
    </div>

  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper({Component:Contact,idName:"contact"})