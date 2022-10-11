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
            <SocialMedia
              dataIcon={Instagram}
              alt="instagram"
              link="https://instagram.com/mframadann"
            />
            <SocialMedia
              dataIcon={Github}
              alt="Github"
              link="https://github.com/Ramadandev"
            />
            <SocialMedia
              dataIcon={Linkedin}
              alt="Linkedin"
              link="https://www.linkedin.com/in/muhamad-firly-ramadan-255b1b20a/"
            />
            <SocialMedia
              dataIcon={Twitter}
              alt="Twitter"
              link="https://twitter.com/mframadann"
            />
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
