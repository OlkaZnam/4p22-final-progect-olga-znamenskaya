import React, { Component } from 'react'
import './CatalogImageStyles.css'

class CatalogImage extends Component {
    render() {
        return (
            <div className='catalog-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default CatalogImage