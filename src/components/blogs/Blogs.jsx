import React from 'react'
import Heading from '../utilityComponents/sectionHeading/Heading'
import styles from "./Blogs.module.css"

import Card from 'react-bootstrap/Card';

const Blogs = () => {

    const currentDate = () => {
        const date = new Date();
        return date.toDateString();
    }


    const blogs = [
        {
            "id": Date.now(),
            "title": "The Future of Artificial Intelligence",
            "author": "John Doe",
            "published_date": currentDate(),
            "categories": ["AI", "Machine Learning", "Future Tech"],
            "summary": " of AI across industries.",
            "content_url": "https://example.com/future-of-ai"
        },
        {
            "id": Date.now(),
            "title": "Top 10 Programming Languages in 2025",
            "author": "Jane Smith",
            "published_date": "2025-01-10",
            "categories": ["Programming", "Software Development"],
            "summary": "Discover the most popular programming languages to learn in 2025.",
            "content_url": "https://example.com/top-programming-languages-2025"
        },
        {
            "id": Date.now(),
            "title": "Blockchain Beyond Cryptocurrency",
            "author": "Alice Johnson",
            "published_date": "2025-01-05",
            "categories": ["Blockchain", "Fintech", "Technology"],
            "summary": "Learn how blockchain is transforming industries beyond financial services.",
            "content_url": "https://example.com/blockchain-beyond-crypto"
        },
        {
            "id": Date.now(),
            "title": "Cybersecurity Trends in 2025",
            "author": "Mark Lee",
            "published_date": "2025-01-18",
            "categories": ["Cybersecurity", "Privacy", "Technology"],
            "summary": "An overview of emerging cybersecurity threats and solutions.",
            "content_url": "https://example.com/cybersecurity-trends-2025"
        },
        {
            "id": Date.now(),
            "title": "The Rise of Quantum Computing",
            "author": "Emily Carter",
            "published_date": "2025-01-12",
            "categories": ["Quantum Computing", "Innovation"],
            "summary": "Explore how quantum computing is set to revolutionize technology.",
            "content_url": "https://example.com/rise-of-quantum-computing"
        },
        {
            "id": Date.now(),
            "title": "How 5G is Changing Connectivity",
            "author": "David Brown",
            "published_date": "2025-01-03",
            "categories": ["5G", "Connectivity", "Technology"],
            "summary": "Understand the impact of 5G technology on global communication.",
            "content_url": "https://example.com/5g-changing-connectivity"
        },
        {
            "id": Date.now(),
            "title": "The Evolution of Wearable Technology",
            "author": "Sophia Wilson",
            "published_date": "2025-01-20",
            "categories": ["Wearables", "Innovation", "Health Tech"],
            "summary": "Discover how wearable devices are becoming more integrated into daily life.",
            "content_url": "https://example.com/evolution-of-wearables"
        },
    ]


    return (
        <div id='blogs' className={"containerBlockPadding container align-content-center"}>
            <div className='mb-5'>
                <Heading heading="Blogs" />
                <h1 className='text-center mb-5 scrollReveal w-100'>My Blogs</h1>

            </div>

            <div data-bs-theme="dark" className="row">
                {blogs.map(blog => (
                    <div key={blog.id} className={`col-12 col-md-6 col-lg-3 pt-3 pb-3 ${styles.blog_container}`}>
                        <Card className={`w-100 h-100 ${styles.card}`} >
                            <Card.Img variant="top" src='../../../public/images/post1.webp' />
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text className={`${styles.summary}`}>
                                    {blog.summary}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <p className={`text-muted m-0 p-0 ${styles.date}`}>Last updated: {blog.published_date}</p>
                                <p className={`text-muted m-0 p-0 ${styles.author}`}>Author: {blog.author}</p>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs