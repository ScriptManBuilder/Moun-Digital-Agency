import React from "react";
import {
  FooterWrapper,
  FooterTitle,
  FooterIcons,
  FooterIconLink,
} from "../assets/styles/footer.style";

import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterTitle>© 2025 Moun Digital Agency</FooterTitle>
    <FooterIcons>
      <FooterIconLink href="https://www.instagram.com/moun_digital_agency" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </FooterIconLink>
      <FooterIconLink href="https://www.tiktok.com/@moun.digital.agen" target="_blank" rel="noopener noreferrer">
        <SiTiktok />
      </FooterIconLink>
      <FooterIconLink href="https://t.me/moun_digital" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane />
      </FooterIconLink>
    </FooterIcons>
  </FooterWrapper>
);

export default Footer;