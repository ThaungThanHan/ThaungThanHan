import React,{useState,useEffect} from "react";
import "./styles/WorkShowcase.scss"
import lattwae from "../assets/images/lattwae.png"
import pedagogy from "../assets/images/pedagogy.png"
import moviedb from "../assets/images/moviedb.png"
import watchthecoins from "../assets/images/watchthecoins.png"
import WorksCards from "./WorksCards";
import WorkInfoModal from "./WorkInfoModal";
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const WorkShowcase = () => {
    const images = {lattwae:lattwae,pedagogy:pedagogy,moviedb:moviedb,watchthecoins:watchthecoins};
    const [isModalOpen,setIsModalOpen] = useState({
        lattwae:false,
        pedagogy:false
    })
    const onPressWorkCard = (field) => {
        setIsModalOpen({...isModalOpen,[`${field}`]:true})
    }
    const onPressClose = (field) => {
        setIsModalOpen({...isModalOpen,[`${field}`]:false})
    }
    const {ref,inView} = useInView();
    const WorkShowcaseAnimation = useAnimation()
    useEffect(()=>{
        if(inView){
            WorkShowcaseAnimation.start({
                opacity:1,x:0,transition:{duration:0.5,delay:0.5,ease:"easeIn"}
            })
        }else{
            WorkShowcaseAnimation.start({
                opacity:0,x:-1000
            })
        }
    },[inView])
    return(
        <div ref={ref} className="workshowcase_container">
            <div className="works_container">
                <motion.h3 animate={WorkShowcaseAnimation} className="works_container_title">My Recent Work</motion.h3>
                <motion.p animate={WorkShowcaseAnimation} className="works_container_subtitle">Here are the projects and jobs I have came across.</motion.p>
                <motion.div animate={WorkShowcaseAnimation} className="works">
                    <WorksCards onPressWorkCard={onPressWorkCard} press="lattwae" 
                    image={lattwae} title="Instructed a ReactJS beginner class using LIVE coding." />
                    <WorksCards onPressWorkCard={onPressWorkCard} image={pedagogy} press="pedagogy" 
                    title="Worked on a mobile application for school service using react native and reactjs." />
                    <WorksCards onPressWorkCard={onPressWorkCard} image={moviedb} press="moviedb" 
                    title="Movie database website using moviedb API and Reactjs" />
                    <WorksCards onPressWorkCard={onPressWorkCard} image={watchthecoins} press="watchthecoins" 
                    title="Cryptocurrency tracking app written in React Native" />
                </motion.div>
            </div>
            <WorkInfoModal onPressClose={onPressClose} isModalOpen={isModalOpen} images={images} />
        </div>
    )
}

export default WorkShowcase;