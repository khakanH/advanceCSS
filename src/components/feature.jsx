import React, { useContext } from 'react'
import Context from '../context/context'
const Features = (props) => {
    const { name } = useContext(Context)
    return (
        <div className="section-features" id="features">
        <div class="row">
            <div class="col-1-4">
                <div class="feature-box">
                <i className="feature-box__icon lnr lnr-earth "></i>      
                    <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                    <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vitae mi quis aliquam. Fusce nec libero eu enim consequat hendrerit.
                    
                    </p>
                 </div>
            </div>

            <div class="col-1-4">
                <div class="feature-box">
                <i className="feature-box__icon lnr lnr-eye "></i>      
                    <h3 className="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
                    <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vitae mi quis aliquam. Fusce nec libero eu enim consequat hendrerit.
                    
                    </p>
                 </div>
            </div>

            <div class="col-1-4">
                <div class="feature-box">
                <i className="feature-box__icon lnr lnr-map "></i>      
                    <h3 className="heading-tertiary u-margin-bottom-small">Find Your Way</h3>
                    <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vitae mi quis aliquam. Fusce nec libero eu enim consequat hendrerit.
                    
                    </p>
                 </div>
            </div>

            <div class="col-1-4">
                <div class="feature-box">
                <i className="feature-box__icon lnr lnr-heart "></i>      
                    <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                    <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vitae mi quis aliquam. Fusce nec libero eu enim consequat hendrerit.
                    
                    </p>
                 </div>
            </div>
        </div>
          
    </div>
         
        
    )
}
export default Features
