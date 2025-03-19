import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import styles from "./Blog.module.css"

function Blog(props) {
    return (
        <Modal data-bs-theme="dark" className={`${styles?.modal_container}`} centered size="lg" {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton className={`${styles?.modal_header}`}>
                <Modal.Title className={`${styles?.title}`} id="contained-modal-title-vcenter">
                    <h3 className='text-white'>
                        {props?.blog?.title}
                    </h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={`grid-example ${styles?.body}`}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <img className={`${styles?.content_img}`} src={props?.blog?.content_url} />
                        </Col>
                        <Col xs={12} className='mt-4 mb-4'>
                            <p className={`text-white ${styles?.summary}`}>{props?.blog?.summary}</p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer className={`${styles?.modal_footer}`}>
                <div>
                    <p className={`m-0 p-0 ${styles?.date}`}>Last updated: {props?.blog?.published_date}</p>
                </div>
                <div>
                    <p className={`m-0 p-0 ${styles?.author}`}>Author: {props?.blog?.author}</p>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default Blog