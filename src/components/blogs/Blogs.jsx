import { useState } from 'react'
import Heading from '../utilityComponents/sectionHeading/Heading'
import styles from "./Blogs.module.css"
import Card from 'react-bootstrap/Card';
import Blog from './blog';
import blogs from "./data.blogs"
// import { v4 as uuidv4 } from 'uuid';

const Blogs = () => {
    const [modalShow, setModalShow] = useState(false);
    const [blog, setblog] = useState(null);

    function handleCardClick(e, id) {
        e.preventDefault();
        console.log(e)

        let content = blogs.filter(blog => id === blog.id);

        if (content.length > 0) {
            setblog(content[0]);
            setModalShow(true);
        } else {
            console.error("Blog not found for the given ID");
        }
    }

    return (
        <div id='blogs' className={"containerBlockPadding container align-content-center"}>
            <div className='mb-5'>
                <Heading heading="Blogs" />
                <h1 className='text-center scrollReveal w-100'>My Blogs</h1>
            </div>

            <div data-bs-theme="dark" className="row">
                {blogs.map(blog => (
                    <div id={blog.id} key={blog.id} className={`col-12 col-md-6 col-lg-4 pt-3 pb-3 ${styles?.blog_container}`} onClick={(e) => handleCardClick(e, blog.id)}>
                        <Card className={`w-100 h-100 ${styles?.card}`} >
                            <Card.Img variant="top" src={blog.content_url} />
                            <Card.Body>
                                <div className='mb-3'>
                                    <p className={`text-muted m-0 p-0 ${styles?.date}`}>Last updated: {blog.published_date}</p>
                                    {/* <p className={`text-muted m-0 p-0 ${styles?.author}`}>Author: {blog.author}</p> */}
                                </div>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text className={`${styles?.summary}`}>
                                    {blog.summary}
                                </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                            </Card.Footer> */}
                        </Card>
                    </div>
                ))}
            </div>
            <Blog blog={blog} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default Blogs