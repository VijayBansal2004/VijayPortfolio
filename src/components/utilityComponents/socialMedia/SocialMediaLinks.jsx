import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import styles from './SocialMediaLinks.module.css'

const SocialMediaLinks = () => {
  return (
    <>
      <a href="https://github.com/VijayBansal2004" target='_black' className={`${styles.socialMediaLinks}`}>
        <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/vijay-bansal-319048249/" target='_black' className={`${styles.socialMediaLinks}`}>
        <FaLinkedin />
      </a>

      <a href="https://x.com/iamvijaybansal" target='_black' className={`${styles.socialMediaLinks}`}>
        <FaXTwitter />
      </a>

      <a href="https://www.instagram.com/itz_vijay_bansal" target='_black' className={`${styles.socialMediaLinks}`}>
        <AiFillInstagram />
      </a>

      <a href="https://www.facebook.com/people/Vijay-Bansal/pfbid02voZ2PoY8fyP2bf8rp25FN1Z6qyAss7fheBNyW796b35qh4en9oFe9eSLFCtXzyBNl/" target='_black' className={`${styles.socialMediaLinks}`}>
        <FaFacebook />
      </a>
    </>
  )
}

export default SocialMediaLinks
