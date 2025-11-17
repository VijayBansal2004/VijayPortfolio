import styles from './Projects.module.css'
import ProjectCard from "./ProjectCard"
import FeaturedProjectCard from "./FeaturedProjectCard"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Heading from '../utilityComponents/sectionHeading/Heading';
import { remittanceContent, fantasyContent, tradingContent, allProjects, blockchainContent } from "./data.projects.js"
import { featuredProjectsLeft, featuredProjectsRight } from "./data.featuredProjects.js"
const Projects = () => {
    const tabs = [
        {
            name: "All",
            slug: "all",
            content: allProjects
        },
        {
            name: "Remittance",
            slug: "remittance",
            content: remittanceContent
        },
        {
            name: "Blockchain",
            slug: "blockchain",
            content: blockchainContent
        },
        {
            name: "Trading",
            slug: "trading",
            content: tradingContent
        },
        {
            name: "Fantasy",
            slug: "fantasy",
            content: fantasyContent
        },
    ]
    return (
        <>
            <div className={`${styles?.diverse_sec}`}>
                <div className="container">
                    <Heading heading="Projects" />
                    <h2 className='text-center scrollReveal w-100 mb-5'>Featured Projects</h2>
                    <div className="row">
                        <div className="col col-md-12 text-center m-auto">
                            <div className={styles?.our_eco}>
                                {
                                    featuredProjectsLeft.map((element, index) => (
                                        <FeaturedProjectCard key={element.name} content={element} index={index} />
                                    ))
                                }
                                <div className={styles?.mid_sec}>
                                    <img loading="lazy"
                                        src="/images/about_img.webp"
                                        className={styles?.rotating_coin}
                                        alt="img"
                                    />
                                </div>
                                {
                                    featuredProjectsRight.map((element, index) => (
                                        <FeaturedProjectCard key={element.name} content={element} index={index + 3} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id='projects' className={`${styles?.projectSectionContainer} containerBlockPadding`}>
                <div className="container">
                    {/* <Heading heading="Projects" /> */}
                    <h2 className='text-center scrollReveal w-100 mb-5'>What Can I Do ?</h2>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={tabs[0].slug} className={`${styles?.projectContainer}`}>
                        <Row className='gap-5 gap-sm-0'>
                            <Col sm={3} lg={2}>
                                <Nav variant="pills" className={`flex-column ${styles?.projectNavContainer}`}>
                                    {tabs.map((element) => (
                                        <Nav.Item key={element.slug}>
                                            <Nav.Link eventKey={element.slug} className={`${styles?.primaryColor}`}>{element.name}</Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </Col>
                            <Col sm={9} lg={10}>
                                <Tab.Content>
                                    {
                                        tabs.map((element) => (
                                            <Tab.Pane key={element.slug} eventKey={element.slug}>
                                                <div className={`${styles?.projectCardContainer}`}>
                                                    {
                                                        element.content.map((element) => (
                                                            <ProjectCard key={element.title} content={element} />
                                                        ))
                                                    }
                                                </div>
                                            </Tab.Pane>
                                        ))
                                    }
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>
        </>
    )
}

export default Projects
