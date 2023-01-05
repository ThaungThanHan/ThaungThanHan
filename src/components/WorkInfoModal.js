import React,{useState} from "react";
import Modal from 'react-modal';
import ReactPlayer from 'react-player'
import coinVideo from "../assets/videos/cropped-watchthecoinsdemo.mp4"
import "./styles/WorkInfoModal.scss";
const WorkInfoModal = ({isModalOpen,onPressClose,images}) => {
    const customStyles = {
        content:{
            maxWidth:"50%",minHeight:"10%",maxHeight:"70%",margin:"0 auto",paddingBottom:"1rem",display:'flex',
            marginTop:"-1rem"
    }
}
    const [videodemoenabled,setVideoDemoEnabled] = useState({
        watchthecoins:false
    })
    return(
        <div>
            <Modal
            isOpen={isModalOpen.lattwae} style={customStyles}
            >
                <div className="content-container">
                    <img className="content-img" src={images.lattwae} />
                    <p className="content-work">
                        Lattwae space is an educational space with classes in Computer Science, Engineering, Arts and Maths. Their main purpose is to
                        give affordable education to students in Myanmar with skills necessary in 21st century.<br/> Coding, web development, AI, ML, Data Science 
                        classes are also available with LIVE coding sessions and practical assignments.
                    </p>
                    <h3 className="what_i_did">What I did</h3>
                    <ul>
                        <li className="list-item">Instructed ReactJS for students to grasp the fundamentals and nature of frontend web development.</li>
                        <li className="list-item">Provide LIVE coding sessions and practical assignments to keep track of their learning process.</li>
                        <li className="list-item">Provide consultation for students for their career and learning path.</li>
                    </ul>
                    <div onClick={()=>onPressClose("lattwae")} className="modal_button">
                        <p className="modal_button_text">Close</p>
                    </div>
                </div>
            </Modal>
            <Modal 
            isOpen={isModalOpen.pedagogy} style={customStyles}
            >
                <div className="content-container">
                    <img className="content-img" src={images.pedagogy} />
                    <p className="content-work">
                        Pedagogy is one of the projects by a singapore-based company. With Pedagogy, teachers will be able to tackle their daily school 
                        tasks with all in one solution.<br/> It provides features such as tracking classrooms, LIVE video classrooms, whiteboards, attendance, parent-teacher-students 
                        chat, schedules, academic calendars and leave/proxy requests.
                    </p>
                    <h3 className="what_i_did">What I did</h3>
                    <ul>
                        <li className="list-item">Develop a mobile application for teachers using React Native and other libraries and applications along the way.</li>
                        <li className="list-item">Communicate with the design and backend teams for optimal solutions and to develop as per design and flow.</li>
                        <li className="list-item">Organize the code logically to make the components the most reusable and easy to use.</li>
                    </ul>
                    <div onClick={()=>onPressClose("pedagogy")} className="modal_button">
                        <p className="modal_button_text">Close</p>
                    </div>
                </div>
            </Modal>
            <Modal 
            isOpen={isModalOpen.moviedb} style={customStyles}
            >
                <div className="content-container">
                    <img className="content-img" src={images.moviedb} />
                    <p className="content-work">
                        The Movie Database (TMDB) is a community built movie and TV database. They offer free-to-use API for people interested in using their movie, shows or 
                        images and data in our application. It is a system they provide for us to programmatically fetch and use their data and images.
                    </p>
                    <h3 className="what_i_did">What I did</h3>
                    <ul>
                        <li className="list-item">Develop a website which can provide information regarding people's favourite movies and shows using TMDB api.</li>
                        <li className="list-item">Created own website design using Figma and developed as per design.</li>
                    </ul>
                    <div className="buttons_container">
                        <div onClick={()=>onPressClose("moviedb")} className="modal_button">
                            <p className="modal_button_text"><a className="work_links" href="https://thaungthanhan.github.io/moviedb/" target="_blank" >View Demo</a></p>
                        </div>
                        <div onClick={()=>onPressClose("moviedb")} className="modal_button">
                            <p className="modal_button_text">Close</p>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal 
            isOpen={isModalOpen.watchthecoins} style={customStyles}
            >
                <div className="content-container">
                    <img className="content-img" src={images.watchthecoins} />
                    {!videodemoenabled.watchthecoins ?
                    <>
                    <p className="content-work">
                        CoinLore provides a free cryptocurrency API that doesn't need api keys and is available publicly.<br></br>
                        As an independent data aggregator, it includes more than 10731 coins, 400+ exchanges.<br/>
                        You can check out the full code in <a target="_blank" className="modal_hyperlink" href="https://github.com/ThaungThanHan/watchthecoins">this repository.</a>
                    </p>
                    <h3 className="what_i_did">What I did</h3>
                    <ul>
                        <li className="list-item">Build a react-native app where users can track famous coins such as BTC, ETH, SOL, BNB and USDT using CoinLore API.</li>
                        <li className="list-item">The app designed to showcase API integration and redux methods.</li>
                    </ul></> :
                    <ReactPlayer style={{marginBottom:"2rem",marginTop:"1rem"}} controls="true" width="100%" height="50%" url={coinVideo} /> }
                    <div className="buttons_container">
                       {!videodemoenabled.watchthecoins ?
                        <div onClick={()=>setVideoDemoEnabled({...videodemoenabled,watchthecoins:true})} className="modal_button">
                        <p className="modal_button_text">View Demo</p>
                        </div>
                        :
                        <div onClick={()=>setVideoDemoEnabled({...videodemoenabled,watchthecoins:false})} className="modal_button">
                        <p className="modal_button_text">Go Back</p>
                        </div>
                        }

                        <div onClick={()=>onPressClose("watchthecoins")} className="modal_button">
                            <p className="modal_button_text">Close</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default WorkInfoModal