import { Stack, Box } from '@mui/material';
import React from 'react';
import colors from '../../../colors';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import AboutUs from './AboutUs';
import AboutUsImage from './AboutUsImage';

const AboutUsContainer = () => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  return (
    <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', backgroundColor: '#F9F4EF' }}>
      <Stack
        direction={`${isTabletSize ? 'column' : 'row'}`}
        sx={{
          padding: ` ${isMobileSize ? '2rem' : isTabletSize ? '1rem' : '0rem'
            }`,
          height: 'auto',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        rowGap={1}
      >
        <AboutUs />
        <AboutUsImage />
      </Stack>
    </Box>
  );
};

export default AboutUsContainer;
