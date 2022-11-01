import React from 'react'
import './Payment.css'
import Pay from '../../assets/images/payment.webp'

const Payment = () => {
  return (
    <div className='payment-wrapper'>
        <div className='payment-container'>
            <div className='payment-content'>
                <div className='payment-content-text'>
                    <h1 className='finely-header'>Finely payment cards</h1>
                    <p className='pay-para'>In our bank you can choose a personal plastic card for any purpose and at</p>
                    <p className='pay-para'>any price: from inexpensive instant cards to Premium class cards. An instant</p>
                    <p className='pay-para'>payment card is a non-personalized card of international class, which is</p>
                    <p className='pay-para'>issued in a short time and allows you to conveniently and safely use the</p>
                    <p className='pay-para'>money on your card account.</p>
                    <button className='learn-more'>Learn more</button>

                </div>
                <div className='payment-content-image'>
                    <img className='pay-image' src={Pay} alt='payment' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment