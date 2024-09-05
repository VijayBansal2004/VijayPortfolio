import React from 'react'
import styles from './Projects.module.css'
import ProjectCard from "./ProjectCard"

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Projects = () => {

    const projectCardContent = [
        {
            imagePath:'../../../public/images/kantipur.png',
            title:'Kantipur Remit',
            discription:'Send your money from Australia to Nepal !',
        },
    ]

  return (
    <section id='#projects' className={`${styles.projectSectionContainer}`}>
        <div className="container">
            <h1 className='text-center' >Projects</h1>
            <Tab.Container id="left-tabs-example" defaultActiveKey="remittance" className={`${styles.projectContainer}`}>
                <Row>
                    <Col sm={2}>
                    <Nav variant="pills" className={`flex-column ${styles.projectNavContainer}`}>
                        <Nav.Item>
                            <Nav.Link eventKey="remittance">Remittance</Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link eventKey="blockchain">Blockchain</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="trading">Trading</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="fantasy">Fantasy</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="funProjects">Fun Projects</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="remittance">
                            {
                                projectCardContent.map((element)=>(
                                    <ProjectCard content={element}/>
                                ))
                            }
                        </Tab.Pane>

                        <Tab.Pane eventKey="blockchain">blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain blockchain </Tab.Pane>

                        <Tab.Pane eventKey="trading">trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading trading  
                        </Tab.Pane>

                        <Tab.Pane eventKey="fantasy">fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy fantasy 
                        </Tab.Pane>

                        <Tab.Pane eventKey="funProjects">funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects funProjects  
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    </section>
    
  )
}

export default Projects
