import React from 'react';
import "./Portfolio2.css"
import Bandera from "../Images/Bandera.png"
import CamionQuemado from "../Images/CamionQuemado.png"
import GuardiasVolando from "../Images/Guardias volando.png"
import LanzaCohetesShader from "../Images/LanzaCohetesShader.png"
import GranadaSmoke from "../Images/GranadaSmoke.png"
import PointRadar from "../Images/POINT Zoom Radar3.png"
import Tankes from "../Images/Tankes.png"
import FuegoBarril from "../Images/FuegoBarril.png"
import Ruta from "../Images/Ruta.png"
import LanzaCohetes from "../Images/ConsigoLanzaCohetes.png"
import Landing1 from "../Images/Landing1.png"
import Landing2 from "../Images/Landing2.png"
import landing3 from "../Images/landing3.png"
import landing4 from "../Images/landing4.png"
import DisparosRuta2 from "../Images/DisparosRuta1.png"
import photon2D1 from "../Images/2PLAYERSGAME.png"
import photon2D2 from "../Images/2PLAYERSGAME2.png"
import photon2D3 from "../Images/2PLAYERSGAME3.png"
import photon2D4 from "../Images/2PLAYERSGAME4.png"
import photon2D5 from "../Images/2PLAYERSGAME5.png"
import photon2D6 from "../Images/2PLAYERSGAME6.png"
import photon2D7 from "../Images/2PLAYERSGAME7.png"
import photon2D8 from "../Images/2PLAYERSGAME8DEAD.png"

const Portfolio2 = () => {
    return (
        <div class="portfolio2">
         
            <div class="portfolio2__firstJob">
                <div class="portfolio2__firstJob__title">Zemaria Proyect Demo 
                <a class="portfolio2__firstJob__description">
                A 3d demo of action and technical espionage,
                 a Russian military invades a US power station.
                  It contains 3 levels on the entire map, 
                  it is programmed in C# with the unity engine,
                   it has a state machine (AI),
                    decision roulette and shaders</a>
                </div>
    <div class="portfolio2__fistJob_firstSlide-card">
                    <img src={Bandera} alt=""/>
                </div>
        
                <div class="portfolio2__firstJob_secondSlide-card">
                <img src={CamionQuemado} alt=""/>
                </div>
                <div class="portfolio2__fistJob_threeSlide-card">
                    <img src={GuardiasVolando} alt=""/>
                </div>
        
                <div class="portfolio2__firstJob_fourSlide-card">
                <img src={DisparosRuta2} alt=""/>
                </div>
                
            </div>
                       <div class="portfolio2__firstJob2">
                <div class="portfolio2__fistJob_firstSlide-card" style={{rotate: "0deg"}}>
                    <img src={LanzaCohetes} alt=""/>
                </div>
        
                <div class="portfolio2__firstJob_secondSlide-card" style={{rotate: "0deg",objectFit:"none"}}>
                <img src={Ruta} alt=""/>
                </div>
                <div class="portfolio2__fistJob_threeSlide-card" style={{rotate: "0deg"}}>
                    <img src={LanzaCohetesShader} alt=""/>
                </div>
        
                <div class="portfolio2__firstJob_fourSlide-card" style={{rotate: "0deg"}}>
                <img src={GranadaSmoke} alt=""/>
                </div>
                
            </div>
            <div class="Separador-3"></div>
            <div class="portfolio2__secondJob">
                <div class="portfolio2__secondJob__Secondtitle" style={{height:"20px",width:"230px"}}>Anymo Landing Proyect
                <a class="portfolio2__firstJob__description">
2d network game for 2 people online connected to a photon server,
 players must kill each other using the powers they find and attack each other with the fire they release
</a>
                </div>
                
                <div class="portfolio2__secondJob_firstSlide-card">
                    <img src={photon2D1} alt=""/>
                </div>
        
                <div class="portfolio2__secondJob_secondSlide-card">
                <img src={photon2D2} alt=""/>
                </div>
             {/*}   <div class="portfolio2__fistJob_threeSlide-card">
                    <img src={photon2D3} alt=""/>
    </div>*/}
        
                <div class="portfolio2__secondJob_fourSlide-card">
                <img src={photon2D4
                } alt=""/>
                </div>
            </div>
            <div class="portfolio2__secondJob2">
       
                
                <div class="portfolio2__secondJob_firstSlide-card">
                    <img src={photon2D5} alt=""/>
                </div>
        
                <div class="portfolio2__secondJob_secondSlide-card">
                <img src={photon2D7} alt=""/>
                </div>
             {/*}   <div class="portfolio2__fistJob_threeSlide-card">
                    <img src={photon2D3} alt=""/>
    </div>*/}
        
                <div class="portfolio2__secondJob_fourSlide-card">
                <img src={photon2D8
                } alt=""/>
                </div>
            </div>
            <div class="Separador-4"></div>
        
                    
            
  
            
        </div>
    );
};

export default Portfolio2;