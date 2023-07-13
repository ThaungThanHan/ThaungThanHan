import React,{useEffect} from "react";
import "./styles/description.scss";
import "./styles/responsive.scss"
import Thaung from "../assets/images/thaung.jpg"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {Link, animateScroll as scroll} from "react-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

const Description = () => {
    const {ref,inView} = useInView({
        margin: "0px 100px -50px 0px"
      })
    const DescAnimation = useAnimation()
    useEffect(()=>{
        console.log(inView);
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
        <motion.div initial="visible" id="description" className="desc_container">
            <motion.div initial="visible" className="desc_items_container">
                <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.5 }} variants={{
                visible: {            opacity:1,x:0,transition:{
                    duration:1,delay:0.5,ease:"easeInOut"
                }},
                hidden: {opacity:0,x:-100}
                }} 
                  className="desc_text">
                    <h3 className="desc_title">A little bit<br/>about me</h3>
                    <p className="desc_paragraph">
                    When I say "chilling", I mean about building fun stuffs with code. That's what I believe in, "doing what we love is just comfortable and cozy".<br/><br/>               
                    Javascript is my go-to language with which I am comfortable buidling different kinds of web applications.
                    Using tools like ReactJS and NodeJS, I can develop both the aesthetics and skeleton of web applications. 
                    </p>
                </motion.p>
                <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.5 }} variants={{
                visible: {opacity:1,x:0,transition:{
                    duration:1,delay:0.5,ease:"easeInOut"
                }},
                hidden: {opacity:0,x:100}
                }} 
                 src={Thaung} className="my_pic" />
            </motion.div>
            <Link   
                activeClass="active"
                to="TechStacks"
                spy={true}
                smooth={true}
                offset={300}
                duration={200}
                >
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
                    transition={{ duration: 0.5 }} variants={{
                    visible: {opacity:1,y:0,transition:{
                        duration:0.5,delay:1,ease:"easeInOut"
                    }},
                    hidden: {opacity:0,y:100}
                    }} style={{marginTop:"4rem"}} className="Btn_Gettoknow">
                        <p className="Btn_Gettoknow_text">Check out tools</p>
                        <AiOutlineArrowRight className="right_arrow" />
                        <AiOutlineArrowDown className="down_arrow" />
                    </motion.div>
            </Link>
        </motion.div>

    )
}

export default Description;