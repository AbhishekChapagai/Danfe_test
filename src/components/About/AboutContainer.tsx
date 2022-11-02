import { Box } from '@mui/material';
import FooterContainer from '../footer/FooterContainer';
import AboutUsContainer from '../Home/AboutUsComponents/AboutUsContainer';
import Missions from './Missions';
import OurObjectives from './OurObjectives';
import useDeviceWidth from '../hooks/useDeviceWidth';
import AboutUs from './AboutUs';
import { useEffect } from 'react';
import NavigationBar from '../NavigationBar';
import StudentFeedbackContainer from '../Home/StudentFeedbackComponents/StudentFeedbackContainer';


const AboutContainer = () => {

  const { isMobileSize, isTabletSize } = useDeviceWidth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <NavigationBar />
      <AboutUs />
      <Box sx={{ padding: isMobileSize ? '2rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', }}>
        <OurObjectives />
        {/* <Missions /> */}
      </Box>
      <StudentFeedbackContainer />
      <FooterContainer />
    </>
  );
};

export default AboutContainer;
