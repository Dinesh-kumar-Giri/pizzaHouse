import React from 'react'

const Menu = () => {
    return (
        <div className ="about">
         <div className="container">
                <div className="row">
                    
                    <div className="col-6">
                        <div className="about__img">
                            <img src={require('../images/pizza.jpg')} alt="pizaa" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>The Pizza Menu</h3>
                        <h1>CHICAGO THEN CRUST</h1>
                        <p>
                            Pizza is a savory dish of Italian origin consisting of a usually round,
                            flattened base of leavened wheat-based dough topped with tomatoes, cheese,
                            and often various other ingredients which is then baked at a high temperature,
                            traditionally in a wood-fired oven.
                    </p>

                        <div className="banner__btn">
                            <a href="" className="btn btn-smart">VIEW MORE</a>

                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Menu
