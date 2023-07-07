import React from 'react';
import "./Portfolio.css"
import Home from "../Images/Home.jpeg"
import Home2 from "../Images/Home2.jpeg"
import Carro from "../Images/Carro.jpeg"
import ProductDetail from "../Images/ProductDetail.jpeg"
import ProductDetailBuy from "../Images/ProductDetailBuy.jpeg"
import LaReina from "../Images/lareina.png"
import laReinaProducts from "../Images/lareinaProducts.png"
import LaReinaLogo from "../Images/lareinaLogo.png"
import laReinaFooter from "../Images/LaReinaFooter.png"
import Landing1 from "../Images/Landing1.png"
import Landing2 from "../Images/Landing2.png"
import landing3 from "../Images/landing3.png"
import landing4 from "../Images/landing4.png"
const Portfolio = () => {
    return (
        <div class="portfolio">
         
            <div class="portfolio__firstJob">
                <div class="portfolio__firstJob__title">Darte Arte Proyect</div>
                <div class="portfolio__fistJob_firstSlide-card">
                    <img src={Home} alt=""/>
                </div>
        
                <div class="portfolio__firstJob_secondSlide-card">
                <img src={Home2} alt=""/>
                </div>
                <div class="portfolio__fistJob_threeSlide-card">
                    <img src={ProductDetail} alt=""/>
                </div>
        
                <div class="portfolio__firstJob_fourSlide-card">
                <img src={ProductDetailBuy} alt=""/>
                </div>
            </div>
            <div class="Separador"></div>
            <div class="portfolio__secondJob">
                <div class="portfolio__firstJob__Secondtitle">Anymo Landing Proyect</div>
                <div class="portfolio__fistJob_firstSlide-card-landing">
                    <img src={Landing1} alt=""/>
                </div>
        
                <div class="portfolio__firstJob_secondSlide-card">
                <img src={Landing2} alt=""/>
                </div>
                <div class="portfolio__fistJob_threeSlide-card">
                    <img src={landing3} alt=""/>
                </div>
        
                <div class="portfolio__firstJob_fourSlide-card">
                <img src={landing4
                } alt=""/>
                </div>
            </div>
            <div class="Separador-2"></div>
            <div class="portfolio__threeJob">
            <div class="portfolio__firstJob__Threetitle">La Reina Proyect</div>
                <div class="portfolio__fistJob_firstSlide-card">
                    <img src={LaReina} alt=""/>
                </div>
        
                <div class="portfolio__firstJob_secondSlide-card">
                <img src={laReinaFooter} alt=""/>
                </div>
                <div class="portfolio__fistJob_threeSlide-card">
                    <img src={laReinaProducts} alt=""/>
                </div>
        
                <div class="portfolio__firstJob_fourSlide-card">
                <img src={LaReinaLogo
                } alt=""/>
                </div>
            </div>           
            
  
            
        </div>
    );
};

export default Portfolio;