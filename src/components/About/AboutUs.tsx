import { Box, Stack, Typography, Card } from '@mui/material';
import CustomButton from '../Custom/CustomButton';
import useDeviceWidth from '../hooks/useDeviceWidth';
import colors from '../../colors';
import graduation from '../../images/graduation.jpg'
import React from 'react';
import StudentFeedbackContainer from '../Home/StudentFeedbackComponents/StudentFeedbackContainer';

export interface Config {
  textFontSize?: string;
  headingFontSize?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  color?: string;
  serviceBoxWidth?: string;
  imageWidth?: string;
  imageHeight?: string;
}

const AboutUs = () => {

  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  const config = {
    headingFontSize: isMobileSize ? '20px' : isTabletSize ? '30px' : '40px',
    subHeading: isMobileSize ? '15px' : isTabletSize ? '20px' : '36px',
    text: isMobileSize ? '11px' : isTabletSize ? '16px' : '30px',
    btnHeight: isMobileSize ? '34px' : isTabletSize ? '43px' : '67px',
    btnWidth: isMobileSize ? '100px' : isTabletSize ? '125px' : '192px',
    imageWidth: isTabletSize ? '200px' : '336px',
    imageHeight: isTabletSize ? '200px' : '330px',
    imageBoxWidth: isTabletSize ? '405px' : '600px',
    imageBoxHeight: isTabletSize ? '435px' : '730px',
    borderRadius: '10px',
    color: '#1b1b1b',
    textBoxWidth: isMobileSize ? '340px' : isTabletSize ? '315px' : '830px',
    textBoxHeight: isMobileSize ? '340px' : isTabletSize ? '315px' : '800px',
  };


  return (
    <>
      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Box className="aboutusimage" sx={{ width: '100%', height: '50vh' }}>
          <img src={graduation} alt='about us image' style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
        </Box>
        <Box sx={{ position: 'absolute', zIndex: '99', color: 'white', width: `${isMobileSize ? '95%' : isTabletSize ? '80%' : '50%'}`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Typography sx={{ fontSize: '40px', fontFamily: '"Inter", sans-serif', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1.5px', marginBottom: '10px' }}>Who we are</Typography>
          <Typography sx={{ fontSize: `${isMobileSize ? '9px' : isTabletSize ? '15px' : '12px'}`, fontFamily: '"Inter", sans-serif', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            Danfe Consulting, ABN: 29600505913, was established in 2014 with the aim to support international students in getting professional education counseling and recruitment to Colleges and Universities in the UK,  Australia,Canada & USA. With having much loved clients all over the UK, Australia,Canada & USA we have expanded our services in the UK, Australia, Canada within this short span of time. We provide a range of services including Education and Migration Service, Training and Health Insurance Cover. We have a team of professionals to ensure that you get the right advice. We have devoted teams of highly skilled people to assist students like you across the world in selecting the best courses that are offered at foreign institutions that are appropriate to both your interests and ability.
          </Typography>
        </Box>

      </Box>
    </>
  )
};

export default AboutUs;
