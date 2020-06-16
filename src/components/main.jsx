import React, { useContext } from 'react'
import Context from '../context/context'
const Main = (props) => {
    const { name } = useContext(Context)
    return (
        <div className="section-about" id="about">
        <div className="u-center-text u-margin-bottom-large">
        <h2 className="heading-secondary">
        Excitng tour for adventurours people
         </h2>
</div>
          <div class="row">
            <div className="col-1-2">
            <h3 className="heading-tertiary u-margin-bottom-small">We are going to fall in love with nature </h3>
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vitae mi quis aliquam. Fusce nec libero eu enim consequat hendrerit. Nam nec risus sed quam sollicitudin pulvinar vitae at nunc. Curabitur maximus molestie est, et gravida ante feugiat eget. Fusce ultricies enim in nulla lacinia aliquam. Ut euismod elit at ex commodo accumsan. Vestibulum vel elementum lorem, </p>


            <h3 className="heading-tertiary u-margin-bottom-small">live adventurours like you never had before </h3>
            <p className="paragraph"> Proin aliquam lacus tincidunt odio euismod consequat ut et massa. In mollis, diam ac placerat feugiat, lorem felis vulputate nibh, quis facilisis erat tellus eget arcu. Pellentesque viverra, nisi ultricies porta eleifend,</p>
                <a href="#" className="btn-text">Learn more &rarr;</a>
            </div>  

        

            <div className="col-1-2">
            <div className="composition">
            <img src="./1-about.jpg"  alt="photo-1" className="composition__photo composition__photo--p1" />
            <img src="./2-about.jpg"  alt="photo-2" className="composition__photo composition__photo--p2" />
            <img src="./3-about.jpg"  alt="photo-3" className="composition__photo composition__photo--p3" />
            </div>
            </div>    
        
         </div>
        </div>
    )
}
export default Main
