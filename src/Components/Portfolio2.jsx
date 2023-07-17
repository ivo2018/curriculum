import React from 'react';
import "./Portfolio2.css"
import Bandera from "../Images/Bandera.png"
import CamionQuemado from "../Images/CamionQuemado.png"
import GuardiasVolando from "../Images/Guardias volando.png"
import LanzaCohetesShader from "../Images/LanzaCohetesShader.png"
import GranadaSmoke from "../Images/GranadaSmoke.png"

import Ruta from "../Images/Ruta.png"
import LanzaCohetes from "../Images/ConsigoLanzaCohetes.png"

import DisparosRuta2 from "../Images/DisparosRuta1.png"
import photon2D1 from "../Images/2PLAYERSGAME.png"
import photon2D2 from "../Images/2PLAYERSGAME2.png"
import photon2D3 from "../Images/2PLAYERSGAME3.png"
import photon2D4 from "../Images/2PLAYERSGAME4.png"
import photon2D5 from "../Images/2PLAYERSGAME5.png"
import photon2D6 from "../Images/2PLAYERSGAME6.png"
import photon2D7 from "../Images/2PLAYERSGAME7.png"
import photon2D8 from "../Images/2PLAYERSGAME8DEAD.png"
import photon2D9 from "../Images/3PLAYERS.png"
import photon2D10  from "../Images/3PLAYERS2.png"
import photon2D11 from "../Images/4 PLAYERS TEAM.png"
import photon2D12 from "../Images/4PLAYERSTEAM2.png"
import photon2D13 from "../Images/4PLAYERSTEAM3.png"

const Portfolio2 = () => {
    return (
    <div class="portfolio2">
    
         <div class="portfolio2__firstJob">
                <div class="portfolio2__firstJob-title">Zemaria Proyect Demo 
                     <a href="/#"class="portfolio2__firstJob-description">
                          A 3d demo of action and technical espionage,
                          a Russian military invades a US power station.
                          It contains 3 levels on the entire map, 
                           it is programmed in C# with the unity engine,
                           it has a state machine (AI),
                          decision roulette and shaders</a>
                </div>
                         <div class="portfolio2__fistJob-firstSlide">
                               <img src={Bandera} alt=""/>
                          </div>
        
                       <div class="portfolio2__firstJob-secondSlide">
                                 <img src={CamionQuemado} alt=""/>
                          </div>
                         <div class="portfolio2__fistJob-threeSlide">
                               <img src={GuardiasVolando} alt=""/>
                          </div>
        
                          <div class="portfolio2__firstJob-fourSlide">
                                 <img src={DisparosRuta2} alt=""/>
                         </div>
                
            </div>
      
        <div class="portfolio2__firstJob-2">
                        <div class="portfolio2__fistJob-firstSlide" >
                           <img src={LanzaCohetes} alt=""/>
                           </div>
                        <div class="portfolio2__firstJob-secondSlide" >
                          <img src={Ruta} alt=""/>
                        </div>
                       <div class="portfolio2__fistJob-threeSlide" >
                        <img src={LanzaCohetesShader} alt=""/>
                          </div>
                         <div class="portfolio2__firstJob-fourSlide" >
                           <img src={GranadaSmoke} alt=""/>
                         </div> 
            </div>    
     
                   <div class="Separador-3"></div> 
              
                   <div class="portfolio2__firstJob-3">
                <div class="portfolio2__firstJob2-title">2D Photon Red Proyect
                     <a href="/#"class="portfolio2__firstJob2-description">
                        2d game for 2 people in the photon network, 
                          the players must fight until one dies,
                             along the way they will find elements that they can use in their favor</a>
                           </div>
                         <div class="portfolio2__fistJob-firstSlide" style={{transform:"rotate(0deg)"}} >
                               <img src={photon2D1} alt="" />
                          </div>
        
                       <div class="portfolio2__firstJob-secondSlide" style={{transform:"rotate(0deg)"}}>
                                 <img src={photon2D2} alt="" />
                          </div>
                         <div class="portfolio2__fistJob-threeSlide" style={{transform:"rotate(0deg)"}}>
                               <img src={photon2D3} alt=""/>
                          </div>
        
                          <div class="portfolio2__firstJob-fourSlide" style={{transform:"rotate(0deg)"}}>
                                 <img src={photon2D4} alt=""/>
                         </div>
                
            </div>
        <div class="portfolio2__firstJob-4">
                        <div class="portfolio2__fistJob-firstSlide" >
                           <img src={photon2D5} alt=""  />
                           </div>
                        <div class="portfolio2__firstJob-secondSlide" >
                          <img src={photon2D6} alt=""/>
                        </div>
                       <div class="portfolio2__fistJob-threeSlide" >
                        <img src={photon2D7} alt=""/>
                          </div>
                         <div class="portfolio2__firstJob-fourSlide" >
                           <img src={photon2D8} alt=""/>
                         </div> 
          </div>    
          <div class="Separador-4"></div> 
              
              <div class="portfolio2__firstJob-5">
           <div class="portfolio2__firstJob3-title">2D Photon Red Proyect  
                <a href="/#"class="portfolio2__firstJob3-description">
                 
                  2d game for 4 people connected in the photon network, 
                    the players must work as a team to win by killing all the enemies, 
                      to do so they depend on the others to be able to move to the next places on the map.</a>
           </div>
                    <div class="portfolio2__fistJob-firstSlide" style={{transform:"rotate(0deg)"}}>
                          <img src={photon2D9} alt=""  />
                     </div>
   
                  <div class="portfolio2__firstJob-secondSlide" style={{transform:"rotate(0deg)"}}>
                            <img src={photon2D10} alt=""/>
                     </div>
                    <div class="portfolio2__fistJob-threeSlide" style={{transform:"rotate(0deg)"}}>
                          <img src={photon2D11} alt=""/>
                     </div>
   
                     <div class="portfolio2__firstJob-fourSlide" style={{transform:"rotate(0deg)"}}>
                            <img src={photon2D12} alt=""/>
                    </div>
           
       </div>
   <div class="portfolio2__firstJob-6">
                   <div class="portfolio2__fistJob-firstSlide" >
                      <img src={photon2D13} alt=""/>
                      </div>
                   <div class="portfolio2__firstJob-secondSlide" >
                     <img src={photon2D9} alt=""/>
                   </div>
                  <div class="portfolio2__fistJob-threeSlide" >
                   <img src={photon2D10} alt=""/>
                     </div>
                    <div class="portfolio2__firstJob-fourSlide" >
                      <img src={photon2D11} alt=""/>
                    </div> 
     </div>    
        </div>
    );
};

export default Portfolio2;