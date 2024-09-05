import React from 'react'
import styles from "./ContactMe.module.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Heading from '../utilityComponents/sectionHeading/Heading';
import SocialMediaLinks from '../utilityComponents/socialMedia/SocialMediaLinks';

const ContactMe = () => {
    return (
        <section className={`${styles.contactMeContainer} text-white containerBlockPadding`}>
            <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center">
                <div className={`${styles.socialMedia} w-25 text-center`}>
                    <Heading heading="Social Media" />
                    <div className="links d-flex gap-3 justify-content-center">
                        <SocialMediaLinks />
                    </div>
                </div>
                <div className={`${styles.formContainer} w-100`}>
                    <Heading heading="Contact Me" />
                    <Form className='d-grid gap-4'>
                        <div className="fadeUpAnimation">
                            <Form.Label htmlFor="inputPassword5">Enter Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="userName"
                                aria-describedby="passwordHelpBlock"
                                className={`${styles.formControl}`}
                            />
                        </div>
                        <div className="fadeUpAnimation">
                            <Form.Label htmlFor="inputPassword5">Enter Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="userEmail"
                                aria-describedby="passwordHelpBlock"
                                className={`${styles.formControl}`}
                            />
                        </div>
                        <div className="fadeUpAnimation">
                            <Form.Label htmlFor="inputPassword5">Enter your comments</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                className={`${styles.formControl}`}
                                style={{ height: '100px' }}
                            />
                        </div>
                        <Button className="primaryBtn w-100 fadeUpAnimation" type="submit" size="lg">Submit</Button>
                    </Form>
                </div>
            </div>
        </section >
    )
}

export default ContactMe
