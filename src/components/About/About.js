import React from 'react'
import './About.css'
import Stats from '../../assets/images/stats.webp'

const About = () => {
  return (
    <div className='about-wrapper'>
        <div className='about-container'>
            <div className='about-content'>
               <div className='about-text'>
                    <h1 className='about-header'>ABOUT</h1>
                    <div className='numbers'>
                        <div className='number-1'>
                            <h1 className='number-title'>55</h1>
                            <p className='number-para'>Support countries</p>
                        </div>
                        <div className='number-2'>
                            <h1 className='number-title'>68k</h1>
                            <p className='number-para'>Number of cards</p>
                        </div>
                    </div>

                    <div className='numbers'>
                        <div className='number-1'>
                            <h1 className='number-title'>12k</h1>
                            <p className='number-para'>transactions per day </p>
                        </div>
                        <div className='number-2'>
                            <h1 className='number-title'>61%</h1>
                            <p className='number-para'>Shares of contributors</p>
                        </div>
                    </div>
               </div>

               
                <div className='about-image'>
                    <img className='state-image' src={Stats} alt='stats' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About