import React, { useEffect } from 'react';
import FooterContainer from '../footer/FooterContainer';
import NavigationBar from '../NavigationBar';
import AboutUsContainer from './AboutUsComponents/AboutUsContainer';
import FormContainer from './CallFormComponents/FormContainer';
import CountryList from './CountryComponents/CountryList';
import NavBanner from './NavBanner';
import ServiceList from './OurServiceComponents/ServiceList';
import StudentFeedbackContainer from './StudentFeedbackComponents/StudentFeedbackContainer';
import TopDestinationContainer from './TopDestinationComponents/TopDestinationContainer';
import UpcomingEventContainer from './UpcomingEventsComponents/UpcomingEventContainer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <NavigationBar />
      <NavBanner />
      {/* <CountryList /> */}
      <TopDestinationContainer />
      <ServiceList />
      <AboutUsContainer />
      <StudentFeedbackContainer />
      <UpcomingEventContainer />
      <FormContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
