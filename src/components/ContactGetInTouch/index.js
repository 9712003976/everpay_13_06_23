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
} from "./GetInTouchElements.js";
import { Button } from "../ButtonElements";

const ContactGetInTouch = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <>
    <HeroContainer>
      <TextCenterPy5>
        <HeroH2>Get in touch</HeroH2>
        <PTag>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</PTag>
        <Dflexcolumn>
            <SocialIcons>
                <SocialIconli>
                <SocialIcontaga>
                    <FaFacebookF></FaFacebookF>
                </SocialIcontaga>   
                </SocialIconli>
                
                <SocialIconli>
                <SocialIcontagTwittera>
                    <FaTwitter></FaTwitter>
                </SocialIcontagTwittera>   
                </SocialIconli>  

            <SocialIconli>
                <SocialIcontagGooglea>
                    <FaGoogle></FaGoogle>
                </SocialIcontagGooglea>   
            </SocialIconli>    


            <SocialIconli>
                <SocialIcontaglinkedina>
                    <FaLinkedinIn></FaLinkedinIn>
                </SocialIcontaglinkedina>   
            </SocialIconli>

            <SocialIconli>
                <SocialIcontagyoutubea>
                    <FaYoutube></FaYoutube>
                </SocialIcontagyoutubea>   
            </SocialIconli>

            <SocialIconli>
                <SocialIcontaginstagrama>
                    <FaInstagram></FaInstagram>
                </SocialIcontaginstagrama>   
            </SocialIconli>          

            </SocialIcons>
        </Dflexcolumn>
        </TextCenterPy5>    
      </HeroContainer>
          </>
  );
};

export default ContactGetInTouch;
