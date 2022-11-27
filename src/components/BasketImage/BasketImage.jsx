import React, { Component } from 'react'
import './BasketImageStyles.css'

class BasketImage extends Component {
    render() {
        return (
            <div className='basket-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default BasketImage