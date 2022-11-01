import React from 'react'
import  './hero.css'
import HeroImage from '../../assets/images/herocard.webp'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-section'>
            <div className='hero-text'>
                <h1 className='hero-header'>Your finances in your pocket</h1>
                <h1 className='hero-title'>Get your personal</h1>
                <h1 className='hero-title'>Credit Card now</h1>
                <p className='hero-para'>Rewards and benefits without the downsides of a credit card</p>
                <p className='hero-para'>Simplicity and transparency built right in. Leave money issue with</p>
                <p className='hero-para'>us and focus on your core business</p>
                <button className='hero-button'>Leran More</button>
            </div>
            <div className='hero-image'>
                <img className='herocard_image' src={HeroImage} alt='hero' />
            </div>
        </div>
    </div>
  )
}

export default Hero