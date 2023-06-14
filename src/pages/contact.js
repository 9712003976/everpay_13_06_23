import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ContactHeroSection from "../components/ContactHeroSection/index";
import Contact from "../components/Contact";
import ContactInfoSection from "../components/ContactInfoSection/index";
import ContactGetInTouch from "../components/ContactGetInTouch/index";
import ContactSupportSection from "../components/ContactSupportSection/index";
const ContactUsPage = () => {
const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ContactHeroSection />
      <ContactInfoSection></ContactInfoSection>
      <ContactGetInTouch></ContactGetInTouch>
      <ContactSupportSection></ContactSupportSection>
      {/* <Contact />  */}
      
    </>
  );
};


export default ContactUsPage;
