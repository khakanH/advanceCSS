import React, { useContext } from 'react'
import Context from '../context/context'
const Tours = (props) => {
    const { name } = useContext(Context)
    return (
        <div className="section-tours" id="tours">
            <div className="u-center-text u-margin-bottom-large">
        <h2 className="heading-secondary">
        Excitng tour for adventurours people
         </h2>
        </div>

        <div class="row">
            <div className="col-1-3">
                <div className="card">
                <div className="card__side card__side--front card__side--front-1">
                    <div className="card__picture card__picture--1">

                    </div>
                    <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1 ">the sea explorer</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                        <li>3 days tour</li>
                        <li>up to 30 people</li>
                        <li>2 tour guid</li>
                        <li>sleep in cozy hotels</li>
                        <li>Dificullity : easy </li>
                        </ul>
                    </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$270</p>
                </div>
                 <a href="#about" className="btn btn--white btn--animation">Book Now</a>
                </div>

                </div>
                </div>
            </div>    
            
            <div className="col-1-3">
                <div className="card">
                <div className="card__side card__side--front card__side--front-2">
                    <div className="card__picture card__picture--2">

                    </div>
                    <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2 ">the forest killer</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                        <li>7 days tour</li>
                        <li>up to 40 people</li>
                        <li>2 tour guid</li>
                        <li>sleep in provided tents</li>
                        <li>Dificullity : medium </li>
                        </ul>
                    </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$497</p>
                </div>
                 <a href="#about" className="btn btn--white btn--animation">Book Now</a>
                </div>

                </div>
                </div>
            </div>   


            <div className="col-1-3">
                <div className="card">
                <div className="card__side card__side--front card__side--front-3">
                    <div className="card__picture card__picture--3">

                    </div>
                    <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3 ">the snow adventurer</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                        <li>50 days tour</li>
                        <li>up to 15 people</li>
                        <li>3 tour guid</li>
                        <li>sleep in provied tents</li>
                        <li>Dificullity : hard </li>
                        </ul>
                    </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$597</p>
                </div>
                 <a href="#about" className="btn btn--white btn--animation">Book Now</a>
                </div>

                </div>
                </div>
            </div>   

            
        </div>

          <div className="u-center-text u-margin-top-large">
              <a href="#about" className="btn btn--green btn--animation">Discover all tours</a>
            </div>

    </div>
         
        
    )
}
export default Tours
