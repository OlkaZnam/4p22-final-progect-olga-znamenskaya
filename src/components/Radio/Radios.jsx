import React from 'react'
import './RadiosStyles.css'

const Radios = (props) => {
    const {
        className = '',
        name,
        items = [],
        label,
        onChange
    } = props


    return (
        <div className='radios'>
            <div className='radios__label'> {label}</div>
            <ul className='radios__list'>
                {items.map(({ id, label, isChecked }) => (

                    <li className='radios__item' key={id}>
                        <label className='radios__radio'>
                            <div className='radios__container'>
                                <input
                                    className='radios__control visually-hidden'
                                    id={id}
                                    name='name'
                                    checked={isChecked}
                                    type='radio'
                                    onChange={() => onChange(id)}
                                />
                                <span className='radios__emulator' />
                                <span className='radios__radio-label'>{label}</span>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Radios