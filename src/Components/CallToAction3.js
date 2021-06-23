import '../styles/CallToAction3.scss'
// import {AiOutlineInfoCircle} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'


const CallToAction3 = () => {
    return (
        <div>
            <div id="call-to-action-container3">
                <article>
                    <h2>Love Fashion?</h2>
                    <h2>A job at H&M may be the perfiect fit!</h2>
                    <p>Be part-time, full-time & maybe stay for a lifetime.</p>
                </article>
            </div>
            <div id="call-to-action-button-container">
               <NavLink to="fake/:applyNow"><button id="call-to-action-button">APPLY NOW</button></NavLink>
            </div>
        </div>
    )
}

export default CallToAction3;