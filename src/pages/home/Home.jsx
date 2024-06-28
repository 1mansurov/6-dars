import './Home.css'
import ava from '../../images/ava.png'

import React from 'react'

const Home = () => {
    return (
        <div>
            
            <div className="hero">
                <img src={ava} alt="" />
                <div className='hero__title' >
                    <h2>Mansurov Abdulloh</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab delectus iste blanditiis at consequatur laboriosam nemo quae provident, quibusdam cupiditate repudiandae eius excepturi. Optio mollitia, assumenda, voluptatum blanditiis reprehenderit recusandae molestias temporibus praesentium doloremque quaerat quia placeat cumque inventore ipsa, officiis ad quasi? Quibusdam, nostrum?</p>
                </div>
            </div>
        </div>
    )
}

export default Home

