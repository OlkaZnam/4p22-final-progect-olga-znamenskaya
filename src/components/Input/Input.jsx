import React from 'react'
import './InputStyles.css'

const Input = (props) => {
    const {
        className = '',
        placeholder,
        value,
        onChange
    } = props

    return (
        <input
            className={`${className} input`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input