import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Portfolio2 from './Portfolio2';
import "./PortfolioDivider.css"
import game from "../Images/gamedeveloper.png"
import web from "../Images/webdeveloper.png"

const PortfolioDivider = () => {
    const [select , setSelect] =useState("web");
    function selectFunction(select){
        if(select ==="web"){
            setSelect("web");
        }
       if(select==="game"){
        setSelect("game");
       }
        console.log("la division es de ",select);
      }
    return (
        <div class="dividerAdmin">
            <div class="dividerAdminButton">
            <button onClick={() =>  selectFunction(setSelect("web"))}><img src={web} alt=""/></button>
            <button onClick={() =>  selectFunction(setSelect("game"))}><img src={game} alt=""/></button>
            </div>
            {select==="web" ? ( <Portfolio/>) : ( <Portfolio2/>)}
           
            
            
         
        </div>
    );
};


export default PortfolioDivider;