import React from "react";
import "./styles/SkillsCards.scss"
import "./styles/responsive.scss"
const SkillsCards = ({lngtext,image,text}) =>{
    console.log(text)
    return(
        <div className="skill_item_skills_imgcontainer">
            {lngtext ? <h1 className="skill_item_skills_imgcontainer_text">{lngtext}</h1> : null }
            {image ? <img src={image} className="skill_item_skills_imgcontainer_image" /> : null }
            <p className="skill_item_skills_imgcontainer_imagetitle">{text}</p>
        </div>
    )
}

export default SkillsCards;