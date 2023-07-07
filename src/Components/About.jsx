import React from 'react';
import "./About.css"
import perfil from "../Images/perfil.jpeg"
const About = () => {
    return (
       
            <div class="card-presentation">
        
                  <div class="card-presentation__image">
                    <img src={perfil} alt="" />
                  </div>
        <div class="card-presentation__description">         
           <a class="card-presentation__hello">Hello</a>
           <a class="card-presentation__title">I'm  <span>Ivo Ortiz</span></a> 
           <a class="card-presentation__description-text">Developer of software ande programer of videogames </a>
          </div>
       
           <div class="card-presentation__description__info">
           <a class="card-presentation__description__info-item">Age </a>
           <a class="card-presentation__description__info-answer-age">24</a>
           </div>
           <div class="card-presentation__description__info">
           <a class="card-presentation__description__info-item">Addres  </a> 
           <a class= "card-presentation__description__info-answer">Pinamar</a>
           </div>
           <div class="card-presentation__description__info">
           <a class="card-presentation__description__info-item">Email  </a> 
           <a class= "card-presentation__description__info-answer-email">ivo_argentina_07@hotmail.com</a>
           </div>
           <div class="card-presentation__description__info">
           <a class="card-presentation__description__info-item">Phone  </a> 
           <a class= "card-presentation__description__info-answer-phone">2254539705</a>
        
           </div>
           <div class="jumbotron">
            -
           </div>
      
           Hello, my name is Ivo Ortiz and I am a video game developer and programmer. I have graduated from the UADE faculty. I have solid knowledge in web development using the React js framework, knowledge in html, css and javascript,conocimiento en backend con node js y mysql, solid knowledge in the unity engine, knowledge in c# for 3d and 2d game development           </div>


           
        
       
    );
};

export default About;