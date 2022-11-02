import React from 'react';
import colors from '../../../colors';
import CustomButton from '../../Custom/CustomButton';
import TextImageBox from '../CommonServiceComponent/TextImageBox';
import img from '../../../images/plane.jpg';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import { Box, Typography, Card, Stack } from '@mui/material';



const MigrationContainer = () => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  const config = {
    headingFontSize: isMobileSize ? '30px' : isTabletSize ? '30px' : '40px',
    subHeading: isMobileSize ? '15px' : isTabletSize ? '20px' : '36px',
    text: isMobileSize ? '11px' : isTabletSize ? '16px' : '30px',
    btnHeight: isMobileSize ? '34px' : isTabletSize ? '43px' : '67px',
    btnWidth: isMobileSize ? 'fit-content' : isTabletSize ? '125px' : '192px',
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
      <Box sx={{ backgroundColor: '', width: '100%', padding: isMobileSize ? '2rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', display: 'flex', justifyContent: 'center', columnGap: '30px', alignItems: 'center' }}>
        <Stack sx={{ width: `${isMobileSize ? '80%' : '52%'}`, height: '100%', backgroundColor: '' }}>
          <Typography
            variant="h6"
            color={config.color}
            fontSize={config.headingFontSize}
            sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', letterSpacing: '1px', backgroundColor: '', textAlign: 'start' }}
          >
            Migration

            <Typography sx={{ marginTop: '10px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales pretium, tincidunt eget sodales velit. Elit ultrices pellentesque mauris amet nulla justo. Ultricies malesuada nec, lacus varius turpis orci dignissim. Aenean sed pretium, mauris vel amet.
            </Typography>
            <CustomButton
              bagcolor={colors.primary}
              color='white'
              width={config.btnWidth}
              margin={0}
            // fontSize={config.btnTextSize}
            >
              Check Your Eligibility
            </CustomButton>
          </Typography>
        </Stack>
        {!isMobileSize && <Card sx={{ width: '48%', height: isMobileSize ? '250px' : isTabletSize ? '250px' : isDesktopSize ? '50vh' : '430px', borderRadius: '2px' }}>
          <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }} />
        </Card>}
      </Box>
    </>
  );
};

export default MigrationContainer;
