import React from 'react';
import "./Portfolio.css"
import Home from "../Images/Home.jpeg"
import Home2 from "../Images/Home2.jpeg"

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
                <div class="portfolio__firstJob__title">Darte Arte Proyect
                <a href="/#"class="portfolio__firstJob-description">
                Full stack Ecommerce page programmed with the React js framework,
                 the page has 2 users, 
                 the client and the administrator managed by jwt token,
                  the objective of the page is to sell clothes with an artistic style.</a>
                </div>
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
                <div class="portfolio__firstJob__Secondtitle">Landing Proyect
                <a href="/#"class="portfolio__firstJob-description">
                Anymo is a project that seeks to sell a 
                subscription-based experience meeting the needs
                 of customers but for the customer to understand how it works,
                  a landing was needed 
                  and that is why it was created
                   because of the need to explain what the project
                    was about and how it worked</a>
                
                </div>
                <div class="portfolio__fistJob_firstSlide-card">
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
            <div class="portfolio__firstJob__Threetitle">La Reina Proyect
            <a href="/#"class="portfolio__firstJob-description"> La reina is an informative project for a well-known bakery
 in pinamar with the intention of using colors, shadows and icons that are very characteristic
  of the place with its well-defined aesthetics.</a></div>
            

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