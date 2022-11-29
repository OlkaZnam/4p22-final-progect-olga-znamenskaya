import React, { Component } from 'react'
import './BasketImageStyles.css'

class BasketImage extends Component {
    render() {
        return (
            <div className='basket-image'>
                <div className='basket-image__body'>
                    <h1 className='basket-image__heading'>
                        {this.props.heading}
                    </h1>
                    
                    <p className='basket-image__text'>
                        {this.props.text}
                    </p>
                </div>
            </div>
        )
    }
}

export default BasketImage