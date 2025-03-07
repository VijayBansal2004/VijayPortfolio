import React from 'react'
import styles from './Projects.module.css'
import ProjectCard from "./ProjectCard"
import FeaturedProjectCard from "./FeaturedProjectCard"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Heading from '../utilityComponents/sectionHeading/Heading';

const Projects = () => {

    const remittanceContent = [
        {
            imagePath: '/images/everest-remit.webp',
            websiteURL: "https://vijaybansal2004.github.io/Everest-Remit/",
            title: 'Everest Remit',
            discription: 'Facilitatingimage Swift Money Transfers To Nepal!',
        },
        {
            imagePath: '/images/juststake.webp',
            websiteURL: "https://vijaybansal2004.github.io/juststake-dashboard",
            title: 'Juststake',
            discription: 'Admin dashboard',
        },
        {
            imagePath: '/images/kantipur.webp',
            websiteURL: "https://vijaybansal2004.github.io/Kantipur-Rimit",
            title: 'Kantipur Remit',
            discription: 'Send money to Nepal with Kantipur Remit !',
        },
        {
            imagePath: '/images/clearPath.webp',
            websiteURL: "https://vijaybansal2004.github.io/clearpath",
            title: 'ClearPath Remit',
            discription: 'Save up to 3x on international transfers across more than 50 currencies, with no hidden fees.',
        },
    ];

    const blockchainContent = [
        {
            imagePath: '/images/blockNet.webp',
            websiteURL: "https://vijaybansal2004.github.io/blocknetx",
            title: 'BlocknetX',
            discription: 'At Block Net, Blockchain meets Financial Empowerment where Exchange, NFTs and Gaming thrive in the world of Web 3.0',
        },
        {
            imagePath: '/images/tronWolf.webp',
            websiteURL: "https://vijaybansal2004.github.io/TronWolf",
            title: 'TronWolf',
            discription: 'DISCOVER YOUR INNER BEAST AND MAKE YOUR WOLFPACK HOWL!',
        },
        {
            imagePath: '/images/axiBloc.webp',
            websiteURL: "https://axibloc.netlify.app",
            title: 'Axibloc',
            discription: 'Achieving enduring performance for mission-critical priorities',
        },
    ];

    const tradingContent = [
        {
            imagePath: '/images/aio-exchange.webp',
            websiteURL: "https://vijaybansal2004.github.io/AIO-Exchange",
            title: 'AIO Exchange',
            discription: `Trade effortlessly across multiple platforms and leverage price differences, all within AIO’s unified ecosystem.`,
        },
        {
            imagePath: '/images/fintrade-pool.webp',
            websiteURL: "https://vijaybansal2004.github.io/fintrade-pool",
            title: 'Fintrade Pool',
            discription: `Employ our Crypto Trading Platform & Automated Bots powered with smart algorithms and advanced features for spot and futures exchanges!`,
        },
        {
            imagePath: '/images/bitNetX.webp',
            websiteURL: "https://vijaybansal2004.github.io/bitnetX",
            title: 'BitnetX',
            discription: `Make quick purchases and withdrawals to trade in the world's top cryptocurrencies, including Bitcoin, Ethereum, Dogecoin, Tether, and more!`,
        },
        {
            imagePath: '/images/xchangeOn.webp',
            websiteURL: "https://vijaybansal2004.github.io/XchangeOn",
            title: 'XchangeOn',
            discription: `Trade cryptocurrencies across different exchanges through XchangOn’s Arbitrage Trading feature and enjoy the benefits of price differentials between different exchanges.`,
        },
        {
            imagePath: '/images/upshot-Bot.webp',
            websiteURL: "https://vijaybansal2004.github.io/UpshotBot",
            title: 'UpshotBot',
            discription: `Let our advanced bot handle the heavy lifting by finding and acting on price gaps across crypto exchanges.`,
        },

        {
            imagePath: '/images/crypto.webp',
            websiteURL: "https://vijaybansal2004.github.io/crypto",
            title: 'Crypto',
            discription: `Partner with the world’s largest retail broker and take advantage of exceptional market conditions.`,
        },
    ];

    const fantasyContent = [
        {
            imagePath: '/images/hotSport.webp',
            websiteURL: "https://vijaybansal2004.github.io/hotsport",
            title: 'Hotsport',
            discription: 'Playing fantasy cricket on HotSports is easy and enjoyable! Simply assemble your team of 11 players and let the fun begin.',
        },
        {
            imagePath: '/images/super11.webp',
            websiteURL: "https://vijaybansal2004.github.io/Super11",
            title: 'Super11',
            discription: 'GETTING STARTED WITH SUPER11 IS A BREEZE!',
        },
    ];

    const allProjects = [...remittanceContent, ...blockchainContent, ...tradingContent, ...fantasyContent];

    const featuredProjectsLeft = [
        {
            url: "https://vijaybansal2004.github.io/Everest-Remit/",
            imageUrl: "/images/everestRemit_favicon.svg",
            name: "Everest Remit",
            details: "Facilitating Swift Money Transfers To Nepal",
            technology: "HTML, CSS, JavaScript, Figma",
            placement: "right",
        },
        {
            url: "https://vijaybansal2004.github.io/AIO-Exchange/",
            imageUrl: "/images/aioExchange_favicon.svg",
            name: "AIO Exchange",
            details: "Simplify Your Crypto Trading Experience",
            technology: "HTML, CSS, JavaScript, Figma",
            placement: "left",
        },
        {
            url: "https://answerautismtherapy.com/",
            imageUrl: "/images/answerAutism_favicon.svg",
            name: "Answer For Autism",
            details: "Effective Online Autism Intervention Programs for Your Child&apos;s Growth",
            technology: "Wordpress, Elementer, JavaScript, Figma",
            placement: "left",
        },
    ];
    const featuredProjectsRight = [
        {
            url: "https://actautismtherapy.com/",
            imageUrl: "/images/actAutism_favicon.svg",
            name: "Act For Autism",
            details: "Unlock Your Child&apos;s Potential with Our Developmental Therapeutic Program",
            technology: "Wordpress, Elementer, Figma, JavaScript",
            placement: "left",
        },
        {
            url: "https://vijaybansal2004.github.io/juststake-dashboard",
            imageUrl: "/images/juststake_favicon.svg",
            name: "JustStake Dashboard",
            details: "Admin Panel",
            technology: "HTML, CSS, Figma, JavaScript",
            placement: "right",
        },
        {
            url: "https://webcomsystems.net/",
            imageUrl: "/images/webcom_favicon.svg",
            name: "Webcom Systems",
            details: "Blockchain Development Company",
            technology: "Wordpress, wpbakery, HTML, CSS",
            placement: "right",
        },
    ];

    return (

        <>
            <div className={`${styles.diverse_sec}`}>
                <div className="container">
                    <Heading heading="Projects" />
                    <h1 className='text-center scrollReveal w-100 mb-5'>Featured Projects</h1>
                    <div className="row">
                        <div className="col col-md-12 text-center m-auto">
                            <div className={styles.our_eco}>
                                {
                                    featuredProjectsLeft.map((element, index) => (
                                        <FeaturedProjectCard key={element.url} content={element} index={index} />
                                    ))
                                }
                                <div className={styles.mid_sec}>
                                    <img
                                        src="/images/webcom_favicon.svg"
                                        className={styles.rotating_coin}
                                        alt="img"
                                    />
                                </div>
                                {
                                    featuredProjectsRight.map((element, index) => (
                                        <FeaturedProjectCard key={element.url} content={element} index={index + 3} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id='projects' className={`${styles.projectSectionContainer} containerBlockPadding`}>
                <div className="container">
                    <Heading heading="Projects" />
                    <h1 className='text-center scrollReveal w-100 mb-5'>What Can I Do ?</h1>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="allProjects" className={`${styles.projectContainer}`}>
                        <Row className='gap-5 gap-sm-0'>
                            <Col sm={3} lg={2}>
                                <Nav variant="pills" className={`flex-column ${styles.projectNavContainer}`}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="allProjects" className={`${styles.primaryColor}`}>All Projects</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="remittance" className={`${styles.primaryColor}`}>Remittance</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="blockchain" className={`${styles.primaryColor}`}>Blockchain</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="trading" className={`${styles.primaryColor}`}>Trading</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="fantasy" className={`${styles.primaryColor}`}>Fantasy</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9} lg={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="allProjects">
                                        <div className={`${styles.projectCardContainer}`}>
                                            {
                                                allProjects.map((element) => (
                                                    <ProjectCard key={element.title} content={element} />
                                                ))
                                            }
                                        </div>
                                    </Tab.Pane>


                                    <Tab.Pane eventKey="remittance">
                                        <div className={`${styles.projectCardContainer}`}>
                                            {
                                                remittanceContent.map((element) => (
                                                    <ProjectCard key={element.title} content={element} />
                                                ))
                                            }
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="blockchain">
                                        <div className={`${styles.projectCardContainer}`}>
                                            {
                                                blockchainContent.map((element) => (
                                                    <ProjectCard key={element.title} content={element} />
                                                ))
                                            }
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="trading">
                                        <div className={`${styles.projectCardContainer}`}>
                                            {
                                                tradingContent.map((element) => (
                                                    <ProjectCard key={element.title} content={element} />
                                                ))
                                            }
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fantasy">
                                        <div className={`${styles.projectCardContainer}`}>
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
