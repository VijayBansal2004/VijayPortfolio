import React from 'react'
import styles from "./ContactMe.module.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Heading from '../utilityComponents/sectionHeading/Heading';
import SocialMediaLinks from '../utilityComponents/socialMedia/SocialMediaLinks';

import { useForm, ValidationError } from '@formspree/react';

const ContactMe = () => {
    const [state, handleSubmit] = useForm("mblrbzgl");

    if (state.succeeded) {
        return console.log("Form has been submitted!!");
    }

    return (
        <section id='contactMe' className={`${styles.contactMeContainer} text-white containerBlockPadding`}>
            <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center gap-5 gap-lg-0">
                <div className={`${styles.socialMedia} text-center`}>
                    <Heading heading="Social Media" />
                    <div className="links d-flex gap-3 justify-content-center">
                        <SocialMediaLinks />
                    </div>
                </div>
                <div className={`${styles.formContainer} w-100`}>
                    <Heading heading="Contact Me" />
                    <h1 className='text-center mb-2 scrollReveal w-100'>Get In Touch!</h1>

                    <form className={`${styles.contactFeildContainer}`} onSubmit={handleSubmit}>
                        <div className="fadeUpAnimation">
                            {/* <label htmlFor="name">
                                Enter Name
                            </label> */}
                            <input
                                id="name"
                                type="text"
                                name="name"
                                className={`${styles.formControl}`}
                                placeholder='Enter name'
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>

                        <div className="fadeUpAnimation">
                            {/* <label htmlFor="email">
                                Enter Email
                            </label> */}
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className={`${styles.formControl}`}
                                placeholder='Enter email'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="fadeUpAnimation">
                            <textarea
                                id="message"
                                name="message"
                                className={`${styles.formControl}`}
                                placeholder='Enter your thoughts...'
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        {/* <button className="primaryBtn w-100 fadeUpAnimation" type="submit" disabled={state.submitting}>
                            Submit
                        </button> */}
                        <Button className="primaryBtn w-100 fadeUpAnimation" type="submit" size="lg" disabled={state.submitting}>Submit</Button>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default ContactMe
