import React, { Component } from 'react'
import './CatalogImageStyles.css'

class CatalogImage extends Component {
    render() {
        return (
            <div className='catalog-image'>
                <div className='catalog-image__body'>
                    <h1 className='catalog-image__heading'>
                        {this.props.heading}
                    </h1>

                    <p className='catalog-image__text'>
                        {this.props.text}
                    </p>
                </div>
            </div>
        )
    }
}

export default CatalogImage