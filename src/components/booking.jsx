import React, { useContext } from 'react'
import Context from '../context/context'
const Booking = (props) => {
    const { name } = useContext(Context)
    return (
     <div className="section-book" id="book">
        <div class="row">
            <div className="book">
                <div className="book__form">
                    <form action="#" class="form">
                    <div className="u-margin-bottom-medium">
                        <h2 className="heading-secondary">
                        Start Booking Now
                        </h2>
                    </div>
                        <div className="form__group">
                            <input type="text" className="form__input" id="fullname" placeholder="Full name" required/>
                            <label className="form__label" for="fullname">Full Name</label>
                        </div>
                        <div className="form__group">
                            <input type="email" className="form__input" id="email" placeholder="Email" required/>
                            <label className="form__label" for="email">Email</label>
                        </div>

                        <div className="form__radio-group u-margin-bottom-medium">
                            <input type="radio" className="form__radio-input" id="small" name="size" />
                            <label className="form__radio-label" for="small">
                            <span className="form__radio-button"></span>
                            Small tour group</label>
                        </div>
                        <div className="form__radio-group"> 
                            <input type="radio" className="form__radio-input" id="large" name="size" />
                            <label className="form__radio-label" for="large">
                            <span className="form__radio-button"></span>
                            Large tour group</label>
                        </div>
                        <div className="form__group"> 
                            <button type="submit" className="btn btn--green">Next Step &rarr;</button>
                        </div>
                    </form>
                </div>
            </div>   
         </div>
    </div>
    )
}
export default Booking
