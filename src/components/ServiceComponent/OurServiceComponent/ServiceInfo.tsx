import { Box, Typography } from '@mui/material';
import React from 'react';
import colors from '../../../colors';
import CustomButton from '../../Custom/CustomButton';
import useDeviceWidth from '../../hooks/useDeviceWidth';

import { Config } from './OurServiceContainer';

interface Props {
  config: Config;
}

const ServiceInfo = ({ config }: Props) => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();

  return (
    <Box
      sx={{
        width: config.serviceBoxWidth,
        display: 'flex',
        alignItems: 'left',
        flexDirection: 'column',
        backgroundColor: '',
        marginTop: isTabletSize ? '20px' : '0px'
      }}
    >
      <Typography
        variant="h6"
        color={config.color}
        fontSize={config.headingFontSize}
        sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', letterSpacing: '1px', paddingBottom: '20px', backgroundColor: '', textAlign: 'start' }}
      >
        Our Services
      </Typography>
      <Typography
        variant="body1"
        color={config.color}
        sx={{ fontSize: 'config.textFontSize', letterSpacing: '.6px', textAlign: 'justify' }}
        marginBottom={'1rem'}

      >
        We just provide university admission services as our main service. However, we do offer free guidance to all  students who want to learn more about student life in the United Kingdom with a general student visa. Similarly, we support students from Europe and the UK when they apply to study in the UK. To increase your chances of being admitted to a UK institution, we have a UK graduate educational consultant who will handle your application. In addition, thanks to a few of our exclusive partners, you can benefit from having your UCAS application checked before submission and getting your offer sooner than if you applied independently.
      </Typography>

      <Typography
        variant="body1"
        color={config.color}
        sx={{ fontSize: '14px', letterSpacing: '.6px', textAlign: 'justify', padding: '20px' }}
        marginBottom={'1rem'}>
        <ul>
          <li>Counseling from British Council Approved Agent</li>
          <li>Discuss on UK University Admission Checklist</li>
          <li>Will offer the UK Universities list </li>
          <li>Will do documentation & review your application form </li>
          <li>Apply for scholarships if available </li>
          <li>Advice on deciding which offer to accept </li>
          <li>Support throughout the application process until enrolment </li>
          <li>We will also try to find accommodation </li>
        </ul>
      </Typography>
    </Box>
  );
};

export default ServiceInfo;
