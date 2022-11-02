import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../../../colors';
import CustomButton from '../../Custom/CustomButton';
import useDeviceWidth from '../../hooks/useDeviceWidth';

const AboutUs = () => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  return (
    <Box
      sx={{
        width: isDesktopSize ? '100%' : '50%',
        padding: '0.5rem 1rem',
        height: '20%',
      }}
    >
      <Stack
        direction="column"
        rowGap={isMobileSize ? 1 : isTabletSize ? 2 : 3}
      >
        <Typography
          variant={isMobileSize ? 'h6' : 'h4'}
          marginBottom={2}
          color='#1b1b1b'
          fontWeight="bold"
          textAlign={'left'}
          sx={{ letterSpacing: '1px', fontFamily: '"Inter", sans-serif', textTransform: 'uppercase' }}
          data-aos="zoom-in"
        >
          About Us
        </Typography>

        <Typography
          variant="body1"
          marginBottom={0.4}
          color='#575757'
          textAlign={'left'}
          sx={{
            fontSize: isMobileSize
              ? '0.7rem'
              : isTabletSize
                ? '0.8rem'
                : '1.1rem',
            maxWidth: isTabletSize ? '100%' : '100%',
          }}
          data-aos="fade-right"
        >
          Danfe Consulting, ABN: 29600505913, was established in 2014 with the aim to support international students in getting professional education counseling and recruitment to Colleges and Universities in the UK,  Australia,Canada & USA. With having much loved clients all over the UK, Australia,Canada & USA we have expanded our services in the UK, Australia, Canada within this short span of time. We provide a range of services including Education and Migration Service, Training and Health Insurance Cover. We have a team of professionals to ensure that you get the right advice. We have devoted teams of highly skilled people to assist students like you across the world in selecting the best courses that are offered at foreign institutions that are appropriate to both your interests and ability
        </Typography>

        <Box
          sx={{
            textAlign: 'left',
          }}
          data-aos="fade-up"
        >
          <Link to='/about' style={{ textDecoration: 'none' }}><CustomButton
            bagcolor={colors.primary}
            color='white'
            width={isMobileSize ? '72px' : '92px'}
            margin="0"
            fontSize={isMobileSize ? '0.6rem' : undefined}
          >
            Read More
          </CustomButton></Link>
        </Box>
      </Stack>
    </Box >
  );
};

export default AboutUs;
