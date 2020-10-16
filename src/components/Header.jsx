import React from 'react';
import Navbar from '../components/Navbar';

const Header = () => {
    return (
        <div className="banner">
            <Navbar /> <div className="banner_content">
                <div className="container">
                    <div className="banner_text">
                        <h3> Pzaa Devlivery</h3>
                        <h1>MAESTRO PIZINNI</h1>
                        <p>Pizza Product Ingredients List. Bleached wheat flour, corn meal
                        , sugar, soy oil, salt, yeast, corn syrup solids, potassium bromate and enzymes.
                    </p>
                        <div className="banner__btn">
                            <a href="" className="btn btn-smart">DEVLERY NOW</a>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Header
