import React, { useState } from "react";
import { FaMapMarkerAlt,FaPhone,FaEnvelope } from "react-icons/fa";
import {
  HeroG4,
  HeroMd4,
  Shadowmd,
  FeaturedBox,
  FeaturedBoxicon,
  FeaturedBoxtextcenter,
  HeroContainer,
  HeroH1,
  HeroP,
  HeroPmb,
} from "./ContactInfoElements.js";
import { Button } from "../ButtonElements";

const ContactInfoSection = () => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <>
    <HeroContainer>
        <HeroG4>
            <HeroMd4>
                <Shadowmd>
                  <FeaturedBox>
                    <FeaturedBoxtextcenter>
                    <FeaturedBoxicon>
                      <FaMapMarkerAlt></FaMapMarkerAlt>
                    </FeaturedBoxicon>
                      <HeroH1>Payyed Inc.</HeroH1>
                      <HeroP>4th Floor, Plot No.22, Above Public Park<br/>145 Murphy Canyon Rd.<br/>Suite 100-18<br/>San Diego CA 2028 </HeroP>
                  </FeaturedBoxtextcenter>
                  </FeaturedBox>
              </Shadowmd>  
            </HeroMd4>
            <HeroMd4>
                <Shadowmd>
                  <FeaturedBox>
                    <FeaturedBoxtextcenter>
                    <FeaturedBoxicon>
                    <FaPhone></FaPhone>
                    </FeaturedBoxicon>
                  <HeroH1>Telephone</HeroH1>
                  <HeroPmb>(+060) 9898980098</HeroPmb>
                  <HeroP>(+060) 8898880088</HeroP>
                  </FeaturedBoxtextcenter>
                  </FeaturedBox>
              </Shadowmd>  
            </HeroMd4>
            <HeroMd4>
                <Shadowmd>
                  <FeaturedBox>
                    <FeaturedBoxtextcenter>
                    <FeaturedBoxicon>
                        <FaEnvelope></FaEnvelope>
                    </FeaturedBoxicon>
                  <HeroH1>Business Inquiries.</HeroH1>
                  <HeroP>info@payyed.com</HeroP>
                  </FeaturedBoxtextcenter>
                  </FeaturedBox>
              </Shadowmd>  
            </HeroMd4>
        </HeroG4>
    </HeroContainer>
          </>
  );
};

export default ContactInfoSection;
