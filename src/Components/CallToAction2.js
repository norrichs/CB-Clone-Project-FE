import react from 'react';
import '../styles/CallToAction2.scss'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const CallToAction = () => {
    return (
        
        <div id="call-to-action-container2">
            <article>
                <h2>Summer Sale: Up to 50% off online & in stores</h2>
                {/* <p>Get items in time for beaching, barbequing & pool-partying!</p> */}
            </article>
                <span><AiOutlineInfoCircle/></span>
        </div>
    )
}

export default CallToAction;