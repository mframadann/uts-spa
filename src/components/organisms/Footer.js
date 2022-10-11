import React from "react";
import {
  EmailIcon,
  FooterBanner,
  Github,
  Instagram,
  Linkedin,
  SiteIcon,
  Twitter,
} from "../../assets/svg";
import { SocialMedia } from "../atoms";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper-footer-content">
        <div className="footer-image-wrapper">
          <img src={FooterBanner} alt="footer-banner" />
          <div className="text-footer-image-box">
            <p>
              Muhamad Firly Ramadan - junior back end developer from Cirebon,
              West Java, Indonesia
            </p>
          </div>
        </div>
        <div className="right-side-footer-content">
          <div className="footer-social-media-wrapper">
            <SocialMedia dataIcon={Instagram} alt="instagram" />
            <SocialMedia dataIcon={Github} alt="Github" />
            <SocialMedia dataIcon={Linkedin} alt="Linkedin" />
            <SocialMedia dataIcon={Twitter} alt="Twitter" />
          </div>
          <div className="footer-information-box">
            <p>
              <img src={EmailIcon} alt="mail" />
              muhamadfirlyramadan20@gmail.com
            </p>
            <p>
              <img src={SiteIcon} alt="site-icon" />
              https://mframadan.vercel.app
            </p>
          </div>
        </div>
      </div>
      <div className="footer-text-watermark">
        <h3 align="center">Created by Muhamad Firly Ramadan</h3>
      </div>
    </footer>
  );
};

export default Footer;
