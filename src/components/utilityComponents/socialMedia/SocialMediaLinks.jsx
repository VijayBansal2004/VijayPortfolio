import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import styles from './SocialMediaLinks.module.css'

const SocialMediaLinks = () => {
  const socialMediaLinks = [
    {
      name: "Github",
      link: "https://github.com/VijayBansal2004",
      icon: <FaGithub />
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/vijay-bansal-319048249",
      icon: <FaLinkedin />
    },
    {
      name: "XTwitter",
      link: "https://x.com/iamvijaybansal",
      icon: <FaXTwitter />
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/itz_vijay_bansal",
      icon: <AiFillInstagram />
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/itzvijaybansal",
      icon: <FaFacebook />
    },

  ]
  return (
    <>
      {
        socialMediaLinks.map((link) => {
          return (
            <a key={link.name} href={link.link} target='_black' className={`${styles?.socialMediaLinks}`}>
              {link.icon}
            </a>
          )
        })
      }
    </>
  )
}

export default SocialMediaLinks
