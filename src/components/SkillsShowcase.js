import React,{useEffect} from "react";
import "./styles/SkillsShowcase.scss"
import HTML from "../assets/images/html5.png"
import css from "../assets/images/css.png"
import js from "../assets/images/js.png"
import jquery from "../assets/images/jquery.png"
import php from "../assets/images/php.png"
import sass from "../assets/images/sass.png"
import sql from "../assets/images/sql.png"
import react from "../assets/images/react.png"
import reactnative from "../assets/images/reactnative.png"
import laravel from "../assets/images/laravel.png"
import firebase from "../assets/images/firebase.png"
import docker from "../assets/images/docker.png"
import design from "../assets/images/design.png"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import SkillsCards from "./SkillsCards";
const SkillsShowcase = () => {
    const {ref,inView} = useInView();
    const SkillShowcaseAnimation = useAnimation()
    useEffect(()=>{
        if(inView){
            SkillShowcaseAnimation.start({
                opacity:1,x:0,transition:{duration:0.5,delay:0.5,ease:"easeInOut"}
            })
        }else{
            SkillShowcaseAnimation.start({
                opacity:0,x:-1000
            })
        }
    },[inView])
    return(
        <motion.div ref={ref}className="showcase_container">
            <motion.h3 animate={SkillShowcaseAnimation} className="showcase_container_title">My skills</motion.h3>
            <motion.div animate={SkillShowcaseAnimation} className="showcase_grid">
                <div className="skill_item">
                    <p className="skill_item_title">Programming Languages</p>
                    <div className="skill_item_skills">
                        <SkillsCards image={HTML} text="HTML"/>
                        <SkillsCards image={css} text="CSS"/>
                        <SkillsCards image={js} text="Javascript"/>
                        <SkillsCards image={sass} text="SASS"/>
                        <SkillsCards image={jquery} text="Jquery"/>
                        <SkillsCards image={php} text="PHP"/>
                        <SkillsCards image={sql} text="SQL" />
                    </div>
                </div>
                <div className="skill_item">
                    <p className="skill_item_title">Tools</p>
                    <div className="skill_item_skills">
                        <SkillsCards image={react} text="React"/>
                        <SkillsCards image={reactnative} text="ReactNative"/>
                        <SkillsCards image={laravel} text="Laravel"/>
                        <SkillsCards image={firebase} text="Firebase"/>
                        <SkillsCards image={design} text="Adobe XD"/>
                        <SkillsCards image={docker} text="Docker"/>
                    </div>
                </div>
                <div className="skill_item_right">
                    <div className="skill_item_right_rightcards">
                        <p className="skill_item_title">Languages I speak</p>
                        <div className="skill_item_skills">
                        <SkillsCards lngtext="EN"text="English"/>
                        <SkillsCards lngtext="MM" text="Myanmar"/>
                        </div>
                    </div>
                    <div className="skill_item_right_rightcards">
                        <p className="skill_item_title">Job Experience</p>
                        <div className="skill_item_skills">
                        <SkillsCards lngtext="1 year" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default SkillsShowcase