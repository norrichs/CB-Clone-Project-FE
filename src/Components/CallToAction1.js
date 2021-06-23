import React from 'react';
import '../styles/CallToAction1.scss'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const CallToAction = () => {
    return (
        
        <div id="call-to-action-container">
            <article>
                <h2>Free shipping on all orders!</h2>
                <p>Get items in time for beaching, barbequing & pool-partying!</p>
            </article>
                <span><AiOutlineInfoCircle/></span>
        </div>
    )
}

export default CallToAction;