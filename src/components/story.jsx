import React, { useContext } from 'react'
import Context from '../context/context'
const Story = (props) => {
    const { name } = useContext(Context)
    return (
        <div className="section-stories" id="story">
            <div className="bg-video">
                <video className="bg-video__content" autoplay muted loop> 
                    <source src="./bg-video.mp4" type="video/mp4" />
                    <source src="./bg-video.webm" type="video/webm" />
                     your browser is not supporting!
                </video>
            </div>

        <div className="u-center-text u-margin-bottom-large">
        <h2 className="heading-secondary">
        we make people genuinely happy
         </h2>
        </div> 
        <div class="row">
        <div class="story">
        <figure  className="story__shap">
        <img src='./mary1.jpg' className="story__img" alt="marry smith  photo" />
        <figcaption className="story__caption">Mary Smith</figcaption>
        </figure>
        <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-small">
        i had a best ever with my family 
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vitae mi quis aliquam. Fusce nec libero eu enim consequat hendrerit. Nam nec risus sed quam sollicitudin pulvinar vitae at nunc. Curabitur maximus molestie est, et gravida ante feugiat eget. Fusce ultricies enim in nulla lacinia aliquam. Ut euismod elit at ex commodo accumsan. Vestibulum vel elementum lorem,</p>
        </div>
        </div>
        </div>


        <div class="row">
        <div class="story">
        <figure  className="story__shap">
        <img src='./mary.jpg' className="story__img" alt="marry smith  photo" />
        <figcaption className="story__caption">jack Wilson</figcaption>
        </figure>
        <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-small">
        Wow ! my life completly different
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vitae mi quis aliquam. Fusce nec libero eu enim consequat hendrerit. Nam nec risus sed quam sollicitudin pulvinar vitae at nunc. Curabitur maximus molestie est, et gravida ante feugiat eget. Fusce ultricies enim in nulla lacinia aliquam. Ut euismod elit at ex commodo accumsan. Vestibulum vel elementum lorem,</p>
        </div>
        </div>
        </div>
   <div className="u-center-text u-margin-top-large">
              <a href="#about" className="btn-text ">Read all stories &rarr;</a>
            </div>
        </div>
    )
}
export default Story
