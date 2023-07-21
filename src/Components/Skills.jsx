import React from 'react';
import react from "../Images/ReactJs.jpg";
import mql from  "../Images/Mysql.png"
import nodejs from "../Images/nodejs.png"
import unity from "../Images/unity.png"
import JavaScript from  "../Images/JavaScript.png"
import Css from "../Images/Css.png"
import Html from "../Images/Html.png"
import Github from "../Images/github.jpeg"
import discord from "../Images/discord.jpg"
import cSharp from "../Images/csharp.jpg"
import "../Components/Skills.css"
const Skills = () => {
    return (
        <div class="div"> 
        <div class="div-skills"> 
            <img src={react} alt=""/>
        <div class="div-skills-reactCombo">
            <img src={Css} alt=""/>    
            <img src={JavaScript} alt=""/>
            <img src={Html} alt=""/> 
         </div>
            <img src={nodejs} alt=""/>
        </div>
        <div class="div-skills-minority">
            <img src={Github} alt="" />
            <img src={discord} alt="" />
            <img src={unity} alt="" />
            <img src={mql} alt=""/>
            <img src={cSharp} alt="" />
        </div>
    </div>
    );
};

export default Skills;