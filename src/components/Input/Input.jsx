import React from 'react'
import './InputStyles.css'

const Input = (props) => {
    const {
        placeholder,
        value,
        onChange
    } = props

    return (
        <input
            className='input'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input