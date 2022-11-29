import React, { Component } from 'react'
import './ContactImageStyles.css'

class ContactImage extends Component {
    render() {
        return (
            <div className='contact-image'>
                <div className='contact-image__body'>
                    <h1 className='contact-image__heading'>
                        {this.props.heading}
                    </h1>

                    <p className='contact-image__text'>
                        {this.props.text}
                    </p>
                </div>
            </div>
        )
    }
}

export default ContactImage