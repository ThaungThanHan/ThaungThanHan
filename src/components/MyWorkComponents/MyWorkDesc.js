import React from "react";
import "../styles/MyWork.scss";
import {motion,AnimatePresence } from "framer-motion";

const MyWorkDesc = ({title,desc,image,demoLink,githubLink}) => {

    return(
        <div className="work_desc_img_container">
        <div>
            <div className="work_desc_container">
                <h3 className="work_desc_title">{title}</h3>
                <p className="work_desc_paragraph">
                    {desc}
                </p>
                <div className="work_desc_buttons">
                    <a style={{textDecoration:"none"}}
                     target="_blank" href={demoLink}>
                    <div className="work_desc_buttons_btn">
                        <p>View Demo</p>
                    </div>
                    </a>
                    <a style={{textDecoration:"none"}}
                     target="_blank" href={githubLink}>
                    <div className="work_desc_buttons_btn">
                        <p>View Repository</p>
                    </div>
                    </a>
                    {/* <div className="work_desc_buttons_btn">
                        <p>View Walkthrough</p>
                    </div> */}
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