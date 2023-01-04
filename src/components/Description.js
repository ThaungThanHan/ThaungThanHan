import React,{useEffect} from "react";
import "./styles/description.scss";
import "./styles/responsive.scss"
import Thaung from "../assets/images/thaung.jpg"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Description = () => {
    const {ref,inView} = useInView();
    const DescAnimation = useAnimation()
    useEffect(()=>{
        if(inView){
            DescAnimation.start({
                opacity:1,x:0,transition:{duration:0.5,delay:0.5,ease:"easeInOut"}
            })
        }else{
            DescAnimation.start({
                opacity:0,x:-1000
            })
        }
    },[inView,DescAnimation])
    return(
        <motion.div  ref={ref} id="description" className="desc_container">
            <motion.img animate={DescAnimation} src={Thaung} className="my_pic" />
            <motion.p animate={DescAnimation} className="desc_text">
                As a hardworking and ambitious individual, I have been working remotely for startups and businesses which need their products
                to be developed with optimized code and extensive care.<br/><br/>
                The ability to tinker for long hours of coding and creative thinking has helped me stand out as a professional web artisan.
            </motion.p>
        </motion.div>
    )
}

export default Description;