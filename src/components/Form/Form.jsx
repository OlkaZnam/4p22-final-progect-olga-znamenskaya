import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import FileAttach from '../FileAttach/FileAttach'
import Radios from '../Radio/Radios'
import './FormStyles.css'

const Form = () => {
    const [agreement, setAgreement] = useState(false)

    const [genderVariants, setGenderVariants] = useState([
        {
            id: 'male',
            label: 'Male',
            isChecked: false
        },
        {
            id: 'female',
            label: 'Female',
            isChecked: false
        }
    ])

    const onGenderVariantChange = (id) => {
        const newGenderVariants = genderVariants.map((genderVariant) => ({
            ...genderVariant,
            isChecked: genderVariant.id === id
        }))

        setGenderVariants(newGenderVariants)

        setFormData(() => ({
            ...formData,
            ["gender"]: id
        }))
    }

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        gender: genderVariants.find(({ isChecked }) => isChecked)?.id ?? null,
        subject: '',
        details: ''
    })

    const [formError, setFormError] = useState({})

    const onChangeHandler = (event) => {
        if (event.target.name === 'agreement') {
            setAgreement(event.target.checked)
        }
        if (event.target.name === 'gender')
            console.log('Change Handler', event.target.value)
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        let err = {}

        if (formData.username === '') {
            err.username = 'Username required!'
        }
        if (formData.email === '') {
            err.email = 'Email required!'
        } else {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if (!regex.test(formData.email)) {
                err.email = 'Email not valid!'
            }
        }
        if (formData.gender === null) {
            err.gender = 'Gender required!'
        }
        if (formData.subject === '') {
            err.subject = 'Subject required!'
        }
        if (formData.details === '') {
            err.details = 'Details required!'
        }
        if (!agreement) {
            err.agreement = 'Agreement required!'
        }

        setFormError({ ...err })

        return Object.keys(err).length < 1;
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        let isValid = validateForm()

        if (isValid) {
            console.log("Form Data:", formData)
        } else {
            console.log('In-Valid Form')
        }
    }

    return (
        <form className='form' onSubmit={onSubmitHandler}>
            <div className='form-item'>
                <span className='form-item__error'>
                    {formError.username}
                </span>
                <label
                    className='form-item__label'
                    htmlFor="username"
                >
                    Your Name
                </label>
                <input
                    className='form-item__input'
                    name="username"
                    onChange={onChangeHandler}
                    value={formData.username}
                ></input>
            </div>

            <div className='form-item'>
                <span className='form-item__error'>
                    {formError.email}
                </span>
                <label
                    className='form-item__label'
                    htmlFor='email'
                >Email</label>
                <input
                    className='form-item__input'
                    name='email'
                    onChange={onChangeHandler}
                    value={formData.email}
                ></input>
            </div>

            <div className='form-item'>
                <span className='form-item__error'>
                    {formError.gender}
                </span>
                <Radios
                    name='gender'
                    label='Gender'
                    items={genderVariants}
                    onChange={onGenderVariantChange}
                />
            </div>

            <div className='form-item'>
                <span className='form-item__error'>
                    {formError.subject}
                </span>
                <label
                    className='form-item__label'
                    htmlFor='subject'
                >
                    Subject
                </label>
                <input
                    className='form-item__input'
                    type='text'
                    name='subject'
                    onChange={onChangeHandler}
                    value={formData.subject}
                />
            </div>

            <div className='form-item'>
                <span className='form-item__error'>
                    {formError.details}
                </span>
                <label
                    className='form-item__label'
                    htmlFor='details'
                >
                    Details
                </label>
                <textarea
                    className='form-item__textarea'
                    rows='6'
                    name='details'
                    placeholder='Type a short message here'
                    onChange={onChangeHandler}
                    value={formData.details}
                />
            </div>

            <div className='form-item'>
                <FileAttach 
                 onChange = {(event) => console.log(event)}
                />
            </div>

            <div className='form-item'>
                <span className='form-item__error'>
                    {formError.agreement}
                </span>
                <Checkbox
                    name='agreement'
                    label='I consent to having Plants Planet collect my details.'
                    isChecked={agreement}
                    onChange={onChangeHandler}
                />
            </div>

           


            <button
                className='form__button button'
                type='submit'
            >
                Submit
            </button>
        </form>
    )
}

export default Form