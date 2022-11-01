import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <div className='conatct-container'>
            <div className='contact-content'>
                <div className='contact-title'>
                    <h1 className='contact-header'>Request a call back?</h1>
                    <h1 className='contact-text'>Please fill out the form and press the submit</h1>
                    <h1 className='contact-text'>button.We will get back to you with 1-2 business days.</h1>
                </div>
                <div className='contact-form'>
                    <form>
                        <div className='form-group'>
                            <ul className='form'>
                                <li>
                                    <input 
                                        className='full-name' 
                                        type='text'
                                        name='name' 
                                        id='name'
                                        placeholder='Full Name' 
                                    />
                                </li>
                                <li>
                                    <input 
                                        className='email' 
                                        type='email' 
                                        name='email' 
                                        id='email' 
                                        placeholder='Email'
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        className='message' 
                                        name='message' 
                                        id='message' 
                                        cols='30' 
                                        rows='10'
                                        placeholder='Message'
                                    >
                                    </textarea>
                                </li>
                            </ul>
                            <button className='submit-btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact