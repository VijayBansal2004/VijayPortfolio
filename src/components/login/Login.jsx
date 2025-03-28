import { useRef } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from "./Login.module.css"
import AnimatedIcons from '../utilityComponents/animatedIcons/AnimatedIcons';
import Heading from '../utilityComponents/sectionHeading/Heading';

const Login = () => {

    const animatedIcons = [
        {
            imgURL: "/images/plus.svg",
            imgName: "plus",
        },
        {
            imgURL: "/images/strockedSqr.webp",
            imgName: "strockedSqr",
        },
        {
            imgURL: "/images/overlapedSqrs.webp",
            imgName: "overlapedSqrs",
        },
    ];

    const loginId = useRef(null);
    const loginPass = useRef(null);

    const handleSubmit = (e, id, pass) => {
        e.preventDefault();
        // if (process.env.LOGID === id && process.env.LOGPASS === pass) {
        if (process.env.LOG_ID === id && process.env.LOG_PASS === pass) {
            console.log("Hello vijay, Login...")
        } else {
            console.log("wrong id and password")
        }
    }
    return (
        <>
            <div className={`${styles?.login_container} container`}>
                {
                    animatedIcons.map((img) => (
                        <AnimatedIcons key={img.imgURL} imgURL={img.imgURL} imgName={img.imgName} />
                    ))
                }

                <Form onSubmit={(e) => handleSubmit(e, loginId.current.value, loginPass.current.value)}>
                    <Heading heading="Vijay bansal" />
                    <h1 className='text-center scrollReveal w-100 mb-5'>Login to Admin</h1>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" ref={loginId} />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={loginPass} />
                    </Form.Group>
                    <Form.Group className='text-center '>
                        <Button className="primaryBtn fadeUpAnimation w-100" type="submit" size="lg">Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Login