import React, { useContext } from 'react'
import Context from '../context/context'
const Navigation = (props) => {
    const { name } = useContext(Context)
    return (
        <div className="navigation" id="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            <label for="navi-toggle" className="navigation__button">
            <span  className="navigation__icon"></span></label>
        <div className="navigation__background"></div>
            <div className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Natous</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your benifits</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>popular tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book Now</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navigation
