import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import styles from './SocialMediaLinks.module.css'

const SocialMediaLinks = () => {
  return (
    <>
      <FaLinkedin className={`${styles.socialMediaLinks}`} />
      <FaGithub className={`${styles.socialMediaLinks}`} />
      <AiFillInstagram className={`${styles.socialMediaLinks}`} />
      <FaFacebook className={`${styles.socialMediaLinks}`} />
      <FaXTwitter className={`${styles.socialMediaLinks}`} />
    </>
  )
}

export default SocialMediaLinks
