import React, { useState } from "react";
import { FaMapMarkerAlt,FaPhone,FaEnvelope,FaFacebookF,FaTwitter,FaGoogle,FaLinkedinIn,FaYoutube,FaInstagram } from "react-icons/fa";
import {
  InfoWrapper,
  Column1,
  Column2,
  ArrowForward,
  ArrowRight,
  
  HeroBg,
  HeroG4,
  HeroMd4,
  Shadowmd,
  FeaturedBox,
  FeaturedBoxicon,
  FeaturedBoxtextcenter,

  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroPmb,
  ImgWrap,
  Img,
  TextCenterPy5,
  HeroH2,
  PTag,
  Dflexcolumn,
  SocialIcons,
  SocialIconli,
  SocialIcontaga,
  SocialIcontagTwittera,
  SocialIcontagGooglea,
  SocialIcontaglinkedina,
  SocialIcontagyoutubea,
  SocialIcontaginstagrama,
  HeroWarp,
  HeroMask,
  HeroContentTag,
  HerocontainerTextCenter,
  HeroPaTag,
} from "./ContactSupportElements.js";
import { Button } from "../ButtonElements";

const ContactSupportSection = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <>
    <HeroWarp>
        <HeroMask></HeroMask>
        <HeroBg style={{backgroundImage: "url('assets/images/bg/image-2.jpg')"}}></HeroBg>
        <HeroContentTag>
            <HerocontainerTextCenter>
                <HeroH2>Awesome Customer Support</HeroH2> 
                <PTag>Have you any query? Don't worry. We have great people ready to help you whenever you need it.</PTag>    
                <HeroPaTag>Find out more</HeroPaTag>
                </HerocontainerTextCenter>
        </HeroContentTag>
    </HeroWarp>    
</>
  );
};

export default ContactSupportSection;
