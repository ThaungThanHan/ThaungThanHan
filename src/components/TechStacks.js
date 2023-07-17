import React from "react";
import "./styles/TechStacks.scss"
import {motion} from "framer-motion"
import reactrocket from "../assets/images/rockets/reactrocket.png"
import noderocket from "../assets/images/rockets/noderocket.png"
import mongodbrocket from "../assets/images/rockets/mongodbrocket.png"
import expressrocket from "../assets/images/rockets/expressrocket.png"
import htmlrocket from "../assets/images/rockets/htmlrocket.png"
import sassrocket from "../assets/images/rockets/sassrocket.png"
import jsrocket from "../assets/images/rockets/jsrocket.png"

const TechStacks = () => {
    return(
        <div id="TechStacks" className="TechStacks_container">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ duration: 0.5 }} variants={{
                visible: {opacity:1,transition:{delay:0.5}},
                hidden: {opacity:0}
                }} 
            className="title">TOOLS</motion.h2>

            {/* REACT */}
            <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.5 }} variants={{
                visible: {opacity:1,x:100,y:-100,transition:{
                    duration:1,delay:0.5,ease:"easeInOut"
                }},
                hidden: {opacity:0,x:-50,y:-50}
                }}
                 src={reactrocket} style={{position:"absolute",marginLeft:"-60rem",marginBottom:"-50rem"}} 
                 className="rocket_pic" />

            {/* NODE */}
            <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.5 }} variants={{
                visible: {opacity:1,x:100,y:-100,transition:{
                    duration:1,delay:0.5,ease:"easeInOut"
                }},
                hidden: {opacity:0,x:-50,y:-50}
                }} 
                 src={noderocket} style={{position:"absolute",marginLeft:"-30rem",marginBottom:"-35rem"}} 
                 className="rocket_pic" />

            {/* EXPRESS */}
            <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.5 }} variants={{
                visible: {opacity:1,x:100,y:-100,transition:{
                    duration:1,delay:0.5,ease:"easeInOut"
                }},
                hidden: {opacity:0,x:-50,y:-50}
                }} 
                 src={expressrocket} style={{position:"absolute",marginLeft:"-15rem",marginBottom:"-50rem"}} 
                 className="rocket_pic" />
            {/* MONGODB */}
            <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.5 }} variants={{
                visible: {opacity:1,x:100,y:-100,transition:{
                    duration:1,delay:0.5,ease:"easeInOut"
                }},
                hidden: {opacity:0,x:-50,y:-50}
                }} 
                 src={mongodbrocket} style={{position:"absolute",marginLeft:"12rem",marginBottom:"-50rem"}} 
                 className="rocket_pic" />
            {/* HTML */}
            <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.5 }} variants={{
                visible: {opacity:1,x:100,y:-100,transition:{
                    duration:1,delay:0.5,ease:"easeInOut"
                }},
                hidden: {opacity:0,x:-50,y:-50}
                }} 
                 src={htmlrocket} style={{position:"absolute",marginLeft:"5rem",marginBottom:"-30rem"}} 
                 className="rocket_pic" />
            {/* SASS */}
            <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.5 }} variants={{
                visible: {opacity:1,x:100,y:-100,transition:{
                    duration:1,delay:0.5,ease:"easeInOut"
                }},
                hidden: {opacity:0,x:-50,y:-50}
                }} 
                 src={sassrocket} style={{position:"absolute",marginLeft:"35rem",marginBottom:"-30rem"}} 
                 className="rocket_pic" />
            {/* JS */}
            <motion.img initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ duration: 0.5 }} variants={{
                visible: {opacity:1,x:100,y:-100,transition:{
                    duration:1,delay:0.5,ease:"easeInOut"
                }},
                hidden: {opacity:0,x:-50,y:-50}
                }} 
                 src={jsrocket} style={{position:"absolute",marginLeft:"-60rem",marginBottom:"-30rem"}} 
                 className="rocket_pic" />
        </div>
    )
}

export default TechStacks;