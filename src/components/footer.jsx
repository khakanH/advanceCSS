import React, { useContext } from 'react'
import Context from '../context/context'
const Footer = (props) => {
    const { name } = useContext(Context)
    return (
<div className="footer" id="footer">
    <div className="footer__logo-box">
        <img src="./1-about.jpg" alt="full logo" className="footer__logo" />
            
    </div>
    <div className="row">
           <div className="col-1-2">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="#" className="footer__link">Company</a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">Contact us </a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">Carrier</a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">Privacy Policy</a>
                    </li>
                    <li className="footer__item">
                        <a href="#" className="footer__link">Terms</a>
                    </li>
                </ul>
            </div>
        </div>
           <div className="col-1-2">
        
            <p className="footer__copyright">
                All rights reserved @copyright by <a href="#" className="footer__link"> ZAFKS </a>
             
                Design and Develop by <a href="#" className="footer__link"> Danish ALi </a> 
            </p>
        </div>
    </div>
</div>

    )
}
export default Footer
