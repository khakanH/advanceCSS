import React, { useContext } from 'react'
import Context from '../context/context'
const PopUp = (props) => {
    const { name } = useContext(Context)
    return (
        <div className="popup" id="popup">
            <div className="popup__content">
                <div className="popup__left">
                    <img src="./1-about.jpg" alt="tour" className="popup__img"/>
                    <img src="./1-about.jpg" alt="tour" className="popup__img"/>
                </div>
                <div className="popup__right">
                <a href="#tours" className="popup__close">&times; </a>
                    <h2 className="heading-secondary u-margin-bottom-medium">Start Booking now</h2>    
                    <h3 className="heading-tertiary u-margin-bottom-small">important &ndash; please read these terms before booking</h3>    
                        <p className="popup__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vitae mi quis aliquam. Fusce nec libero eu enim consequat hendrerit. Nam nec risus sed quam sollicitudin pulvinar vitae at nunc. Curabitur maximus molestie est, et gravida ante feugiat eget. Fusce ultricies enim in nulla lacinia aliquam. Ut euismod elit at ex commodo accumsan. Vestibulum vel elementum lorem, in ultrices lorem. Mauris accumsan, felis id condimentum rhoncus, nisl nunc feugiat nunc, sed dictum lectus nibh nec enim.
                        </p>
                        <a href="#" className="btn btn--green">Book Now</a>
                </div>
            </div>
        </div>
    )
}
export default PopUp
