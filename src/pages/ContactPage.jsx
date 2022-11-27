import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ContactImage from '../components/ContactImage/ContactImage'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <ContactImage heading='CONTACT US' text='We’re here to answer any questions!' />
            <Form />
            <Footer />
        </div>
    )
}

export default ContactPage