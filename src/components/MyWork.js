import React, {useEffect, useState} from "react";
import "./styles/MyWork.scss";
import {motion, AnimatePresence} from "framer-motion";
import MyWorkDesc from "./MyWorkComponents/MyWorkDesc";
import MyWorkProjects from "./MyWorkComponents/MyWorkProjects";
import VotingApp from "../assets/images/projects/votingapp_display.png"
import WatchTheCoins from "../assets/images/watchthecoins.png";
import MovieDB from "../assets/images/projects/moviedb_display.png"
const MyWork = () => {
    const [currentProject,setCurrentProject] = useState("Voting App");
    const projectsMotion = {
            visible: {opacity:1,x:0,transition:{
                duration:1,delay:0.5,ease:"easeInOut"
            }},
            hidden: {opacity:0,x:50}
    }    
    const descMotion = {
        visible: { opacity: 1,x:0,transition:{
            duration:1.5,ease:"easeInOut"
        }},
        hidden: {opacity: 0},exit:{opacity: 0,x:-300,transition:{
            duration:0.5,ease:"easeOut"
        }}
    }
    return(
        <div className="MyWork_container">
        {/* {currentProject == "Pedagogy Project" &&
        <MyWorkDesc title={currentProject} image={WatchTheCoins}
        desc="If you want the line breaks to occur at the same point for all lines, you can use the CSS property overflow-wrap: break-word; instead of word-wrap: break-word;.
        The overflow-wrap property ensures that the line breaks happen at the same point, maintaining consistent wrapping behavior.
        Here's an updated example:" 
        /> } */}

        {/* VOTING APP */}
        <AnimatePresence mode="popLayout">
        {currentProject == "Voting App" &&
          <motion.div
            key="Voting App"
            variants={descMotion}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            transition={{ duration:.3 }}
          >
        <MyWorkDesc title={currentProject} image={VotingApp}
        demoLink="https://hanvotingapp.vercel.app/" githubLink="https://github.com/ThaungThanHan/votingserver"
        desc="Demo web app written in MERN stack for training purpose. 
        This app features user authorization, real-time operations as well as fool-proof voting mechanism which allows users to create a private voting rooms and invite people to cast an unique vote.
        This project serves as a demonstration for my abilities as a full-stack JavaScript developer." 
        /> </motion.div>
        }</AnimatePresence>

        {/* MOVIEDB */}
        <AnimatePresence mode="popLayout">
        {currentProject == "MovieDB" &&
            <motion.div
            key="movieDB"
            variants={descMotion}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            >
        <MyWorkDesc title={currentProject} image={MovieDB}
        demoLink="https://thaungthanhan.github.io/moviedb/" githubLink="https://github.com/ThaungThanHan/moviedb"
        desc="This project brings back fond memories for me because it was my very first demo application in ReactJS that used the MovieDB api. 
        I built this project to showcase my skills in API integration in ReactJS applications. " 
        /></motion.div> }
        </AnimatePresence>
        {/* {currentProject == "WatchTheCoins" &&
        <MyWorkDesc title={currentProject} image={WatchTheCoins}
        desc="If you want the line breaks to occur at the same point for all lines, you can use the CSS property overflow-wrap: break-word; instead of word-wrap: break-word;.
        The overflow-wrap property ensures that the line breaks happen at the same point, maintaining consistent wrapping behavior.
        Here's an updated example:" 
        /> } */}

        <motion.div initial="hidden" animate="visible" transition={{ duration: 0.5 }}
        variants={projectsMotion} className="work_select_container">
                <h3 className="work_select_title">PROJECTS SO FAR</h3>
                <div className="work_select_box">
                    {/* <MyWorkProjects title="Pedagogy Project" setCurrentProject={setCurrentProject} /> */}
                    <MyWorkProjects title="Voting App" setCurrentProject={setCurrentProject}/>
                    <MyWorkProjects title="MovieDB" setCurrentProject={setCurrentProject}/>
                    {/* <MyWorkProjects title="WatchTheCoins" setCurrentProject={setCurrentProject}/> */}
                </div>
        </motion.div>
        </div>
    )
}

export default MyWork;