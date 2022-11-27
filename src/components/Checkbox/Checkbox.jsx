import React from 'react'
import './CheckboxStyles.css'

const Checkbox = (props) => {
    const {
        className = '',
        name,
        id = name,
        isChecked = false,
        onChange,
        label,
    } = props


    return (
        <label className={`${className} checkbox`}>
            <div className='checkbox__container'>
            <input
                className='checkbox__control visually-hidden'
                id={id}
                name={name}
                type='checkbox'
                checked={isChecked}
                onChange={onChange}
            />
            <span className='checkbox__emulator' />
            <span className='checkbox__label'>{label}</span>
            </div>
        </label>
    )
}

export default Checkbox