import React from 'react'
import './Online.css'
import Bank from '../../assets/images/bank.webp'

const Online = () => {
  return (
    <div className='online-wrapper'>
        <div className='online-container'>
            <div className='online-content'>
                <div className='online-image'>
                    <img className='online-image' src={Bank} alt='online' />
                </div>
                <div className='online-text'>
                    <h1 className='online-header'>Online Banking</h1>
                    <ul className='online-ul'>
                        <li>Change of limits</li>
                        <li>Currency exchange operations</li>
                        <li>Opening deposits</li>
                        <li>Payment of utility services</li>
                        <li>Online transfers and payments</li>
                        <li>Loans processing</li>
                        <li>Activating Apple Pay, Google Pay and Garmin Pay mobile wallets</li>
                    </ul>
                    <div className='online-button'>
                        <button className='playstore'>App Store</button>
                        <button className='applestore'>Google Play</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Online