import React, { useContext } from 'react'
import Context from '../context/context'
const Header = (props) => {
    const { name } = useContext(Context)
    return (
        <div className="header">
            <div className="header__logo-box">
                danish
                     </div>
                    <div className="header__text-box">
                    <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
                <a href="#" className="btn btn--white btn--animation">Discover our tour</a>
            </div>

        </div>
    )
}
export default Header
