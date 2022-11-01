import React from 'react'
import './Card.css'
import GreenCard from '../../assets/images/greencard.webp'
import RedCard from '../../assets/images/redcard.webp'
import BlackCard from '../../assets/images/blackcard.webp'

const Card = () => {
  return (
    <div className='card-wrapper'>
        <div className='card-container'>
            <div className='card-header'>
                <h1 className='choose'>Choose your card</h1>
                <h1 className='choose-1'>In our bank you can choose a personal plastic card for any purpose and at any price</h1>
            </div>
            <div className='card-content'>
                <div className='green-card'>
                    <h1 className='green-title'>Standard card</h1>
                    <img className='green' src={GreenCard} alt='green-card' />
                    <h1 className='green-month'>$00.00 /month</h1>
                    <ul className='green-ul'>
                        <li>Free and without documents</li>
                        <li>Credit - free</li>
                        <li>Apple Pay / Google Pay</li>
                        <li>Bonuses for payment by card</li>
                        <li>Credit limit up to UAH 50,000k</li>
                    </ul>
                    <button className='green-button'>Get A Card Online</button>
                </div>
                <div className='red-card'>
                <h1 className='green-title'>Universal card</h1>
                    <img className='green' src={RedCard} alt='green-card' />
                    <h1 className='green-month'>$10.00 /month</h1>
                    <ul className='green-ul'>
                        <li>Free and without documents</li>
                        <li>Credit - free</li>
                        <li>Apple Pay / Google Pay</li>
                        <li>Bonuses for payment by card</li>
                        <li>Credit limit up to UAH 50,000k</li>
                    </ul>
                    <button className='green-button'>Get A Card Online</button>
                </div>
                <div className='black-card'>
                <h1 className='green-title'>Premium</h1>
                    <img className='green' src={BlackCard} alt='green-card' />
                    <h1 className='green-month'>$50.00 /month</h1>
                    <ul className='green-ul'>
                        <li>Free and without documents</li>
                        <li>Credit - free</li>
                        <li>Apple Pay / Google Pay</li>
                        <li>Bonuses for payment by card</li>
                        <li>Credit limit up to UAH 50,000k</li>
                    </ul>
                    <button className='green-button'>Get A Card Online</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card