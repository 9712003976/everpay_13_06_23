import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroWarp = styled.div`
position: relative;
box-shadow: 0px 0px 50px -35px rgba(0, 0, 0, 0.4) !important;
padding: 104px 0;

`;
export const HeroMask = styled.div`
position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: #2dbe60 !important;
    opacity: 0.9;
`;
export const HeroBg = styled.div`
    z-index: 0;
    backgroundImage: "url('assets/images/bg/image-2.jpg')"
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    transition: background-image 300ms ease-in 200ms;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;
export const HeroContentTag = styled.div`
    position: relative;
    z-index: 2;
    box-sizing: border-box;
`;
export const HerocontainerTextCenter = styled.div`
    text-align: center !important;
    width: 100%;
    padding-right: var(--bs-gutter-x, .75rem);
    padding-left: var(--bs-gutter-x, .75rem);
    margin-right: auto;
    margin-left: auto;
@media (min-width: 1400px){
    max-width: 1320px;   
}
@media (min-width: 1200px){
    max-width: 1140px;   
}
@media (min-width: 992px){
    max-width: 960px;   
}
@media (min-width: 768){
    max-width: 720px;   
}
@media (min-width: 576px){
    max-width: 540px;   
}
`;
export const HeroH2 = styled.h2`
    bs-text-opacity: 1;
    text-align: center !important;
    color: #fff; 
    font-size: 2.25rem !important;
    font-family: "Rubik", sans-serif;
    margin-top: 0;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 2.25rem !important;
}
`;
export const PTag = styled.p`
    font-size: 1.125rem !important;
    color: #fff;
    margin-bottom: 1.5rem !important;
    line-height: 1.8; 
    margin-top: 0;
    margin-bottom: 1rem;
`;

export const HeroPaTag = styled.a`
padding: 1.1rem 3rem;
font-weight: 500;
font-size:16px;
line-height: 22px;
color: #2dbe60 !important;
background-color: #f8f9fa;
border-color: #f8f9fa;
border-radius:5px;
`;








export const HeroG4 = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 15px;;
margin-right: 15px;
margin-left: 15px;
`;
export const TextCenterPy5 = styled.div`
text-align: center !important;
padding-top: 3rem !important;
padding-bottom: 3rem !important;
`;



export const Dflexcolumn = styled.div`
flex-direction: column !important;
display: flex !important;
`;
export const SocialIcons = styled.ul`
margin: 0;
padding: 0;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
list-style: none;
justify-content: center !important;
`;
export const SocialIconli = styled.li`
    margin: 2px 6px;
    padding: 0;
    overflow: visible;
    margin-left: 0px;
`;
export const SocialIcontaga = styled.a`
width: 34px;
height: 34px;
line-height: 34px;
font-size: 22px;
color: #3B5998;
display: block;
`;
export const SocialIcontagTwittera = styled.a`
width: 34px;
height: 34px;
line-height: 34px;
font-size: 22px;
color: #00ACEE;
display: block;
`;
export const SocialIcontagGooglea = styled.a`
width: 34px;
height: 34px;
line-height: 34px;
font-size: 22px;
color: #DD4B39;
display: block;
`;

export const SocialIcontaglinkedina = styled.a`
width: 34px;
height: 34px;
line-height: 34px;
font-size: 22px;
color: #0E76A8;
display: block;
`;
export const SocialIcontagyoutubea = styled.a`
width: 34px;
height: 34px;
line-height: 34px;
font-size: 22px;
color: #C4302B;
display: block;
`;
export const SocialIcontaginstagrama = styled.a`
width: 34px;
height: 34px;
line-height: 34px;
font-size: 22px;
color: #3F729B;
display: block;
`;















export const HeroMd4 = styled.div`
  flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 15px;
    @media(min-width: 768px){
      flex: 0 0 auto;
      width: 33.33333%;
    }
`;
export const Shadowmd = styled.div`
  -webkit-box-shadow: 0px 0px 50px -35px rgba(0, 0, 0, 0.4) !important;
  box-shadow: 0px 0px 50px -35px rgba(0, 0, 0, 0.4) !important;
  border-radius: 0.25rem !important;
  background-color: #fff;
  padding: 1rem !important;
  height: 100% !important;
`;
export const FeaturedBoxtextcenter= styled.div`
box-sizing: border-box;
margin-left: auto;
margin-right: auto;
position: relative;
text-align: center !important;
`;
export const FeaturedBoxicon = styled.div`
    display: inline-block;
    font-size: 40px;
    height: 45px;
    line-height: 45px;
    padding: 0;
    width: 45px;
    margin-top: 0;
    margin-bottom: 20px;
    color: #4c4d4d;
    border-radius: 0;
    color: #2dbe60 !important;
    margin-top: 1.5rem !important;
`;













export const InfoWrapper = styled.div`
  display: grid;
  background: #fff;
    max-width: 860px;
    grid-auto-columns: minmax(auto, 1fr);
    -webkit-box-align: center;
    align-items: center;
    grid-template-areas: "col2 col1";
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 480px;
  position: relative;
  padding: 36px 25px 10px 2px;
  display: flex;
  flex-direction: column;
`;

export const Column1 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 480px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ImgWrap = styled.div`
  max-width: 380px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 40px 20px 5px 15px;
  padding-right: 10px;
  border-radius: 0.3rem !important;    
  box-shadow: 0 1rem 3rem rgba(0,0,0,0.175) !important;
  max-width: 100%;
  height: auto;
  vertical-align: inherit;
  z-index: 3;
  position: relative;
`;


export const HeroH1 = styled.h1`
font-size: 20px;
margin-bottom: 10px;
font-weight: 500;
color: #1e1d1c;
font-family: "Rubik", sans-serif;

`;

export const HeroP = styled.p`
text-align: center !important;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroPmb = styled.p`
margin-bottom: 0 !important;

`;

export const HeroBtnWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Button = styled.div`
    padding: 18px 30px !important;
    color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
