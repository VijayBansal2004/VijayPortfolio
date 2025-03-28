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
                                    <img
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
                    <Tab.Container id="left-tabs-example" defaultActiveKey="allProjects" className={`${styles?.projectContainer}`}>
                        <Row className='gap-5 gap-sm-0'>
                            <Col sm={3} lg={2}>
                                <Nav variant="pills" className={`flex-column ${styles?.projectNavContainer}`}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="allProjects" className={`${styles?.primaryColor}`}>All Projects</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="remittance" className={`${styles?.primaryColor}`}>Remittance</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="blockchain" className={`${styles?.primaryColor}`}>Blockchain</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="trading" className={`${styles?.primaryColor}`}>Trading</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="fantasy" className={`${styles?.primaryColor}`}>Fantasy</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9} lg={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="allProjects">
                                        <div className={`${styles?.projectCardContainer}`}>
                                            {
                                                allProjects.map((element) => (
                                                    <ProjectCard key={element.title} content={element} />
                                                ))
                                            }
                                        </div>
                                    </Tab.Pane>


                                    <Tab.Pane eventKey="remittance">
                                        <div className={`${styles?.projectCardContainer}`}>
                                            {
                                                remittanceContent.map((element) => (
                                                    <ProjectCard key={element.title} content={element} />
                                                ))
                                            }
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="blockchain">
                                        <div className={`${styles?.projectCardContainer}`}>
                                            {
                                                blockchainContent.map((element) => (
                                                    <ProjectCard key={element.title} content={element} />
                                                ))
                                            }
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="trading">
                                        <div className={`${styles?.projectCardContainer}`}>
                                            {
                                                tradingContent.map((element) => (
                                                    <ProjectCard key={element.title} content={element} />
                                                ))
                                            }
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fantasy">
                                        <div className={`${styles?.projectCardContainer}`}>
                                            {
                                                fantasyContent.map((element) => (
                                                    <ProjectCard key={element.title} content={element} />
                                                ))
                                            }
                                        </div>
                                    </Tab.Pane>
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
