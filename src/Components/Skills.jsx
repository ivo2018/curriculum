import React from 'react';
import react from "../Images/ReactJs.jpg";
import mql from  "../Images/Mysql.png"
import nodejs from "../Images/nodejs.png"
import unity from "../Images/unity.png"
import JavaScript from  "../Images/JavaScript.png"
import Css from "../Images/Css.png"
import Hmtl from "../Images/Html.png"
import Github from "../Images/github.jpeg"
import discord from "../Images/discord.jpg"
import cSharp from "../Images/csharp.jpg"
import "../Components/Skills.css"
const Skills = () => {
    return (
        <div class="div-skills">
             <div class="midlevel">
            <div class="div-skills_react">
            <img src={react} alt=""/>
            </div>
            <div class="div-skills_react3">
            <img src={nodejs} alt=""/>
            </div>
            <div class="div-skills_react-child">
            <img src={JavaScript} alt=""/>
            <img src={Css} alt=""/> 
            <img src={Hmtl} alt=""/>
            </div>
            </div>
            <div class="div-skills_minority">
            <img src={Github} alt="" style={{position:"relative",bottom:"12.5em"}}/>
            <img src={discord} alt="" style={{position:"relative",bottom:"3em"}}/>
            <img src={unity} alt="" style={{position:"relative",bottom:"3em"}}/>
            <img src={mql} alt="" style={{position:"relative",left:"12.5em",bottom:"12.5em"}}/>
            <img src={cSharp} alt="" style={{position:"relative",right:"12.5em",bottom:"3em"}}/>

            </div>
         
       
        </div>
    );
};

export default Skills;