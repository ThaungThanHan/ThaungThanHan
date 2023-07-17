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
        desc="If you want the line breaks to occur at the same point for all lines, you can use the CSS property overflow-wrap: break-word; instead of word-wrap: break-word;.
        The overflow-wrap property ensures that the line breaks happen at the same point, maintaining consistent wrapping behavior.
        Here's an updated example:" 
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
        desc="If you want the line breaks to occur at the same point for all lines, you can use the CSS property overflow-wrap: break-word; instead of word-wrap: break-word;.
        The overflow-wrap property ensures that the line breaks happen at the same point, maintaining consistent wrapping behavior.
        Here's an updated example:" 
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