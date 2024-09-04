import React from 'react'
import styles from "./ContactMe.module.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactMe = () => {
    return (
        <section className={`${styles.contactMeContainer} text-white containerBlockPadding`}>
            <div className="container">
                <div className={`${styles.formContainer}`}>
                    <h1 className='text-center'>Contact Me</h1>
                    <Form className='d-grid gap-4'>
                        <div>
                            <Form.Label htmlFor="inputPassword5">Enter Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="userName"
                                aria-describedby="passwordHelpBlock"
                                className={`${styles.formControl}`}
                            />
                        </div>
                        <div>
                            <Form.Label htmlFor="inputPassword5">Enter Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="userEmail"
                                aria-describedby="passwordHelpBlock"
                                className={`${styles.formControl}`}
                            />
                        </div>
                        <div>
                            <Form.Label htmlFor="inputPassword5">Enter your comments</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                className={`${styles.formControl}`}
                                style={{ height: '100px' }}
                            />
                        </div>
                        <Button className="primaryBtn w-100" type="submit" size="lg">Submit</Button>
                    </Form>
                </div>
            </div>
        </section >
    )
}

export default ContactMe
