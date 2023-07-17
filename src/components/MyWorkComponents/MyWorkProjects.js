import React from "react";
import "../styles/MyWork.scss";

const MyWorkProjects = ({title,setCurrentProject}) => {
    return(
        <div
        onClick={()=>setCurrentProject(title)} className="work_select_text">
            <p className="work_select_projectTitle">{title}</p>
        </div>
    )
}

export default MyWorkProjects;