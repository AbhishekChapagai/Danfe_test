import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import FooterContainer from '../footer/FooterContainer';
import useDeviceWidth from '../hooks/useDeviceWidth';
import NavigationBar from '../NavigationBar';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactContainer = () => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <NavigationBar />
      <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem' }}>
        <Stack
          direction={isTabletSize ? 'column' : 'row'}
          sx={{ backgroundColor: '' }}
          justifyContent="center"
          columnGap={5}
        //   alignItems="center"
        >
          {!isMobileSize && <ContactInfo />}

          <ContactForm />
        </Stack>
        <Stack sx={{ marginTop: '50px' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.972497882937!2d85.33322451487079!3d27.687244882800194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bdc5d04d8b%3A0x204ad36890e75830!2sDanfe%20Consulting%20Education%20%26%20Visa%20Services-%20Kathmandu!5e0!3m2!1sen!2snp!4v1666179454761!5m2!1sen!2snp" width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
        </Stack>
      </Box>

      <FooterContainer />
    </>
  );
};

export default ContactContainer;
