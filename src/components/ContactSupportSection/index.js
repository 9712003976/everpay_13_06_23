import React, { useState } from "react";
import {
  HeroBg,
  HeroH2,
  PTag,
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
