import React, {useState} from "react";
import "./styles/hero.scss"
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import hanlogo from "../assets/images/hanlogo.png";
import {Link, animateScroll as scroll} from "react-scroll";
import Modal from 'react-modal';

const HeroPage = ({isModalOpen,setParams,params,setIsModalOpen}) => {
    const customStyles = {
        content:{
            width:"20rem",height:"20rem",margin:"0 auto",marginTop:"5rem"
        }
    }
    return( 
        <div id="heropage" className="Hero_Container">
            <div className="Hero_Header">
               <img src={hanlogo} className="logo"/>
                <div onClick={()=>setIsModalOpen(true)} className="Hero_sayHi">
                    <p className="Hero_sayHi_text">Say Hi</p>
                </div>
            </div>
            <div className="Hero_Body">
                <div className="Hero_Body_first">
                    <p className="Hero_Body_text">Hello, I am<p className="Hero_Body_Name">&nbsp; Thaung Than Han</p></p>
                </div>
                <p className="Hero_Body_secondtext">I'm a frontend web developer</p>
                <Link   
                activeClass="active"
                to="description"
                spy={true}
                smooth={true}
                offset={120}
                duration={500}
                >
                    <div className="Btn_Gettoknow">
                        <p className="Btn_Gettoknow_text">Get to know me</p>
                        <AiOutlineArrowRight className="right_arrow" />
                        <AiOutlineArrowDown className="down_arrow" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HeroPage;