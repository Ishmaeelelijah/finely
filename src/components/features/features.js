import React from 'react'
import './features.css'
import Free from '../../assets/images/free.webp'
import Time from '../../assets/images/time.webp'
import Support from '../../assets/images/support.webp'
import Zero from '../../assets/images/zero.webp'
import Cash from '../../assets/images/cash.webp'
import Online from '../../assets/images/online.webp'
const Features = () => {
  return (
    <div className='features-wrapper'>
        <div className='feature-header'>
            <h1 className='feature-title'>Features</h1>
        </div>

        <div className='feature-content'>
            <div className='feature-item-1'>
                <div className='feature-item-1-content'>
                    <div className='feature-item-1-content-image'>
                        <img  className='item-image'   src={Free} alt='free' />
                    </div>
                    <div className='feature-item-1-content-text'>
                        <h1 className='free-title'>Free enrollment</h1>
                    </div>
                    <div className='feature-item-1-content-description'>
                        <p className='free-para-1'>Sed egestas efficitur justo pulvinar</p>
                        <p className='free-para'>blandit. Proin scelerisque ligula</p>
                        <p className='free-para'>leoegestas efficitur</p>
                    </div>
                </div>
            </div>

            <div className='feature-item-2'>
                <div className='feature-item-1-content'>
                    <div className='feature-item-1-content-image'>
                        <img className='item-image'  src={Time} alt='free' />
                    </div>
                    <div className='feature-item-1-content-text'>
                        <h1 className='fast-title'>Fast and easy</h1>
                        <h1 className='fast-title'>registration</h1>
                    </div>
                    <div className='feature-item-1-content-description'>
                        <p className='free-para-1'>Sed egestas efficitur justo pulvinar</p>
                        <p className='free-para'>blandit. Proin scelerisque ligula</p>
                        <p className='free-para'>leoegestas efficitur</p>
                    </div>
                </div>
            </div>

            <div className='feature-item-3'>
                <div className='feature-item-1-content'>
                    <div className='feature-item-1-content-image'>
                        <img  className='item-image' src={Support} alt='free' />
                    </div>
                    <div className='feature-item-1-content-text'>
                        <h1 className='support-title'>24/7 customer</h1>
                        <h1 className='support-title' >support</h1>
                    </div>
                    <div className='feature-item-1-content-description'>
                        <p className='free-para-1'>Sed egestas efficitur justo pulvinar</p>
                        <p className='free-para'>blandit. Proin scelerisque ligula</p>
                        <p className='free-para'>leoegestas efficitur</p>
                    </div>
                </div>
            </div>

        </div>

        <div className='feature-content-2'>
            <div className='feature-item-1'>
                <div className='feature-item-1-content'>
                    <div className='feature-item-1-content-image'>
                        <img  className='item-image'   src={Zero} alt='free' />
                    </div>
                    <div className='feature-item-1-content-text'>
                        <h1 className='free-title'>Zero commission</h1>
                    </div>
                    <div className='feature-item-1-content-description'>
                        <p className='free-para-1'>Sed egestas efficitur justo pulvinar</p>
                        <p className='free-para'>blandit. Proin scelerisque ligula</p>
                        <p className='free-para'>leoegestas efficitur</p>
                    </div>
                </div>
            </div>

            <div className='feature-item-2'>
                <div className='feature-item-1-content'>
                    <div className='feature-item-1-content-image'>
                        <img className='item-image'  src={Cash} alt='free' />
                    </div>
                    <div className='feature-item-1-content-text'>
                        <h1 className='fast-title'>Free cash</h1>
                        <h1 className='fast-title'>withdrawal</h1>
                    </div>
                    <div className='feature-item-1-content-description'>
                        <p className='free-para-1'>Sed egestas efficitur justo pulvinar</p>
                        <p className='free-para'>blandit. Proin scelerisque ligula</p>
                        <p className='free-para'>leoegestas efficitur</p>
                    </div>
                </div>
            </div>

            <div className='feature-item-3'>
                <div className='feature-item-1-content'>
                    <div className='feature-item-1-content-image'>
                        <img  className='item-image' src={Online} alt='free' />
                    </div>
                    <div className='feature-item-1-content-text'>
                        <h1 className='support-title'>Online Banking</h1>
                    </div>
                    <div className='feature-item-1-content-description'>
                        <p className='free-para-1'>Sed egestas efficitur justo pulvinar</p>
                        <p className='free-para'>blandit. Proin scelerisque ligula</p>
                        <p className='free-para'>leoegestas efficitur</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Features