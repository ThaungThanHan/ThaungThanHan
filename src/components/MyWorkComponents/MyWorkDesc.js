import React from "react";
import "../styles/MyWork.scss";
import {motion,AnimatePresence } from "framer-motion";

const MyWorkDesc = ({title,desc,image}) => {

    return(
        <div style={{display:"flex",flexDirection:"row"}}>
        <div>
            <div className="work_desc_container">
                <h3 className="work_desc_title">{title}</h3>
                <p className="work_desc_paragraph">
                    {desc}
                </p>
                <div className="work_desc_buttons">
                    <div className="work_desc_buttons_btn">
                        <p>View Demo</p>
                    </div>
                    <div className="work_desc_buttons_btn">
                        <p>View Walkthrough</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="work_image">
            <img className="work_image_img" src={image} />
        </div>
        </div>
    )
}

export default MyWorkDesc;