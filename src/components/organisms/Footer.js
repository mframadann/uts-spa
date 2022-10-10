import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "../../assets/svg";
import { SocialMedia } from "../atoms";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper-footer-content">
        <div className="footer-social-media-wrapper">
          <SocialMedia dataIcon={Instagram} alt="instagram" />
          <SocialMedia dataIcon={Github} alt="Github" />
          <SocialMedia dataIcon={Linkedin} alt="Linkedin" />
          <SocialMedia dataIcon={Twitter} alt="Twitter" />
        </div>
        <h3>Created by @mframadann</h3>
      </div>
    </footer>
  );
};

export default Footer;
